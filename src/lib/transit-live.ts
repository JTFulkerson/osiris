/**
 * OSIRIS — Live transit, server side: reads operators' vehicle feeds on demand.
 *
 * A feed is read only when someone is looking at the area it covers, and each
 * read is shared by every visitor for FEED_TTL_MS, so however many people
 * watch a city, its operator sees one request every 20 seconds. That is the
 * pace the feeds themselves update at and well inside their published limits.
 */
import { decodeVehicleFeed } from './gtfs-rt';
import { TRANSIT_FEEDS } from './transit-feeds.generated';
import { bboxIntersects, inBBox, type BBox, type TransitFeed, type TransitFeedInfo, type TransitVehicle } from './transit';

const FEED_TTL_MS = 20_000;
/** A feed that failed is left alone this long before it is tried again. */
const FAILURE_TTL_MS = 60_000;
const FETCH_TIMEOUT_MS = 10_000;
/** Positions older than this are a vehicle that has gone out of service, not one on the road. */
const STALE_S = 15 * 60;
/** Feed reads in flight at once. */
const CONCURRENCY = 12;
/** Most feeds read for one view; the ones nearest its centre win. */
export const MAX_FEEDS_PER_VIEW = 40;
/** Most vehicles sent for one view. */
export const MAX_VEHICLES = 25_000;
/** A position this far outside its feed's area is a broken GPS fix, not a bus abroad. */
const AREA_SLACK_DEG = 1;

const UA = 'OSIRIS-Transit/1.0 (+https://osirisai.live)';

interface Entry {
  at: number;
  ok: boolean;
  vehicles: TransitVehicle[];
  error?: string;
}

const cache = new Map<string, Entry>();
const inflight = new Map<string, Promise<Entry>>();

export const FEEDS: TransitFeed[] = TRANSIT_FEEDS;

export function feedInfo(f: TransitFeed): TransitFeedInfo {
  return { id: f.id, provider: f.provider, region: f.region, country: f.country, ...(f.license ? { license: f.license } : {}) };
}

function padded(b: number[]): BBox {
  return [b[0] - AREA_SLACK_DEG, b[1] - AREA_SLACK_DEG, b[2] + AREA_SLACK_DEG, b[3] + AREA_SLACK_DEG];
}

/** Reads one feed, or returns the shared copy while it is fresh. */
export async function readFeed(feed: TransitFeed, fetchImpl: typeof fetch = fetch, now = Date.now()): Promise<Entry> {
  const hit = cache.get(feed.id);
  if (hit && now - hit.at < (hit.ok ? FEED_TTL_MS : FAILURE_TTL_MS)) return hit;
  const running = inflight.get(feed.id);
  if (running) return running;

  const job = (async (): Promise<Entry> => {
    try {
      const res = await fetchImpl(feed.url, {
        headers: { 'User-Agent': UA, ...(feed.headers ?? {}) },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const decoded = decodeVehicleFeed(new Uint8Array(await res.arrayBuffer()));
      const area = padded(feed.bbox);
      const nowS = Date.now() / 1000;
      const vehicles: TransitVehicle[] = [];
      for (const v of decoded.vehicles) {
        if (v.timestamp && nowS - v.timestamp > STALE_S) continue;
        if (!inBBox(v.lng, v.lat, area)) continue;
        vehicles.push({
          f: feed.id,
          id: v.id,
          lat: Math.round(v.lat * 1e5) / 1e5,
          lng: Math.round(v.lng * 1e5) / 1e5,
          ...(v.bearing !== undefined ? { b: Math.round(v.bearing) } : {}),
          ...(v.speed !== undefined ? { s: Math.round(v.speed * 10) / 10 } : {}),
          ...(v.routeId ? { route: v.routeId } : {}),
          ...(v.label ? { label: v.label } : {}),
          ...(v.tripId ? { trip: v.tripId } : {}),
          ...(v.timestamp ? { t: v.timestamp } : {}),
          ...(v.occupancy !== undefined ? { occ: v.occupancy } : {}),
        });
      }
      return { at: Date.now(), ok: true, vehicles };
    } catch (e) {
      const error = e instanceof Error ? (e.name === 'TimeoutError' ? 'timeout' : e.message) : 'failed';
      // Keep the last good positions on a failed read, marked as such, rather than blanking a city.
      return { at: Date.now(), ok: false, vehicles: hit?.ok ? hit.vehicles : [], error };
    }
  })();

  inflight.set(feed.id, job);
  try {
    const entry = await job;
    cache.set(feed.id, entry);
    return entry;
  } finally {
    inflight.delete(feed.id);
  }
}

/** The feeds covering a view, nearest its centre first, at most MAX_FEEDS_PER_VIEW. */
export function feedsFor(view: BBox, feeds: TransitFeed[] = FEEDS): TransitFeed[] {
  let cx = view[0] <= view[2] ? (view[0] + view[2]) / 2 : (view[0] + view[2] + 360) / 2;
  if (cx > 180) cx -= 360;
  const cy = (view[1] + view[3]) / 2;
  const dist = (f: TransitFeed) => Math.hypot((f.bbox[0] + f.bbox[2]) / 2 - cx, (f.bbox[1] + f.bbox[3]) / 2 - cy);
  return feeds
    .filter(f => bboxIntersects(f.bbox, view))
    .sort((a, b) => dist(a) - dist(b))
    .slice(0, MAX_FEEDS_PER_VIEW);
}

async function pool<T, R>(items: T[], n: number, fn: (x: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k]); }
  }));
  return out;
}

export interface ViewResult {
  vehicles: TransitVehicle[];
  feeds: (TransitFeedInfo & { ok: boolean; count: number; error?: string; fetchedAt: string })[];
  /** Feeds covering the view that were not read, because MAX_FEEDS_PER_VIEW was reached. */
  skippedFeeds: number;
  truncated: boolean;
}

/** Every vehicle on screen, from the feeds covering the view. */
export async function vehiclesIn(view: BBox, fetchImpl: typeof fetch = fetch): Promise<ViewResult> {
  const covering = FEEDS.filter(f => bboxIntersects(f.bbox, view));
  const chosen = feedsFor(view);
  const entries = await pool(chosen, CONCURRENCY, f => readFeed(f, fetchImpl));

  const vehicles: TransitVehicle[] = [];
  let truncated = false;
  const feeds = chosen.map((f, i) => {
    const e = entries[i];
    let count = 0;
    for (const v of e.vehicles) {
      if (!inBBox(v.lng, v.lat, view)) continue;
      if (vehicles.length >= MAX_VEHICLES) { truncated = true; break; }
      vehicles.push(v);
      count++;
    }
    return { ...feedInfo(f), ok: e.ok, count, ...(e.error ? { error: e.error } : {}), fetchedAt: new Date(e.at).toISOString() };
  });
  return { vehicles, feeds, skippedFeeds: covering.length - chosen.length, truncated };
}

/** Where coverage is: one entry per feed, with the last count read, or the count at catalogue time. */
export function coverage() {
  return FEEDS.map(f => {
    const e = cache.get(f.id);
    return {
      ...feedInfo(f),
      center: f.center,
      core: f.core,
      vehicles: e?.ok ? e.vehicles.length : f.vehiclesAtProbe,
      live: e ? e.ok : null,
    };
  });
}

/** For tests: forget every cached read. */
export function clearTransitCache(): void {
  cache.clear();
  inflight.clear();
}
