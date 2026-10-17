#!/usr/bin/env node
/**
 * Builds src/lib/transit-feeds.generated.ts: every live, keyless GTFS-Realtime
 * vehicle-position feed we can find, checked against the feed itself.
 *
 *   node tools/generate-transit-feeds.mjs
 *
 * Candidates come from the Mobility Database catalogue (MobilityData, the
 * body that maintains GTFS), filtered to vehicle-position feeds that need no
 * key, plus the few listed under EXTRA below. Every candidate is then fetched
 * and decoded. A feed is kept only when it decodes and either has vehicles now
 * or has a known service area (a feed can be empty at night). Its area comes
 * from the vehicles it reported, else from the catalogue's schedule data.
 *
 * Needs Node 22.18+ (it imports the TypeScript decoder directly).
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { decodeVehicleFeed } from '../src/lib/gtfs-rt.ts';

const CATALOGUE = 'https://storage.googleapis.com/storage/v1/b/mdb-csv/o/sources.csv?alt=media';
const OUT = fileURLToPath(new URL('../src/lib/transit-feeds.generated.ts', import.meta.url));
const UA = 'OSIRIS-Transit/1.0 (+https://osirisai.live)';
const TIMEOUT_MS = 20_000;
const CONCURRENCY = 16;
/** Positions older than this at probe time mean the feed has stopped updating. */
const STALE_S = 6 * 3600;

/** Feeds the catalogue lacks or lists in a form that does not answer. */
const EXTRA = [
  { provider: 'Entur (all of Norway)', country: 'NO', url: 'https://api.entur.io/realtime/v1/gtfs-rt/vehicle-positions', headers: { 'ET-Client-Name': 'osiris-transit' }, license: 'https://developer.entur.org/pages-intro-authentication' },
  { provider: 'HSL (Helsinki region)', country: 'FI', url: 'https://realtime.hsl.fi/realtime/vehicle-positions/v2/hsl', license: 'https://www.hsl.fi/en/hsl/open-data' },
  { provider: 'OVapi (all of the Netherlands)', country: 'NL', url: 'https://gtfs.ovapi.nl/nl/vehiclePositions.pb', license: 'https://gtfs.ovapi.nl/README' },
  { provider: 'TransLink (South East Queensland)', country: 'AU', url: 'https://gtfsrt.api.translink.com.au/api/realtime/seq/VehiclePositions', license: 'https://translink.com.au/about-translink/open-data' },
  { provider: 'TTC (Toronto)', country: 'CA', url: 'https://bustime.ttc.ca/gtfsrt/vehicles', license: 'https://open.toronto.ca/open-data-licence/' },
  { provider: 'CapMetro (Austin)', country: 'US', url: 'https://data.texas.gov/download/eiei-9rpf/application%2Foctet-stream', license: 'https://www.capmetro.org/developertools' },
  { provider: 'Metro Transit (Minneapolis–St Paul)', country: 'US', url: 'https://svc.metrotransit.org/mtgtfs/vehiclepositions.pb', license: 'https://svc.metrotransit.org/' },
  { provider: 'MBTA (Boston)', country: 'US', url: 'https://cdn.mbta.com/realtime/VehiclePositions.pb', license: 'https://www.mbta.com/developers' },
  { provider: 'MiWay (Mississauga)', country: 'CA', url: 'https://www.miapp.ca/GTFS_RT/Vehicle/VehiclePositions.pb' },
  { provider: 'Hamilton Street Railway', country: 'CA', url: 'https://opendata.hamilton.ca/GTFS-RT/GTFS_VehiclePositions.pb' },
  { provider: 'Durham Region Transit', country: 'CA', url: 'https://drtonline.durhamregiontransit.com/gtfsrealtime/VehiclePositions' },
  { provider: 'Guelph Transit', country: 'CA', url: 'https://glphprdtmgtfs.glphtrpcloud.com/tmgtfsrealtimewebservice/vehicle/vehiclepositions.pb', license: 'https://explore.guelph.ca/pages/open-data-license' },
  { provider: 'Kingston Transit', country: 'CA', url: 'https://api.cityofkingston.ca/gtfs-realtime/vehicleupdates.pb' },
  { provider: 'Barrie Transit', country: 'CA', url: 'https://www.myridebarrie.ca/gtfs/GTFS_VehiclePositions.pb' },
  { provider: 'YRT/Viva (York Region)', country: 'CA', url: 'https://rtu.york.ca/gtfsrealtime/VehiclePositions', license: 'https://www.yrt.ca/en/about-us/open-data-licence-agreement.aspx' },
  { provider: 'Burlington Transit', country: 'CA', url: 'https://opendata.burlington.ca/gtfs-rt/GTFS_VehiclePositions.pb' },
];

