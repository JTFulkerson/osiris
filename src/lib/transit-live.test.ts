import { describe, it, expect, vi, beforeEach } from 'vitest';
import { clearTransitCache, feedsFor, readFeed, vehiclesIn, MAX_FEEDS_PER_VIEW, FEEDS } from './transit-live';
import { encodeFeed, type FixtureVehicle } from './gtfs-rt.fixtures';
import type { TransitFeed } from './transit';

const now = () => Math.floor(Date.now() / 1000);
const serve = (vehicles: FixtureVehicle[]) => vi.fn(async () => new Response(encodeFeed(vehicles)));

const BOSTON: TransitFeed = {
  id: 'test-mbta', provider: 'MBTA', country: 'US', region: 'Boston',
  url: 'https://feeds.example/mbta.pb', bbox: [-71.6, 42.0, -70.6, 42.8],
  center: [-71.06, 42.36], core: [-71.2, 42.25, -70.95, 42.45], vehiclesAtProbe: 300,
};

beforeEach(() => clearTransitCache());

describe('readFeed', () => {
  it('reads a feed once and shares it while it is fresh', async () => {
    const fetchImpl = serve([{ lat: 42.36, lng: -71.06, ts: now() }]);
    const first = await readFeed(BOSTON, fetchImpl);
    const second = await readFeed(BOSTON, fetchImpl);
    expect(first.vehicles).toHaveLength(1);
    expect(second).toBe(first);
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });

  it('asks once when several viewers want the same feed at the same moment', async () => {
    const fetchImpl = serve([{ lat: 42.36, lng: -71.06, ts: now() }]);
    await Promise.all([readFeed(BOSTON, fetchImpl), readFeed(BOSTON, fetchImpl), readFeed(BOSTON, fetchImpl)]);
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });

  it('leaves out vehicles that stopped reporting and fixes far outside the area', async () => {
    const entry = await readFeed(BOSTON, serve([
      { lat: 42.36, lng: -71.06, ts: now(), id: 'on-the-road' },
      { lat: 42.35, lng: -71.07, ts: now() - 3600, id: 'parked-an-hour-ago' },
      { lat: 56.95, lng: 24.1, ts: now(), id: 'gps-says-riga' },
    ]));
    expect(entry.vehicles.map(v => v.id)).toEqual(['on-the-road']);
    expect(entry.vehicles[0]).toMatchObject({ f: 'test-mbta', route: '39', label: '1234', s: 8.5 });
  });

  it('keeps the last good positions, marked as failed, when a read fails', async () => {
    await readFeed(BOSTON, serve([{ lat: 42.36, lng: -71.06, ts: now() }]), Date.now());
    const down = vi.fn(async () => new Response('', { status: 503 }));
    const later = await readFeed(BOSTON, down, Date.now() + 60_000);
    expect(later.ok).toBe(false);
    expect(later.error).toBe('HTTP 503');
    expect(later.vehicles).toHaveLength(1);
  });
});

describe('feedsFor', () => {
  it('picks the feeds covering a view, nearest first, and caps how many', () => {
    const near = { ...BOSTON, id: 'near', bbox: [-71.2, 42.3, -71.0, 42.4] };
    const far = { ...BOSTON, id: 'far', bbox: [-71.6, 42.0, -70.0, 43.0] };
    const elsewhere = { ...BOSTON, id: 'elsewhere', bbox: [24, 60, 25, 61] };
    expect(feedsFor([-71.15, 42.3, -71.05, 42.4], [far, elsewhere, near]).map(f => f.id)).toEqual(['near', 'far']);

    const many = Array.from({ length: MAX_FEEDS_PER_VIEW + 5 }, (_, i) => ({ ...BOSTON, id: `f${i}` }));
    expect(feedsFor([-71.15, 42.3, -71.05, 42.4], many)).toHaveLength(MAX_FEEDS_PER_VIEW);
  });
});

describe('vehiclesIn', () => {
  it('returns only the vehicles on screen, with the feeds that supplied them', async () => {
    const mbta = FEEDS.find(f => f.url.includes('cdn.mbta.com'))!;
    expect(mbta).toBeDefined();
    const fetchImpl = vi.fn(async (url: string | URL | Request) => String(url) === mbta.url
      ? new Response(encodeFeed([
        { lat: 42.3601, lng: -71.0589, ts: now(), id: 'downtown' },
        { lat: 42.25, lng: -71.0, ts: now(), id: 'quincy' },
      ]))
      : new Response(encodeFeed([])));

    const result = await vehiclesIn([-71.1, 42.33, -71.0, 42.4], fetchImpl as typeof fetch);
    expect(result.vehicles.map(v => v.id)).toEqual(['downtown']);
    const used = result.feeds.find(f => f.id === mbta.id)!;
    expect(used).toMatchObject({ ok: true, count: 1, provider: mbta.provider });
  });
});