/** A CSV parser that handles quoted fields with commas and newlines. */
function parseCsv(text) {
  const rows = []; let row = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; } else field += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows;
  return body.map(r => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

const union = (a, b) => (a ? [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])] : b);
const round = n => Math.round(n * 1e4) / 1e4;

async function candidates() {
  const rows = parseCsv(await (await fetch(CATALOGUE, { headers: { 'User-Agent': UA } })).text());
  const byId = new Map(rows.map(r => [r.mdb_source_id, r]));
  const list = [];
  for (const r of rows) {
    if (r.data_type !== 'gtfs-rt' || !r.entity_type.split('|').includes('vp')) continue;
    if (!['0', ''].includes(r['urls.authentication_type'])) continue;
    if (['deprecated', 'inactive'].includes(r.status) || r['redirect.id'] || !r['urls.direct_download']) continue;
    let bbox = null, country = '', sub = '', city = '', license = r['urls.license'];
    for (const sid of r.static_reference.split('|').map(s => s.trim()).filter(Boolean)) {
      const s = byId.get(sid);
      if (!s) continue;
      country ||= s['location.country_code'];
      sub ||= s['location.subdivision_name'];
      city ||= s['location.municipality'];
      license ||= s['urls.license'];
      const b = ['minimum_longitude', 'minimum_latitude', 'maximum_longitude', 'maximum_latitude'].map(k => Number(s[`location.bounding_box.${k}`]));
      if (b.every(Number.isFinite) && s['location.bounding_box.minimum_latitude'] !== '') bbox = union(bbox, b);
    }
    list.push({ mdb: r.mdb_source_id, provider: r.provider, country, region: city || sub, url: r['urls.direct_download'], license, bbox });
  }
  // The same feed is sometimes listed twice, once with different capitalisation.
  const seen = new Set();
  const unique = list.filter(c => !seen.has(c.url.toLowerCase()) && seen.add(c.url.toLowerCase()));
  for (const e of EXTRA) if (!seen.has(e.url.toLowerCase())) unique.push({ mdb: '', region: '', bbox: null, ...e });
  return unique;
}

async function probe(c) {
  const t0 = Date.now();
  try {
    const res = await fetch(c.url, { headers: { 'User-Agent': UA, ...(c.headers || {}) }, signal: AbortSignal.timeout(TIMEOUT_MS), redirect: 'follow' });
    if (!res.ok) return { ...c, ok: false, why: `HTTP ${res.status}` };
    const feed = decodeVehicleFeed(new Uint8Array(await res.arrayBuffer()));
    const now = Date.now() / 1000;
    const fresh = feed.vehicles.filter(v => !v.timestamp || now - v.timestamp < STALE_S);
    // The middle 98% of positions: one bus with a broken GPS fix a country
    // away should not stretch the feed's area across a continent.
    let seen = null, center = null, core = null;
    if (fresh.length) {
      const pick = (vals, q) => vals.sort((a, b) => a - b)[Math.min(vals.length - 1, Math.floor(q * vals.length))];
      const trim = fresh.length >= 20 ? 0.01 : 0;
      const lngs = fresh.map(v => v.lng), lats = fresh.map(v => v.lat);
      seen = [pick(lngs, trim), pick(lats, trim), pick(lngs, 1 - trim), pick(lats, 1 - trim)];
      // Where the fleet is: its median point, and the box of its middle 90%,
      // which is where the map flies to. A national feed's area runs to its
      // longest international route; its fleet does not.
      center = [pick(lngs, 0.5), pick(lats, 0.5)];
      const q = fresh.length >= 20 ? 0.05 : 0;
      core = [pick(lngs, q), pick(lats, q), pick(lngs, 1 - q), pick(lats, 1 - q)];
    }
    return { ...c, ok: true, vehicles: fresh.length, stale: feed.vehicles.length - fresh.length, seen, center, core, ms: Date.now() - t0 };
  } catch (e) {
    return { ...c, ok: false, why: e.name === 'TimeoutError' ? 'timeout' : String(e.message || e).slice(0, 80) };
  }
}

async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k]); process.stdout.write('.'); }
  }));
  process.stdout.write('\n');
  return out;
}

const slug = s => s.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/[\s_]+/g, '-').replace(/-+/g, '-').slice(0, 40);

const list = await candidates();
console.log(`${list.length} candidate feeds`);
const results = await pool(list, CONCURRENCY, probe);
// A feed that timed out or dropped the connection gets one more try, alone,
// so a busy moment does not cost a city its buses until the next build.
const retry = results.map((r, i) => [r, i]).filter(([r]) => !r.ok && /timeout|fetch failed/.test(r.why));
for (const [, i] of retry) results[i] = await probe(list[i]);
console.log(`retried ${retry.length}, recovered ${retry.filter(([, i]) => results[i].ok).length}`);

const kept = [];
const ids = new Set();
for (const r of results) {
  if (!r.ok) continue;
  // A catalogue area spanning most of the planet is a data error, not a service area.
  const sane = b => b && b[2] - b[0] <= 90 && b[3] - b[1] <= 60;
  // The vehicles seen now, padded so one at the edge of a route still counts as
  // inside, joined to the schedule's area: a feed probed at night shows only
  // the few routes running then.
  const observed = r.seen && [r.seen[0] - 0.05, r.seen[1] - 0.05, r.seen[2] + 0.05, r.seen[3] + 0.05];
  const joined = observed && sane(r.bbox) ? union(observed, r.bbox) : null;
  const area = sane(joined) ? joined : observed || (sane(r.bbox) ? r.bbox : null);
  if (!area || !sane(area)) continue;
  let id = slug(r.provider) || `feed-${r.mdb}`;
  while (ids.has(id)) id += `-${r.mdb || kept.length}`;
  ids.add(id);
  const core = r.core ? [r.core[0] - 0.02, r.core[1] - 0.02, r.core[2] + 0.02, r.core[3] + 0.02] : area;
  const center = r.center ?? [(core[0] + core[2]) / 2, (core[1] + core[3]) / 2];
  kept.push({
    id,
    provider: r.provider,
    country: r.country || '',
    region: r.region || '',
    url: r.url,
    ...(r.headers ? { headers: r.headers } : {}),
    bbox: area.map(round),
    center: center.map(round),
    core: core.map(round),
    ...(r.license ? { license: r.license } : {}),
    ...(r.mdb ? { mdb: r.mdb } : {}),
    vehiclesAtProbe: r.vehicles,
  });
}
kept.sort((a, b) => (a.country || 'ZZ').localeCompare(b.country || 'ZZ') || a.provider.localeCompare(b.provider));

const failed = results.filter(r => !r.ok);
console.log(`kept ${kept.length}, ${kept.reduce((n, f) => n + f.vehiclesAtProbe, 0)} vehicles live; ${failed.length} did not answer as a feed`);
const reasons = {};
for (const f of failed) reasons[f.why] = (reasons[f.why] || 0) + 1;
console.log(Object.entries(reasons).sort((a, b) => b[1] - a[1]).slice(0, 12));

const body = `import type { TransitFeed } from './transit';

/**
 * OSIRIS — live, keyless GTFS-Realtime vehicle-position feeds (GENERATED).
 *
 * Built by tools/generate-transit-feeds.mjs on ${new Date().toISOString().slice(0, 10)} from the Mobility
 * Database catalogue (https://mobilitydatabase.org) plus a few feeds it lacks.
 * Every feed below answered with a decodable GTFS-Realtime FeedMessage when it
 * was built. \`bbox\` is [west, south, east, north]: the extent of the vehicles
 * the feed reported then, padded and joined to the catalogue's schedule area.
 * \`center\` is the fleet's median point and \`core\` the box its middle 90%
 * ran in, for placing and flying to the feed. \`vehiclesAtProbe\` is how many
 * vehicles it had at that moment.
 *
 * Do not edit by hand; run the tool again.
 */
export const TRANSIT_FEEDS: TransitFeed[] = ${JSON.stringify(kept, null, 2)};
`;
writeFileSync(OUT, body);
console.log(`wrote ${OUT}`);
