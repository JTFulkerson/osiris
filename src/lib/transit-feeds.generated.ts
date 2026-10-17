import type { TransitFeed } from './transit';

/**
 * OSIRIS — live, keyless GTFS-Realtime vehicle-position feeds (GENERATED).
 *
 * Built by tools/generate-transit-feeds.mjs on 2026-10-17 from the Mobility
 * Database catalogue (https://mobilitydatabase.org) plus a few feeds it lacks.
 * Every feed below answered with a decodable GTFS-Realtime FeedMessage when it
 * was built. `bbox` is [west, south, east, north]: the extent of the vehicles
 * the feed reported then, padded and joined to the catalogue's schedule area.
 * `center` is the fleet's median point and `core` the box its middle 90%
 * ran in, for placing and flying to the feed. `vehiclesAtProbe` is how many
 * vehicles it had at that moment.
 *
 * Do not edit by hand; run the tool again.
 */
export const TRANSIT_FEEDS: TransitFeed[] = [
  {
    "id": "adelaide-metro",
    "provider": "Adelaide Metro",
    "country": "AU",
    "region": "Adelaide",
    "url": "https://gtfs.adelaidemetro.com.au/v1/realtime/vehicle_positions",
    "bbox": [
      138.4256,
      -35.3392,
      139.0361,
      -34.571
    ],
    "center": [
      138.5993,
      -34.9212
    ],
    "core": [
      138.4773,
      -35.1142,
      138.723,
      -34.7383
    ],
    "mdb": "1772",
    "vehiclesAtProbe": 230
  },
  {
    "id": "canberra-metro-operations",
    "provider": "Canberra Metro Operations",
    "country": "AU",
    "region": "Canberra",
    "url": "http://files.transport.act.gov.au/feeds/lightrail.pb",
    "bbox": [
      149.0814,
      -35.3149,
      149.201,
      -35.1435
    ],
    "center": [
      149.1483,
      -35.2046
    ],
    "core": [
      149.1114,
      -35.2849,
      149.171,
      -35.1735
    ],
    "license": "https://creativecommons.org/licenses/by/4.0/legalcode",
    "mdb": "1423",
    "vehiclesAtProbe": 4
  },
  {
    "id": "translink-south-east-queensland-translin",
    "provider": "TransLink South East Queensland (TransLink SEQ)",
    "country": "AU",
    "region": "Queensland",
    "url": "https://gtfsrt.api.translink.com.au/api/realtime/SEQ/VehiclePositions",
    "bbox": [
      152.1242,
      -28.1945,
      153.5456,
      -26.1594
    ],
    "center": [
      153.047,
      -27.4993
    ],
    "core": [
      152.8828,
      -28.0991,
      153.4506,
      -26.7286
    ],
    "license": "https://data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-seq/resource/be7f19e5-3ee8-4396-b9eb-46f6b4ce8039",
    "mdb": "1700",
    "vehiclesAtProbe": 800
  },
  {
    "id": "translink-sunbus-cairns",
    "provider": "TransLink Sunbus Cairns",
    "country": "AU",
    "region": "Cairns",
    "url": "https://gtfsrt.api.translink.com.au/api/realtime/CNS/VehiclePositions",
    "bbox": [
      145.6307,
      -17.1437,
      145.8249,
      -16.7406
    ],
    "center": [
      145.7495,
      -16.9209
    ],
    "core": [
      145.6735,
      -17.0168,
      145.7946,
      -16.7968
    ],
    "license": "https://translink.com.au/about-translink/open-data",
    "mdb": "1704",
    "vehiclesAtProbe": 22
  },
  {
    "id": "urban-mobility-center-sofia-traffic",
    "provider": "Urban Mobility Center - Sofia Traffic",
    "country": "BG",
    "region": "Sofia City",
    "url": "https://gtfs.sofiatraffic.bg/api/v1/vehicle-positions",
    "bbox": [
      23.0965,
      42.5364,
      23.5701,
      42.8671
    ],
    "center": [
      23.3208,
      42.6925
    ],
    "core": [
      23.2226,
      42.6043,
      23.4357,
      42.7718
    ],
    "license": "https://www.sofiatraffic.bg/bg/info-center/gtfs-danni",
    "mdb": "2847",
    "vehiclesAtProbe": 299
  },
  {
    "id": "barrie-transit",
    "provider": "Barrie Transit",
    "country": "CA",
    "region": "Barrie",
    "url": "http://www.myridebarrie.ca/gtfs/GTFS_VehiclePositions.pb",
    "bbox": [
      -79.7702,
      44.2844,
      -79.5657,
      44.4657
    ],
    "center": [
      -79.6914,
      44.3738
    ],
    "core": [
      -79.7402,
      44.3144,
      -79.5957,
      44.4357
    ],
    "license": "https://www.barrie.ca/services-payments/transportation-parking/barrie-transit/barrie-gtfs",
    "mdb": "1382",
    "vehiclesAtProbe": 9
  },
  {
    "id": "barrie-transit-175",
    "provider": "Barrie Transit",
    "country": "CA",
    "region": "",
    "url": "https://www.myridebarrie.ca/gtfs/GTFS_VehiclePositions.pb",
    "bbox": [
      -79.7702,
      44.2844,
      -79.5657,
      44.4657
    ],
    "center": [
      -79.6914,
      44.3738
    ],
    "core": [
      -79.7402,
      44.3144,
      -79.5957,
      44.4357
    ],
    "vehiclesAtProbe": 9
  },
  {
    "id": "bc-transit-bulkley-nechako-prince-george",
    "provider": "BC Transit (Bulkley-Nechako | Prince George)",
    "country": "CA",
    "region": "Bulkley-Nechako",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=22",
    "bbox": [
      -122.8676,
      53.819,
      -122.7025,
      54.0096
    ],
    "center": [
      -122.778,
      53.9103
    ],
    "core": [
      -122.8376,
      53.849,
      -122.7325,
      53.9796
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2513",
    "vehiclesAtProbe": 9
  },
  {
    "id": "bc-transit-campbell-river-transit",
    "provider": "BC Transit (Campbell River Transit)",
    "country": "CA",
    "region": "Campbell River",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=12",
    "bbox": [
      -125.3239,
      49.87,
      -125.129,
      50.0937
    ],
    "center": [
      -125.2585,
      50.0308
    ],
    "core": [
      -125.2939,
      49.9867,
      -125.2276,
      50.0637
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "1378",
    "vehiclesAtProbe": 5
  },
  {
    "id": "bc-transit-central-fraser-valley-chilliw",
    "provider": "BC Transit (Central Fraser Valley| Chilliwack| Agassiz-Harrison | Hope)",
    "country": "CA",
    "region": "Central Fraser Valley",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=13",
    "bbox": [
      -122.9494,
      48.9807,
      -121.4203,
      49.3827
    ],
    "center": [
      -122.2956,
      49.0703
    ],
    "core": [
      -122.6805,
      49.0146,
      -121.9317,
      49.2558
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2517",
    "vehiclesAtProbe": 24
  },
  {
    "id": "bc-transit-comox-valley-transit-system",
    "provider": "BC Transit (Comox Valley Transit System)",
    "country": "CA",
    "region": "Comox Valley",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=45",
    "bbox": [
      -125.1477,
      49.4722,
      -124.7952,
      49.8734
    ],
    "center": [
      -124.9871,
      49.6992
    ],
    "core": [
      -125.0196,
      49.6725,
      -124.9608,
      49.7249
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2527",
    "vehiclesAtProbe": 3
  },
  {
    "id": "bc-transit-cowichan-valley-regional-tran",
    "provider": "BC Transit (Cowichan Valley Regional Transit System)",
    "country": "CA",
    "region": "British Columbia",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=10",
    "bbox": [
      -124.2186,
      48.4183,
      -123.3644,
      48.9983
    ],
    "center": [
      -123.7016,
      48.7769
    ],
    "core": [
      -124.1852,
      48.6175,
      -123.5241,
      48.8838
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "1379",
    "vehiclesAtProbe": 7
  },
  {
    "id": "bc-transit-dawson-creek",
    "provider": "BC Transit (Dawson Creek)",
    "country": "CA",
    "region": "Dawson Creek",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=27",
    "bbox": [
      -120.2569,
      55.7387,
      -120.2096,
      55.7763
    ],
    "center": [
      -120.2333,
      55.7575
    ],
    "core": [
      -120.2569,
      55.7387,
      -120.2096,
      55.7763
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2542",
    "vehiclesAtProbe": 0
  },
  {
    "id": "bc-transit-fort-st-john",
    "provider": "BC Transit (Fort St. John)",
    "country": "CA",
    "region": "Fort St. John",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=28",
    "bbox": [
      -120.8739,
      56.2318,
      -120.803,
      56.2667
    ],
    "center": [
      -120.8384,
      56.2492
    ],
    "core": [
      -120.8739,
      56.2318,
      -120.803,
      56.2667
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2550",
    "vehiclesAtProbe": 0
  },
  {
    "id": "bc-transit-hazelton-kitimat-terrace",
    "provider": "BC Transit (Hazelton | Kitimat | Terrace)",
    "country": "CA",
    "region": "Hazelton",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=26",
    "bbox": [
      -128.7046,
      53.9971,
      -127.6435,
      55.3465
    ],
    "center": [
      -128.5909,
      54.5277
    ],
    "core": [
      -128.6746,
      54.0271,
      -127.6735,
      55.3165
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2477",
    "vehiclesAtProbe": 4
  },
  {
    "id": "bc-transit-kamloops-transit-system",
    "provider": "BC Transit (Kamloops Transit System)",
    "country": "CA",
    "region": "Kamloops",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=46",
    "bbox": [
      -120.4641,
      50.6,
      -120.0788,
      50.8603
    ],
    "center": [
      -120.3575,
      50.6768
    ],
    "core": [
      -120.4341,
      50.63,
      -120.2483,
      50.7595
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2554",
    "vehiclesAtProbe": 18
  },
  {
    "id": "bc-transit-kelowna-regional-transit-syst",
    "provider": "BC Transit (Kelowna Regional Transit System)",
    "country": "CA",
    "region": "Kelowna",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=47",
    "bbox": [
      -119.79,
      49.7519,
      -119.342,
      50.0735
    ],
    "center": [
      -119.4531,
      49.8873
    ],
    "core": [
      -119.6442,
      49.8088,
      -119.373,
      49.9827
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2558",
    "vehiclesAtProbe": 28
  },
  {
    "id": "bc-transit-merritt",
    "provider": "BC Transit (Merritt)",
    "country": "CA",
    "region": "Merritt",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=37",
    "bbox": [
      -120.8139,
      50.0736,
      -120.7139,
      50.1736
    ],
    "center": [
      -120.7639,
      50.1236
    ],
    "core": [
      -120.7839,
      50.1036,
      -120.7439,
      50.1436
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2503",
    "vehiclesAtProbe": 1
  },
  {
    "id": "bc-transit-nanaimo",
    "provider": "BC Transit (Nanaimo)",
    "country": "CA",
    "region": "Nanaimo",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=41",
    "bbox": [
      -124.3508,
      48.7531,
      -123.6682,
      49.3689
    ],
    "center": [
      -123.9907,
      49.1907
    ],
    "core": [
      -124.3208,
      48.7831,
      -123.6982,
      49.3389
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2476",
    "vehiclesAtProbe": 19
  },
  {
    "id": "bc-transit-pemberton-valley",
    "provider": "BC Transit (Pemberton Valley)",
    "country": "CA",
    "region": "Pemberton Valley",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=50",
    "bbox": [
      -123.0051,
      50.0838,
      -122.9041,
      50.1847
    ],
    "center": [
      -122.9541,
      50.1347
    ],
    "core": [
      -122.9751,
      50.1138,
      -122.9341,
      50.1547
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2500",
    "vehiclesAtProbe": 2
  },
  {
    "id": "bc-transit-port-edward-prince-rupert",
    "provider": "BC Transit (Port Edward | Prince Rupert)",
    "country": "CA",
    "region": "Port Edward",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=23",
    "bbox": [
      -130.3824,
      54.2524,
      -130.2585,
      54.3602
    ],
    "center": [
      -130.3085,
      54.3102
    ],
    "core": [
      -130.3524,
      54.2824,
      -130.2885,
      54.3302
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2546",
    "vehiclesAtProbe": 2
  },
  {
    "id": "bc-transit-powell-river",
    "provider": "BC Transit (Powell River)",
    "country": "CA",
    "region": "Powell River",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=29",
    "bbox": [
      -124.7605,
      49.654,
      -124.1789,
      49.9816
    ],
    "center": [
      -124.5196,
      49.8849
    ],
    "core": [
      -124.5756,
      49.7852,
      -124.4996,
      49.9049
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2559",
    "vehiclesAtProbe": 2
  },
  {
    "id": "bc-transit-quesnel",
    "provider": "BC Transit (Quesnel)",
    "country": "CA",
    "region": "Quesnel",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=32",
    "bbox": [
      -122.5659,
      52.921,
      -122.4659,
      53.021
    ],
    "center": [
      -122.5159,
      52.971
    ],
    "core": [
      -122.5359,
      52.951,
      -122.4959,
      52.991
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2482",
    "vehiclesAtProbe": 1
  },
  {
    "id": "bc-transit-revelstoke",
    "provider": "BC Transit (Revelstoke)",
    "country": "CA",
    "region": "Revelstoke",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=36",
    "bbox": [
      -118.2699,
      50.9626,
      -118.1699,
      51.0626
    ],
    "center": [
      -118.2199,
      51.0126
    ],
    "core": [
      -118.2399,
      50.9926,
      -118.1999,
      51.0326
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2485",
    "vehiclesAtProbe": 1
  },
  {
    "id": "bc-transit-salt-spring-island",
    "provider": "BC Transit (Salt Spring Island)",
    "country": "CA",
    "region": "Salt Spring Island",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=39",
    "bbox": [
      -123.5788,
      48.8355,
      -123.4788,
      48.9355
    ],
    "center": [
      -123.5288,
      48.8855
    ],
    "core": [
      -123.5488,
      48.8655,
      -123.5088,
      48.9055
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2488",
    "vehiclesAtProbe": 1
  },
  {
    "id": "bc-transit-shuswap-vernon",
    "provider": "BC Transit (Shuswap | Vernon)",
    "country": "CA",
    "region": "Shuswap",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=14",
    "bbox": [
      -125.1477,
      49.4722,
      -119.2118,
      50.7466
    ],
    "center": [
      -119.2719,
      50.2645
    ],
    "core": [
      -119.3215,
      50.238,
      -119.2418,
      50.7166
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2535",
    "vehiclesAtProbe": 10
  },
  {
    "id": "bc-transit-south-okanagan-similkameen",
    "provider": "BC Transit (South Okanagan-Similkameen)",
    "country": "CA",
    "region": "South Okanagan-Similkameen",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=15",
    "bbox": [
      -119.6338,
      49.4279,
      -119.5338,
      49.5279
    ],
    "center": [
      -119.5838,
      49.4779
    ],
    "core": [
      -119.6038,
      49.4579,
      -119.5638,
      49.4979
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2562",
    "vehiclesAtProbe": 1
  },
  {
    "id": "bc-transit-squamish",
    "provider": "BC Transit (Squamish)",
    "country": "CA",
    "region": "Squamish",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=43",
    "bbox": [
      -123.2062,
      49.6474,
      -123.0599,
      49.7911
    ],
    "center": [
      -123.1552,
      49.7175
    ],
    "core": [
      -123.1762,
      49.6774,
      -123.0899,
      49.7611
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2566",
    "vehiclesAtProbe": 4
  },
  {
    "id": "bc-transit-sunshine-coast-transit-system",
    "provider": "BC Transit (Sunshine Coast Transit System)",
    "country": "CA",
    "region": "British Columbia",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=18",
    "bbox": [
      -123.9115,
      49.356,
      -123.4554,
      49.5259
    ],
    "center": [
      -123.6187,
      49.4399
    ],
    "core": [
      -123.8212,
      49.386,
      -123.4854,
      49.4959
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2570",
    "vehiclesAtProbe": 6
  },
  {
    "id": "bc-transit-victoria-regional-transit-sys",
    "provider": "BC Transit (Victoria Regional Transit System)",
    "country": "CA",
    "region": "Victoria",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=48",
    "bbox": [
      -123.7954,
      48.3078,
      -123.2446,
      48.7382
    ],
    "center": [
      -123.3803,
      48.4487
    ],
    "core": [
      -123.5356,
      48.3923,
      -123.2945,
      48.6616
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2574",
    "vehiclesAtProbe": 92
  },
  {
    "id": "bc-transit-west-coast",
    "provider": "BC Transit (West Coast)",
    "country": "CA",
    "region": "West Coast",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=51",
    "bbox": [
      -125.9441,
      49.0992,
      -125.8441,
      49.1992
    ],
    "center": [
      -125.8941,
      49.1492
    ],
    "core": [
      -125.9141,
      49.1292,
      -125.8741,
      49.1692
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2578",
    "vehiclesAtProbe": 1
  },
  {
    "id": "bc-transit-west-kootenay-transit-system",
    "provider": "BC Transit (West Kootenay Transit System)",
    "country": "CA",
    "region": "Nelson",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=20",
    "bbox": [
      -118.1408,
      49.0267,
      -116.8968,
      50.2967
    ],
    "center": [
      -117.2863,
      49.4867
    ],
    "core": [
      -117.8139,
      49.0567,
      -117.2661,
      49.5194
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2582",
    "vehiclesAtProbe": 3
  },
  {
    "id": "bc-transit-whistler",
    "provider": "BC Transit (Whistler)",
    "country": "CA",
    "region": "Whistler",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=44",
    "bbox": [
      -123.0914,
      50.0298,
      -122.8812,
      50.2061
    ],
    "center": [
      -122.9549,
      50.1139
    ],
    "core": [
      -123.0614,
      50.0598,
      -122.9112,
      50.1761
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "2586",
    "vehiclesAtProbe": 12
  },
  {
    "id": "burlington-transit",
    "provider": "Burlington Transit",
    "country": "CA",
    "region": "Burlington",
    "url": "http://opendata.burlington.ca/gtfs-rt/GTFS_VehiclePositions.pb",
    "bbox": [
      -79.9185,
      43.2066,
      -79.7119,
      43.444
    ],
    "center": [
      -79.7966,
      43.3409
    ],
    "core": [
      -79.8885,
      43.2366,
      -79.7419,
      43.414
    ],
    "license": "https://opendata.burlington.ca/opendata-terms-of-use/City%20of%20Burlington%20-%20Open%20Data%20Terms%20of%20Use.pdf",
    "mdb": "1417",
    "vehiclesAtProbe": 8
  },
  {
    "id": "burlington-transit-177",
    "provider": "Burlington Transit",
    "country": "CA",
    "region": "",
    "url": "https://opendata.burlington.ca/gtfs-rt/GTFS_VehiclePositions.pb",
    "bbox": [
      -79.9185,
      43.2066,
      -79.7094,
      43.4432
    ],
    "center": [
      -79.7966,
      43.3382
    ],
    "core": [
      -79.8885,
      43.2366,
      -79.7394,
      43.4132
    ],
    "vehiclesAtProbe": 8
  },
  {
    "id": "durham-region-transit",
    "provider": "Durham Region Transit",
    "country": "CA",
    "region": "Durham",
    "url": "https://drtonline.durhamregiontransit.com/gtfsrealtime/VehiclePositions",
    "bbox": [
      -79.3005,
      43.7261,
      -78.6383,
      44.154
    ],
    "center": [
      -78.9586,
      43.8876
    ],
    "core": [
      -79.2086,
      43.7667,
      -78.7759,
      43.9786
    ],
    "license": "https://opendata.durham.ca/search?q=service%20alert",
    "mdb": "1466",
    "vehiclesAtProbe": 38
  },
  {
    "id": "edmonton-transit-system",
    "provider": "Edmonton Transit System",
    "country": "CA",
    "region": "Edmonton",
    "url": "http://gtfs.edmonton.ca/TMGTFSRealTimeWebService/Vehicle/VehiclePositions.pb",
    "bbox": [
      -113.9349,
      53.3027,
      -113.2181,
      53.7044
    ],
    "center": [
      -113.5055,
      53.5248
    ],
    "core": [
      -113.6508,
      53.4083,
      -113.3671,
      53.6369
    ],
    "license": "https://www.edmonton.ca/transportation/Web-version2.1-OpenDataAgreement.pdf",
    "mdb": "1496",
    "vehiclesAtProbe": 243
  },
  {
    "id": "halifax-transit",
    "provider": "Halifax Transit",
    "country": "CA",
    "region": "Halifax",
    "url": "http://gtfs.halifax.ca/realtime/Vehicle/VehiclePositions.pb",
    "bbox": [
      -63.8582,
      44.5149,
      -63.2832,
      44.8863
    ],
    "center": [
      -63.5907,
      44.6533
    ],
    "core": [
      -63.6851,
      44.5795,
      -63.5187,
      44.7734
    ],
    "license": "http://www.halifax.ca/opendata/transit.php",
    "mdb": "1607",
    "vehiclesAtProbe": 36
  },
  {
    "id": "hamilton-street-railway",
    "provider": "Hamilton Street Railway",
    "country": "CA",
    "region": "Hamilton",
    "url": "https://opendata.hamilton.ca/GTFS-RT/GTFS_VehiclePositions.pb",
    "bbox": [
      -80.1281,
      43.113,
      -79.6233,
      43.3853
    ],
    "center": [
      -79.8635,
      43.2372
    ],
    "core": [
      -79.9689,
      43.1645,
      -79.7401,
      43.2912
    ],
    "license": "https://www.hamilton.ca/city-council/data-maps/open-data/open-data-licence-terms-and-conditions",
    "mdb": "1458",
    "vehiclesAtProbe": 90
  },
  {
    "id": "kingston-transit",
    "provider": "Kingston Transit",
    "country": "CA",
    "region": "Kingston",
    "url": "https://api.cityofkingston.ca/gtfs-realtime/vehicleupdates.pb",
    "bbox": [
      -76.6674,
      44.1792,
      -76.3963,
      44.3161
    ],
    "center": [
      -76.5069,
      44.2615
    ],
    "core": [
      -76.5701,
      44.2136,
      -76.4664,
      44.285
    ],
    "mdb": "1433",
    "vehiclesAtProbe": 58
  },
  {
    "id": "london-transit-commission",
    "provider": "London Transit Commission",
    "country": "CA",
    "region": "London",
    "url": "http://gtfs.ltconline.ca/Vehicle/VehiclePositions.pb",
    "bbox": [
      -81.3858,
      42.8812,
      -81.1228,
      43.0953
    ],
    "center": [
      -81.2538,
      42.9882
    ],
    "core": [
      -81.3254,
      42.9194,
      -81.1637,
      43.0468
    ],
    "license": "https://www.londontransit.ca/open-data/ltcs-open-data-terms-of-use/",
    "mdb": "1561",
    "vehiclesAtProbe": 64
  },
  {
    "id": "miway",
    "provider": "MiWay",
    "country": "CA",
    "region": "Mississauga",
    "url": "https://www.miapp.ca/GTFS_RT/Vehicle/VehiclePositions.pb",
    "bbox": [
      -79.8178,
      43.463,
      -79.4882,
      43.8381
    ],
    "center": [
      -79.6488,
      43.594
    ],
    "core": [
      -79.779,
      43.5062,
      -79.5242,
      43.7343
    ],
    "license": "http://www.mississauga.ca/portal/miway/developerdownload",
    "mdb": "1612",
    "vehiclesAtProbe": 120
  },
  {
    "id": "port-alberni",
    "provider": "Port Alberni",
    "country": "CA",
    "region": "Port Alberni",
    "url": "https://bct.tmix.se/gtfs-realtime/vehicleupdates.pb?operatorIds=11",
    "bbox": [
      -124.8892,
      49.2143,
      -124.7826,
      49.3143
    ],
    "center": [
      -124.8392,
      49.2643
    ],
    "core": [
      -124.8592,
      49.2443,
      -124.8192,
      49.2843
    ],
    "license": "https://www.bctransit.com/open-data/terms-of-use",
    "mdb": "1405",
    "vehiclesAtProbe": 1
  },
  {
    "id": "thunder-bay-transit",
    "provider": "Thunder Bay Transit",
    "country": "CA",
    "region": "Thunder Bay",
    "url": "http://api.nextlift.ca/gtfs-realtime/vehicleupdates.pb",
    "bbox": [
      -89.3885,
      48.3323,
      -89.1377,
      48.514
    ],
    "center": [
      -89.2439,
      48.4168
    ],
    "core": [
      -89.2944,
      48.3623,
      -89.1677,
      48.484
    ],
    "mdb": "1690",
    "vehiclesAtProbe": 17
  },
  {
    "id": "toronto-transit-commission-ttc",
    "provider": "Toronto Transit Commission (TTC)",
    "country": "CA",
    "region": "Toronto",
    "url": "https://bustime.ttc.ca/gtfsrt/vehicles",
    "bbox": [
      -79.6595,
      43.5659,
      -79.1231,
      43.9097
    ],
    "center": [
      -79.3916,
      43.7004
    ],
    "core": [
      -79.5656,
      43.6191,
      -79.2231,
      43.8296
    ],
    "license": "https://open.toronto.ca/dataset/ttc-bustime-real-time-next-vehicle-arrival-nvas/",
    "mdb": "2140",
    "vehiclesAtProbe": 1157
  },
  {
    "id": "york-region-transit",
    "provider": "York Region Transit",
    "country": "CA",
    "region": "York",
    "url": "http://rtu.york.ca/gtfsrealtime/VehiclePositions",
    "bbox": [
      -79.7018,
      43.7201,
      -79.1818,
      44.3518
    ],
    "center": [
      -79.4509,
      43.8415
    ],
    "core": [
      -79.6423,
      43.7553,
      -79.2882,
      44.0357
    ],
    "license": "https://www.yrt.ca/en/about-us/open-data-licence-agreement.aspx",
    "mdb": "1750",
    "vehiclesAtProbe": 76
  },
  {
    "id": "yrtviva-york-region",
    "provider": "YRT/Viva (York Region)",
    "country": "CA",
    "region": "",
    "url": "https://rtu.york.ca/gtfsrealtime/VehiclePositions",
    "bbox": [
      -79.7018,
      43.7205,
      -79.1818,
      44.3518
    ],
    "center": [
      -79.4512,
      43.8402
    ],
    "core": [
      -79.6431,
      43.7558,
      -79.287,
      44.0357
    ],
    "license": "https://www.yrt.ca/en/about-us/open-data-licence-agreement.aspx",
    "vehiclesAtProbe": 76
  },
  {
    "id": "prazska-integrovana-doprava-pid",
    "provider": "Prazska integrovana doprava (PID)",
    "country": "CZ",
    "region": "Praha, hlavní mešto",
    "url": "https://api.golemio.cz/v2/vehiclepositions/gtfsrt/vehicle_positions.pb",
    "bbox": [
      13.3127,
      49.0078,
      15.5763,
      50.9512
    ],
    "center": [
      14.4513,
      50.0768
    ],
    "core": [
      14.0764,
      49.8308,
      14.9112,
      50.2507
    ],
    "license": "https://pid.cz/o-systemu/opendata/",
    "mdb": "2391",
    "vehiclesAtProbe": 780
  },
  {
    "id": "elron",
    "provider": "ELRON",
    "country": "EE",
    "region": "",
    "url": "https://jbb.ghsq.de/gtfs/elron/VehiclePositions",
    "bbox": [
      24.0115,
      58.0107,
      27.6749,
      59.4901
    ],
    "center": [
      25.1554,
      59.3439
    ],
    "core": [
      24.0415,
      58.0407,
      27.6449,
      59.4601
    ],
    "mdb": "3418",
    "vehiclesAtProbe": 14
  },
  {
    "id": "dbus-donostiabus",
    "provider": "dBus (Donostiabus)",
    "country": "ES",
    "region": "San Sebastián",
    "url": "https://opendata.euskadi.eus/transport/moveuskadi/dbus/gtfsrt_dbus_vehicle_positions.pb",
    "bbox": [
      -1.992,
      43.2702,
      -1.8866,
      43.3702
    ],
    "center": [
      -1.9366,
      43.3202
    ],
    "core": [
      -1.962,
      43.3002,
      -1.9166,
      43.3402
    ],
    "license": "https://nap.transportes.gob.es/licencia-datos",
    "mdb": "3066",
    "vehiclesAtProbe": 2
  },
  {
    "id": "empresa-malaguena-de-transportes-emt",
    "provider": "Empresa Malagueña de Transportes (EMT)",
    "country": "ES",
    "region": "Málaga",
    "url": "https://gtfs.emtmalaga.es/GTFSRTapi/api/vehicleposition",
    "bbox": [
      -4.5761,
      36.6464,
      -4.3313,
      36.7829
    ],
    "center": [
      -4.4241,
      36.7215
    ],
    "core": [
      -4.4485,
      36.6972,
      -4.3613,
      36.7529
    ],
    "mdb": "2213",
    "vehiclesAtProbe": 3
  },
  {
    "id": "empresa-municipal-de-transportes-de-fuen",
    "provider": "Empresa Municipal de Transportes de Fuenlabrada (EMTF)",
    "country": "ES",
    "region": "Fuenlabrada",
    "url": "https://api.control.optibus.co/opendata/v1/gtfs-rt/vehicle-positions?uid=c-5cfcd2d1",
    "bbox": [
      -3.829,
      40.2336,
      -3.729,
      40.3336
    ],
    "center": [
      -3.779,
      40.2836
    ],
    "core": [
      -3.799,
      40.2636,
      -3.759,
      40.3036
    ],
    "mdb": "2402",
    "vehiclesAtProbe": 1
  },
  {
    "id": "la-regional-vallisoletana-sa",
    "provider": "La Regional Vallisoletana S.A",
    "country": "ES",
    "region": "Arroyo de la Encomienda",
    "url": "https://enzeyiwpoomhlxmcjivn.supabase.co/functions/v1/gtfs-rt",
    "bbox": [
      -4.7722,
      41.5553,
      -4.6515,
      41.6753
    ],
    "center": [
      -4.7015,
      41.6253
    ],
    "core": [
      -4.7422,
      41.5853,
      -4.6815,
      41.6453
    ],
    "mdb": "3511",
    "vehiclesAtProbe": 8
  },
  {
    "id": "metro-bilbao",
    "provider": "Metro Bilbao",
    "country": "ES",
    "region": "",
    "url": "https://ctb-gtfs-rt.s3.eu-south-2.amazonaws.com/metro-bilbao-vehicle-positions.pb",
    "bbox": [
      -2.9634,
      43.2043,
      -2.8634,
      43.3043
    ],
    "center": [
      -2.9134,
      43.2543
    ],
    "core": [
      -2.9334,
      43.2343,
      -2.8934,
      43.2743
    ],
    "license": "https://data.ctb.eus/en/pages/legal-notice",
    "mdb": "3058",
    "vehiclesAtProbe": 1
  },
  {
    "id": "renfe-commuter-trains-cercanias",
    "provider": "Renfe commuter trains (Cercanias)",
    "country": "ES",
    "region": "",
    "url": "https://gtfsrt.renfe.com/vehicle_positions.pb",
    "bbox": [
      -6.2882,
      36.468,
      3.1633,
      43.5895
    ],
    "center": [
      -3.3353,
      40.6443
    ],
    "core": [
      -5.875,
      37.3615,
      2.2506,
      43.3865
    ],
    "license": "https://data.renfe.com/dataset/ubicacion-vehiculos",
    "mdb": "2835",
    "vehiclesAtProbe": 136
  },
  {
    "id": "helsingin-seudun-liikenne",
    "provider": "Helsingin seudun liikenne",
    "country": "FI",
    "region": "Helsinki",
    "url": "https://realtime.hsl.fi/realtime/vehicle-positions/v2/hsl",
    "bbox": [
      24.0181,
      59.9875,
      26.705,
      60.9763
    ],
    "center": [
      24.9367,
      60.208
    ],
    "core": [
      24.6444,
      60.1345,
      25.1196,
      60.3445
    ],
    "license": "https://www.hsl.fi/en/hsl/open-data#gtfs-rt-ap-is",
    "mdb": "3229",
    "vehiclesAtProbe": 376
  },
  {
    "id": "car-jaune",
    "provider": "Car Jaune",
    "country": "FR",
    "region": "",
    "url": "https://pysae.com/api/v2/groups/car-jaune/gtfs-rt",
    "bbox": [
      55.1723,
      -21.4285,
      55.8422,
      -20.8224
    ],
    "center": [
      55.4706,
      -21.0099
    ],
    "core": [
      55.2282,
      -21.3543,
      55.7298,
      -20.8574
    ],
    "license": "https://transport.data.gouv.fr/datasets/horaires-theoriques-au-format-gtfs-et-horaires-temps-reel-au-format-gtfs-rt-du-reseau-car-jaune-a-la-reunion",
    "mdb": "2459",
    "vehiclesAtProbe": 91
  },
  {
    "id": "reseau-urbain-cap-cotentin",
    "provider": "Réseau urbain Cap Cotentin",
    "country": "FR",
    "region": "Communauté d'agglomération Le Cotentin",
    "url": "https://pysae.com/api/v2/groups/transdev-cotentin/gtfs-rt",
    "bbox": [
      -1.8622,
      49.4553,
      -1.3561,
      49.7409
    ],
    "center": [
      -1.6403,
      49.6415
    ],
    "core": [
      -1.8249,
      49.488,
      -1.4587,
      49.6819
    ],
    "license": "https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf",
    "mdb": "1841",
    "vehiclesAtProbe": 22
  },
  {
    "id": "transports-bordeaux-metropole-tbm",
    "provider": "Transports Bordeaux Métropole (TBM)",
    "country": "FR",
    "region": "Bordeaux",
    "url": "https://bdx.mecatran.com/utw/ws/gtfsfeed/vehicles/bordeaux?apiKey=opendata-bordeaux-metropole-flux-gtfs-rt",
    "bbox": [
      -0.8313,
      44.7219,
      -0.4456,
      44.9737
    ],
    "center": [
      -0.5821,
      44.8371
    ],
    "core": [
      -0.7278,
      44.766,
      -0.5082,
      44.9266
    ],
    "license": "https://transport.data.gouv.fr/datasets/offres-de-services-bus-tram-et-scolaire-au-format-gtfs-gtfs-rt-siri-lite-1",
    "mdb": "2625",
    "vehiclesAtProbe": 115
  },
  {
    "id": "azienda-del-consorzio-trasporti-venezian-3424",
    "provider": "Azienda del Consorzio Trasporti Veneziano (ACTV) Automobilistico",
    "country": "IT",
    "region": "Venice",
    "url": "https://tpl.actv.it/aut/GTFSRT/vehiclePositions",
    "bbox": [
      11.8415,
      45.0446,
      12.4277,
      45.6619
    ],
    "center": [
      12.225,
      45.4735
    ],
    "core": [
      12.0492,
      45.1288,
      12.359,
      45.5326
    ],
    "license": "https://actv.avmspa.it/it/content/catalogo-dei-dati-metadati-e-banche-dati-actv",
    "mdb": "3424",
    "vehiclesAtProbe": 204
  },
  {
    "id": "azienda-del-consorzio-trasporti-venezian",
    "provider": "Azienda del Consorzio Trasporti Veneziano (ACTV) Navigazione",
    "country": "IT",
    "region": "Venice",
    "url": "https://tpl.actv.it/nav/GTFSRT/vehiclePositions",
    "bbox": [
      12.2519,
      45.2237,
      12.4754,
      45.5382
    ],
    "center": [
      12.3294,
      45.4356
    ],
    "core": [
      12.2821,
      45.3975,
      12.3887,
      45.4752
    ],
    "license": "https://actv.avmspa.it/it/content/catalogo-dei-dati-metadati-e-banche-dati-actv",
    "mdb": "3422",
    "vehiclesAtProbe": 29
  },
  {
    "id": "cotral-busone",
    "provider": "Cotral - BusOne",
    "country": "IT",
    "region": "Rome",
    "url": "https://proxy.busone.app/cotral/gtfs-rt/vehicle-positions.pb",
    "bbox": [
      11.7666,
      41.2026,
      28.1167,
      57.7746
    ],
    "center": [
      12.6461,
      41.9045
    ],
    "core": [
      12.08,
      41.3278,
      13.6286,
      42.4258
    ],
    "license": "https://proxy.busone.app/cotral/readme",
    "mdb": "3387",
    "vehiclesAtProbe": 198
  },
  {
    "id": "roma-servizi-per-la-mobilita",
    "provider": "Roma Servizi per la Mobilità",
    "country": "IT",
    "region": "Rome",
    "url": "https://romamobilita.it/sites/default/files/rome_rtgtfs_vehicle_positions_feed.pb",
    "bbox": [
      12.1078,
      41.6486,
      12.7892,
      42.4415
    ],
    "center": [
      12.4959,
      41.8947
    ],
    "core": [
      12.3404,
      41.7638,
      12.6553,
      41.991
    ],
    "license": "https://romamobilita.it/it/tecnologie/open-data/dataset",
    "mdb": "1776",
    "vehiclesAtProbe": 672
  },
  {
    "id": "lanka-metro-transit",
    "provider": "Lanka Metro Transit",
    "country": "LK",
    "region": "Colombo",
    "url": "https://api.transit.seyone.dev/api/v1/realtime/vehicle-positions",
    "bbox": [
      79.7984,
      6.6643,
      80.0445,
      7.1512
    ],
    "center": [
      79.8837,
      6.9108
    ],
    "core": [
      79.8317,
      6.7649,
      79.9958,
      7.1178
    ],
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "mdb": "3489",
    "vehiclesAtProbe": 78
  },
  {
    "id": "si-susisiekimo-paslaugos",
    "provider": "SĮ 'Susisiekimo paslaugos'",
    "country": "LT",
    "region": "Vilnius",
    "url": "https://www.stops.lt/vilnius/vehicle_positions.pb",
    "bbox": [
      25.0188,
      54.5552,
      25.5165,
      54.8561
    ],
    "center": [
      25.2732,
      54.7
    ],
    "core": [
      25.1539,
      54.6117,
      25.4062,
      54.7764
    ],
    "mdb": "2383",
    "vehiclesAtProbe": 236
  },
  {
    "id": "regia-transport-electric-chisinau-im-par",
    "provider": "Regia Transport Electric Chișinău, Î.M. Parcul Urban de Autobuze",
    "country": "MD",
    "region": "Chișinău",
    "url": "https://chisinau-rt-feed.gtfs.ro/vehiclePositions",
    "bbox": [
      28.6843,
      46.8832,
      29.109,
      47.1471
    ],
    "center": [
      28.842,
      47.0227
    ],
    "core": [
      28.7548,
      46.9593,
      28.9102,
      47.0785
    ],
    "mdb": "2342",
    "vehiclesAtProbe": 114
  },
  {
    "id": "ovapi",
    "provider": "OVapi",
    "country": "NL",
    "region": "",
    "url": "http://gtfs.ovapi.nl/nl/vehiclePositions.pb",
    "bbox": [
      -0.1265,
      43.3033,
      21.052,
      55.6728
    ],
    "center": [
      4.8247,
      52.3401
    ],
    "core": [
      4.3556,
      51.8879,
      5.3211,
      52.531
    ],
    "license": "https://old.datahub.io/dataset/gtfs-nl",
    "mdb": "1646",
    "vehiclesAtProbe": 116
  },
  {
    "id": "ovapi-all-of-the-netherlands",
    "provider": "OVapi (all of the Netherlands)",
    "country": "NL",
    "region": "",
    "url": "https://gtfs.ovapi.nl/nl/vehiclePositions.pb",
    "bbox": [
      4.2703,
      51.7853,
      6.6419,
      53.0991
    ],
    "center": [
      4.8247,
      52.3401
    ],
    "core": [
      4.3556,
      51.8879,
      5.3211,
      52.531
    ],
    "license": "https://gtfs.ovapi.nl/README",
    "vehiclesAtProbe": 116
  },
  {
    "id": "entur-all-of-norway",
    "provider": "Entur (all of Norway)",
    "country": "NO",
    "region": "",
    "url": "https://api.entur.io/realtime/v1/gtfs-rt/vehicle-positions",
    "headers": {
      "ET-Client-Name": "osiris-transit"
    },
    "bbox": [
      5.4041,
      57.9754,
      23.7314,
      70.6829
    ],
    "center": [
      10.3571,
      59.9308
    ],
    "core": [
      5.899,
      58.1076,
      19.0976,
      69.7193
    ],
    "license": "https://developer.entur.org/pages-intro-authentication",
    "vehiclesAtProbe": 689
  },
  {
    "id": "go-ahead",
    "provider": "Go-Ahead",
    "country": "NO",
    "region": "",
    "url": "https://api.entur.io/realtime/v1/gtfs-rt/vehicle-positions?datasource=GOA",
    "bbox": [
      4.5128,
      53.5519,
      31.112,
      78.2468
    ],
    "center": [
      6.1386,
      58.9596
    ],
    "core": [
      5.7206,
      58.5096,
      9.184,
      59.4107
    ],
    "license": "https://data.norge.no/nlod/en/",
    "mdb": "1797",
    "vehiclesAtProbe": 3
  },
  {
    "id": "vy-buss-se",
    "provider": "Vy Buss (SE)",
    "country": "NO",
    "region": "",
    "url": "https://api.entur.io/realtime/v1/gtfs-rt/vehicle-positions?datasource=VYB",
    "bbox": [
      4.5128,
      53.5519,
      31.112,
      78.2468
    ],
    "center": [
      15.8974,
      59.4358
    ],
    "core": [
      10.6841,
      55.6248,
      17.9551,
      59.6683
    ],
    "license": "https://data.norge.no/nlod/en/",
    "mdb": "1801",
    "vehiclesAtProbe": 11
  },
  {
    "id": "vy-express",
    "provider": "Vy Express",
    "country": "NO",
    "region": "",
    "url": "https://api.entur.io/realtime/v1/gtfs-rt/vehicle-positions?datasource=VYX",
    "bbox": [
      4.5128,
      53.5519,
      31.112,
      78.2468
    ],
    "center": [
      10.9045,
      60.1816
    ],
    "core": [
      6.5981,
      59.1475,
      11.2114,
      62.6404
    ],
    "license": "https://data.norge.no/nlod/en/",
    "mdb": "1803",
    "vehiclesAtProbe": 13
  },
  {
    "id": "pks-w-rzeszowie-sa",
    "provider": "PKS w Rzeszowie S.A.",
    "country": "PL",
    "region": "",
    "url": "https://www.mpkrzeszow.pl/gtfs-pks/rt/gtfsrt.pb",
    "bbox": [
      21.7859,
      49.8288,
      22.2466,
      50.2103
    ],
    "center": [
      22.0044,
      50.0423
    ],
    "core": [
      21.8273,
      49.9031,
      22.1576,
      50.1786
    ],
    "license": "https://www.mpkrzeszow.pl/otwartedane/",
    "mdb": "3428",
    "vehiclesAtProbe": 22
  },
  {
    "id": "rzeszowski-transport-miejski",
    "provider": "Rzeszowski Transport Miejski",
    "country": "PL",
    "region": "",
    "url": "https://www.mpkrzeszow.pl/gtfs/rt/gtfsrt.pb",
    "bbox": [
      21.7861,
      49.8989,
      22.1198,
      50.1726
    ],
    "center": [
      22.008,
      50.0368
    ],
    "core": [
      21.9135,
      49.9666,
      22.0866,
      50.1265
    ],
    "license": "https://www.mpkrzeszow.pl/otwartedane/",
    "mdb": "3429",
    "vehiclesAtProbe": 56
  },
  {
    "id": "zarzad-drog-i-transportu-miejskiego-zdit",
    "provider": "Zarząd Dróg i Transportu Miejskiego (ZDiTM)",
    "country": "PL",
    "region": "Szczecin",
    "url": "https://www.zditm.szczecin.pl/storage/gtfs/gtfs-rt-vehicles.pb",
    "bbox": [
      14.3098,
      53.2825,
      14.7951,
      53.6166
    ],
    "center": [
      14.5504,
      53.4328
    ],
    "core": [
      14.466,
      53.3581,
      14.7198,
      53.5666
    ],
    "license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "mdb": "1968",
    "vehiclesAtProbe": 135
  },
  {
    "id": "zarzad-transportu-miejskiego-poznan-ztm-",
    "provider": "Zarząd Transportu Miejskiego Poznań (ZTM Poznań)",
    "country": "PL",
    "region": "Poznań",
    "url": "https://www.ztm.poznan.pl/pl/dla-deweloperow/getGtfsRtFile/?file=vehicle_positions.pb",
    "bbox": [
      16.4812,
      52.1517,
      17.2769,
      52.5872
    ],
    "center": [
      16.917,
      52.4079
    ],
    "core": [
      16.7836,
      52.3278,
      17.0235,
      52.485
    ],
    "license": "https://www.ztm.poznan.pl/otwarte-dane/dla-deweloperow/",
    "mdb": "2335",
    "vehiclesAtProbe": 259
  },
  {
    "id": "zarzad-transportu-publicznego-w-krakowie",
    "provider": "Zarząd Transportu Publicznego w Krakowie (ZTP Kraków)",
    "country": "PL",
    "region": "Kraków",
    "url": "https://gtfs.ztp.krakow.pl/VehiclePositions_T.pb",
    "bbox": [
      19.8393,
      49.9627,
      20.1408,
      50.1541
    ],
    "center": [
      19.9606,
      50.0639
    ],
    "core": [
      19.8938,
      49.9953,
      20.0851,
      50.1164
    ],
    "license": "https://ztp.krakow.pl",
    "mdb": "2340",
    "vehiclesAtProbe": 103
  },
  {
    "id": "zarzad-transportu-publicznego-w-krakowie-2601",
    "provider": "Zarząd Transportu Publicznego w Krakowie (ZTP Kraków)",
    "country": "PL",
    "region": "Kraków",
    "url": "https://gtfs.ztp.krakow.pl/VehiclePositions.pb",
    "bbox": [
      19.584,
      49.9025,
      20.3526,
      50.2452
    ],
    "center": [
      19.9486,
      50.0662
    ],
    "core": [
      19.798,
      49.9789,
      20.0882,
      50.1272
    ],
    "license": "https://ztp.krakow.pl/",
    "mdb": "2601",
    "vehiclesAtProbe": 350
  },
  {
    "id": "carris",
    "provider": "Carris",
    "country": "PT",
    "region": "Lisbon",
    "url": "https://gateway.carris.pt/gateway/gtfs/api/v2.11/GTFS/realtime/vehiclepositions",
    "bbox": [
      -9.2528,
      38.654,
      -9.053,
      38.8373
    ],
    "center": [
      -9.1467,
      38.7384
    ],
    "core": [
      -9.2161,
      38.6844,
      -9.083,
      38.8073
    ],
    "mdb": "2930",
    "vehiclesAtProbe": 20
  },
  {
    "id": "carris-metropolitana",
    "provider": "Carris Metropolitana",
    "country": "PT",
    "region": "Lisboa",
    "url": "https://api.carrismetropolitana.pt/vehicles.pb",
    "bbox": [
      -9.5086,
      38.4111,
      -8.4459,
      39.0883
    ],
    "center": [
      -9.1624,
      38.6862
    ],
    "core": [
      -9.2844,
      38.5447,
      -8.8678,
      38.8399
    ],
    "license": "https://github.com/carrismetropolitana/gtfs",
    "mdb": "2028",
    "vehiclesAtProbe": 15
  },
  {
    "id": "asociatia-de-dezvoltare-intercomunitara-",
    "provider": "Asociația de Dezvoltare Intercomunitară pentru Transport Public București – Ilfov (TPBI)",
    "country": "RO",
    "region": "București",
    "url": "https://gtfs.tpbi.ro/api/gtfs-rt/vehiclePositions",
    "bbox": [
      25.87,
      44.2567,
      26.3862,
      44.7506
    ],
    "center": [
      26.0901,
      44.433
    ],
    "core": [
      25.9805,
      44.3591,
      26.2115,
      44.5431
    ],
    "mdb": "2104",
    "vehiclesAtProbe": 364
  },
  {
    "id": "compania-de-transport-public-cluj-napoca",
    "provider": "Compania de Transport Public Cluj-Napoca",
    "country": "RO",
    "region": "Cluj-Napoca",
    "url": "https://cluj-rt-feed.gtfs.ro/vehiclePositions",
    "bbox": [
      23.2888,
      46.5789,
      23.8409,
      46.8983
    ],
    "center": [
      23.5965,
      46.7712
    ],
    "core": [
      23.5333,
      46.7297,
      23.6548,
      46.8073
    ],
    "mdb": "2614",
    "vehiclesAtProbe": 54
  },
  {
    "id": "compania-de-transport-public-iasi",
    "provider": "Compania de Transport Public Iași",
    "country": "RO",
    "region": "Iași",
    "url": "https://iasi-rt-feed.gtfs.ro/vehiclePositions",
    "bbox": [
      27.4461,
      47.0406,
      27.8242,
      47.3187
    ],
    "center": [
      27.586,
      47.1634
    ],
    "core": [
      27.4926,
      47.0944,
      27.6557,
      47.1986
    ],
    "mdb": "2118",
    "vehiclesAtProbe": 66
  },
  {
    "id": "transbus-buzau",
    "provider": "Transbus Buzău",
    "country": "RO",
    "region": "Buzău",
    "url": "https://gtfsagent.transportpublic.ro/transbus/vehiclePositions",
    "bbox": [
      26.4764,
      44.9645,
      27.1482,
      45.3375
    ],
    "center": [
      26.8351,
      45.1346
    ],
    "core": [
      26.8151,
      45.1146,
      26.8551,
      45.1546
    ],
    "mdb": "2113",
    "vehiclesAtProbe": 1
  },
  {
    "id": "lvivavtodor",
    "provider": "Lvivavtodor",
    "country": "UA",
    "region": "Lviv",
    "url": "https://track.ua-gis.com/gtfs/lviv/vehicle_position",
    "bbox": [
      23.8417,
      49.7329,
      24.1526,
      49.952
    ],
    "center": [
      24.0197,
      49.8346
    ],
    "core": [
      23.9112,
      49.7679,
      24.0898,
      49.8936
    ],
    "license": "https://opendata.city-adm.lviv.ua/ne/dataset/lviv-public-transport-gtfs-real-time/resource/d45fd95a-ffc9-45b1-be05-52012707d51f?inner_span=True",
    "mdb": "2376",
    "vehiclesAtProbe": 221
  },
  {
    "id": "arlington-transit",
    "provider": "Arlington Transit",
    "country": "US",
    "region": "Arlington",
    "url": "https://realtime.arlingtontransit.com/gtfsrt/vehicles",
    "bbox": [
      -77.1831,
      38.7946,
      -77.0205,
      38.948
    ],
    "center": [
      -77.0821,
      38.8589
    ],
    "core": [
      -77.1531,
      38.8246,
      -77.0505,
      38.918
    ],
    "mdb": "1790",
    "vehiclesAtProbe": 14
  },
  {
    "id": "beach-cities-transit",
    "provider": "Beach Cities Transit",
    "country": "US",
    "region": "Redondo Beach",
    "url": "https://redondobeachbct.com/gtfs-rt/vehiclepositions",
    "bbox": [
      -118.4369,
      33.8161,
      -118.3365,
      33.9811
    ],
    "center": [
      -118.3865,
      33.9311
    ],
    "core": [
      -118.4069,
      33.8827,
      -118.3665,
      33.9511
    ],
    "license": "https://www.redondo.org/depts/recreation/transit/trip_planner/gtfs_data.asp",
    "mdb": "1566",
    "vehiclesAtProbe": 2
  },
  {
    "id": "ben-franklin-transit",
    "provider": "Ben Franklin Transit",
    "country": "US",
    "region": "Richland",
    "url": "https://myride.bft.org/Realtime/GTFS_VehiclePositions.pb",
    "bbox": [
      -119.7888,
      46.1485,
      -118.9949,
      46.351
    ],
    "center": [
      -119.2161,
      46.2417
    ],
    "core": [
      -119.3209,
      46.1827,
      -119.0411,
      46.3131
    ],
    "mdb": "2125",
    "vehiclesAtProbe": 28
  },
  {
    "id": "big-blue-bus",
    "provider": "Big Blue Bus",
    "country": "US",
    "region": "Santa Monica",
    "url": "http://gtfs.bigbluebus.com/vehiclepositions.bin",
    "bbox": [
      -118.5492,
      33.9295,
      -118.2373,
      34.0757
    ],
    "center": [
      -118.3932,
      34.0026
    ],
    "core": [
      -118.5492,
      33.9295,
      -118.2373,
      34.0757
    ],
    "license": "http://gtfs.bigbluebus.com/",
    "mdb": "1436",
    "vehiclesAtProbe": 0
  },
  {
    "id": "broward-county-transit",
    "provider": "Broward County Transit",
    "country": "US",
    "region": "Fort Lauderdale",
    "url": "https://myride2.broward.org/gtfsrealtime/api/vehiclepositions",
    "bbox": [
      -80.4285,
      25.7618,
      -80.0473,
      26.3839
    ],
    "center": [
      -80.2018,
      26.1368
    ],
    "core": [
      -80.3502,
      25.9412,
      -80.0836,
      26.3284
    ],
    "mdb": "3475",
    "vehiclesAtProbe": 57
  },
  {
    "id": "capital-area-transportation-authority",
    "provider": "Capital Area Transportation Authority",
    "country": "US",
    "region": "Lansing",
    "url": "http://developers.cata.org/gtfsrt/vehicle/vehiclepositions.pb",
    "bbox": [
      -84.6306,
      42.5657,
      -84.174,
      42.7761
    ],
    "center": [
      -84.4772,
      42.7261
    ],
    "core": [
      -84.4977,
      42.706,
      -84.4572,
      42.7461
    ],
    "license": "https://www.cata.org/Portals/0/CATAGTFSLicenseAgreement20150323.pdf",
    "mdb": "1424",
    "vehiclesAtProbe": 2
  },
  {
    "id": "capital-district-transportation-authorit",
    "provider": "Capital District Transportation Authority",
    "country": "US",
    "region": "Albany",
    "url": "http://gtfs.cdta.org:8080/gtfsrealtime/VehiclePositions",
    "bbox": [
      -74.0101,
      42.4671,
      -73.6133,
      43.1424
    ],
    "center": [
      -73.7816,
      42.7088
    ],
    "core": [
      -73.9644,
      42.63,
      -73.659,
      42.8626
    ],
    "license": "https://www.cdta.org/developer-license-agreement/169",
    "mdb": "2700",
    "vehiclesAtProbe": 42
  },
  {
    "id": "capital-metro",
    "provider": "Capital Metro",
    "country": "US",
    "region": "Austin",
    "url": "https://data.texas.gov/download/eiei-9rpf/application%2Foctet-stream",
    "bbox": [
      -97.9911,
      30.1013,
      -97.3704,
      30.5879
    ],
    "center": [
      -97.7165,
      30.2657
    ],
    "core": [
      -97.8118,
      30.1653,
      -97.6446,
      30.4384
    ],
    "license": "https://www.capmetro.org/metrolabs/",
    "mdb": "1427",
    "vehiclesAtProbe": 285
  },
  {
    "id": "cecil-transit",
    "provider": "Cecil Transit",
    "country": "US",
    "region": "Maryland",
    "url": "https://passio3.com/cecil/passioTransit/gtfs/realtime/vehiclePositions",
    "bbox": [
      -76.0763,
      39.5499,
      -75.7435,
      39.6832
    ],
    "center": [
      -75.9099,
      39.6166
    ],
    "core": [
      -76.0763,
      39.5499,
      -75.7435,
      39.6832
    ],
    "mdb": "3080",
    "vehiclesAtProbe": 0
  },
  {
    "id": "central-florida-regional-transit-authori",
    "provider": "Central Florida Regional Transit Authority (LYNX)",
    "country": "US",
    "region": "Orlando",
    "url": "http://gtfsrt.golynx.com/gtfsrt/GTFS_VehiclePositions.pb",
    "bbox": [
      -81.6768,
      28.1093,
      -81.1972,
      28.815
    ],
    "center": [
      -81.4478,
      28.479
    ],
    "core": [
      -81.5575,
      28.3493,
      -81.2752,
      28.6173
    ],
    "mdb": "1766",
    "vehiclesAtProbe": 50
  },
  {
    "id": "central-ohio-transit-authority",
    "provider": "Central Ohio Transit Authority",
    "country": "US",
    "region": "Columbus",
    "url": "http://realtime.cota.com/TMGTFSRealTimeWebService/Vehicle/VehiclePositions.pb",
    "bbox": [
      -83.1627,
      39.8301,
      -82.7717,
      40.1505
    ],
    "center": [
      -82.9672,
      39.9903
    ],
    "core": [
      -83.1627,
      39.8301,
      -82.7717,
      40.1505
    ],
    "license": "https://www.cota.com/data/",
    "mdb": "1430",
    "vehiclesAtProbe": 0
  },
  {
    "id": "cincinnati-metro",
    "provider": "Cincinnati Metro",
    "country": "US",
    "region": "Cincinnati",
    "url": "https://tmgtfsprd.sorttrpcloud.com/TMGTFSRealTimeWebService/vehicle/vehiclepositions.pb",
    "bbox": [
      -84.7939,
      39.025,
      -84.2599,
      39.3572
    ],
    "center": [
      -84.5133,
      39.1441
    ],
    "core": [
      -84.6293,
      39.0864,
      -84.3751,
      39.2777
    ],
    "mdb": "1489",
    "vehiclesAtProbe": 61
  },
  {
    "id": "clackco-connects-clackamas-county",
    "provider": "ClackCo Connects (Clackamas County)",
    "country": "US",
    "region": "Oregon",
    "url": "https://passio3.com/clackamas/passioTransit/gtfs/realtime/vehiclePositions",
    "bbox": [
      -122.6558,
      45.2585,
      -122.3389,
      45.466
    ],
    "center": [
      -122.5756,
      45.3218
    ],
    "core": [
      -122.6258,
      45.2885,
      -122.3689,
      45.436
    ],
    "mdb": "2744",
    "vehiclesAtProbe": 3
  },
  {
    "id": "commerce-municipal-bus-lines",
    "provider": "Commerce Municipal Bus Lines",
    "country": "US",
    "region": "Commerce",
    "url": "https://citycommbus.com/gtfs-rt/vehiclepositions",
    "bbox": [
      -118.2643,
      33.9656,
      -118.1192,
      34.0898
    ],
    "center": [
      -118.1736,
      34.0295
    ],
    "core": [
      -118.2289,
      34.0054,
      -118.1492,
      34.0598
    ],
    "mdb": "1794",
    "vehiclesAtProbe": 4
  },
  {
    "id": "community-transit",
    "provider": "Community Transit",
    "country": "US",
    "region": "Washington",
    "url": "https://s3.amazonaws.com/commtrans-realtime-prod/vehiclepositions.pb",
    "bbox": [
      -122.433,
      47.5921,
      -121.601,
      48.2937
    ],
    "center": [
      -122.2394,
      47.8578
    ],
    "core": [
      -122.3876,
      47.7441,
      -121.9917,
      48.1747
    ],
    "license": "https://www.communitytransit.org/OpenData",
    "mdb": "1448",
    "vehiclesAtProbe": 77
  },
  {
    "id": "connecticut-transit",
    "provider": "Connecticut Transit",
    "country": "US",
    "region": "Connecticut",
    "url": "https://cttprdtmgtfs.ctttrpcloud.com/TMGTFSRealTimeWebService/Vehicle/VehiclePositions.pb",
    "bbox": [
      -73.7737,
      40.9976,
      -71.7945,
      42.0208
    ],
    "center": [
      -72.8107,
      41.6312
    ],
    "core": [
      -73.5613,
      41.028,
      -72.63,
      41.8551
    ],
    "license": "https://www.cttransit.com/about/developers/terms-of-use",
    "mdb": "2422",
    "vehiclesAtProbe": 101
  },
  {
    "id": "des-moines-area-regional-transit-authori",
    "provider": "Des Moines Area Regional Transit Authority (DART)",
    "country": "US",
    "region": "Des Moines",
    "url": "https://www.ridedart.com/gtfs/real-time/vehicle-positions",
    "bbox": [
      -93.8574,
      41.4619,
      -93.462,
      41.7329
    ],
    "center": [
      -93.6248,
      41.5886
    ],
    "core": [
      -93.8274,
      41.4919,
      -93.492,
      41.6934
    ],
    "license": "https://www.ridedart.com/open-data-policy-and-terms-use",
    "mdb": "1771",
    "vehiclesAtProbe": 17
  },
  {
    "id": "duluth-transit",
    "provider": "Duluth Transit",
    "country": "US",
    "region": "Duluth",
    "url": "https://duluthtransit.com/gtfsrt/Vehicle/VehiclePositions.pb",
    "bbox": [
      -92.2908,
      46.6433,
      -92.0096,
      46.8722
    ],
    "center": [
      -92.104,
      46.7843
    ],
    "core": [
      -92.231,
      46.6733,
      -92.0544,
      46.8422
    ],
    "license": "https://www.duluthtransit.com/home/doing-business/developer-resources/",
    "mdb": "1461",
    "vehiclesAtProbe": 10
  },
  {
    "id": "el-paso-transportation-authority",
    "provider": "El Paso Transportation Authority",
    "country": "US",
    "region": "El Paso",
    "url": "https://data.peaktransit.com/gtfsrt/193/VehiclePosition.pb",
    "bbox": [
      51.6293,
      22.9433,
      55.924,
      24.7483
    ],
    "center": [
      53.7767,
      23.8458
    ],
    "core": [
      51.6293,
      22.9433,
      55.924,
      24.7483
    ],
    "mdb": "3204",
    "vehiclesAtProbe": 0
  },
  {
    "id": "emery-go-round",
    "provider": "Emery Go-Round",
    "country": "US",
    "region": "Emeryville",
    "url": "https://emerygoround.tripshot.com/v1/gtfs/realtime/feed/egr?types=VehiclePosition",
    "bbox": [
      -122.3581,
      37.7792,
      -122.2169,
      37.895
    ],
    "center": [
      -122.2795,
      37.8371
    ],
    "core": [
      -122.3281,
      37.8092,
      -122.2469,
      37.865
    ],
    "license": "https://www.foothilltransit.org/about/developer-resources/developer-license-agreement/",
    "mdb": "2227",
    "vehiclesAtProbe": 6
  },
  {
    "id": "everett-transit",
    "provider": "Everett Transit",
    "country": "US",
    "region": "Everett",
    "url": "https://everett.mapstrat.com/current/gtfrealtime_VehiclePositions.bin",
    "bbox": [
      -122.3107,
      47.858,
      -122.1429,
      48.0558
    ],
    "center": [
      -122.1947,
      47.9744
    ],
    "core": [
      -122.2806,
      47.8882,
      -122.1729,
      48.0254
    ],
    "license": "https://www.soundtransit.org/help-contacts/business-information/open-transit-data-otd/transit-data-terms-use",
    "mdb": "3074",
    "vehiclesAtProbe": 25
  },
  {
    "id": "foothill-transit",
    "provider": "Foothill Transit",
    "country": "US",
    "region": "Pasadena",
    "url": "https://foothill_3rdparty.rideralerts.com/myStop/GTFS-Realtime.ashx?&Type=VehiclePosition&serverid=0",
    "bbox": [
      -118.2672,
      33.9162,
      -117.6904,
      34.1516
    ],
    "center": [
      -117.9788,
      34.0339
    ],
    "core": [
      -118.2672,
      33.9162,
      -117.6904,
      34.1516
    ],
    "license": "https://www.foothilltransit.org/about/developer-resources/developer-license-agreement/",
    "mdb": "2229",
    "vehiclesAtProbe": 0
  },
  {
    "id": "frederick-county-transit",
    "provider": "Frederick County TransIT",
    "country": "US",
    "region": "Frederick",
    "url": "https://passio3.com/frederick/passioTransit/gtfs/realtime/vehiclePositions",
    "bbox": [
      -77.6651,
      39.2739,
      -77.3174,
      39.7054
    ],
    "center": [
      -77.4912,
      39.4897
    ],
    "core": [
      -77.6651,
      39.2739,
      -77.3174,
      39.7054
    ],
    "mdb": "3070",
    "vehiclesAtProbe": 0
  },
  {
    "id": "greater-cleveland-regional-transit-autho",
    "provider": "Greater Cleveland Regional Transit Authority (GCRTA)",
    "country": "US",
    "region": "Cleveland",
    "url": "https://gtfs-rt.gcrta.vontascloud.com/TMGTFSRealTimeWebService/Vehicle/VehiclePositions.pb",
    "bbox": [
      -81.9674,
      41.2278,
      -81.4274,
      41.6595
    ],
    "center": [
      -81.6535,
      41.484
    ],
    "core": [
      -81.8047,
      41.3948,
      -81.5114,
      41.5522
    ],
    "license": "https://www.riderta.com/developers",
    "mdb": "3410",
    "vehiclesAtProbe": 213
  },
  {
    "id": "greater-portland-metro-bus",
    "provider": "Greater Portland Metro Bus",
    "country": "US",
    "region": "Portland",
    "url": "https://gtfsrt.gptd.cadavl.com/ProfilGtfsRt2_0RSProducer-GPTD/VehiclePosition.pb",
    "bbox": [
      -70.4482,
      43.5972,
      -69.9625,
      43.9138
    ],
    "center": [
      -70.276,
      43.6472
    ],
    "core": [
      -70.296,
      43.6272,
      -70.256,
      43.6672
    ],
    "license": "https://www.gpmetro.org/about-us/projects-initiatives/developers/",
    "mdb": "2645",
    "vehiclesAtProbe": 1
  },
  {
    "id": "intercity-transit",
    "provider": "Intercity Transit",
    "country": "US",
    "region": "Olympia",
    "url": "https://its.rideralerts.com/InfoPoint/GTFS-Realtime.ashx?Type=VehiclePosition",
    "bbox": [
      -123.0271,
      46.8835,
      -122.4544,
      47.1982
    ],
    "center": [
      -122.8317,
      47.0422
    ],
    "core": [
      -122.9544,
      46.9629,
      -122.5593,
      47.1053
    ],
    "mdb": "1537",
    "vehiclesAtProbe": 40
  },
  {
    "id": "king-county-metro",
    "provider": "King County Metro",
    "country": "US",
    "region": "Seattle",
    "url": "https://s3.amazonaws.com/kcm-alerts-realtime-prod/vehiclepositions.pb",
    "bbox": [
      -122.5066,
      47.1891,
      -121.7858,
      47.8711
    ],
    "center": [
      -122.3134,
      47.6125
    ],
    "core": [
      -122.3968,
      47.3525,
      -122.1246,
      47.7592
    ],
    "license": "https://kingcounty.gov/depts/transportation/metro/travel-options/bus/app-center/developer-resources/terms-of-use.aspx",
    "mdb": "1542",
    "vehiclesAtProbe": 331
  },
  {
    "id": "knoxville-area-transit-kat",
    "provider": "Knoxville Area Transit (KAT)",
    "country": "US",
    "region": "Knoxville",
    "url": "https://knoxville.syncromatics.com/gtfs-rt/vehiclepositions",
    "bbox": [
      -84.1031,
      35.9063,
      -83.8178,
      36.0804
    ],
    "center": [
      -83.8967,
      35.9848
    ],
    "core": [
      -83.9338,
      35.9584,
      -83.8478,
      36.0504
    ],
    "license": "https://www.knoxvilletn.gov/government/opendata/knoxville_area_transit_kat_gtfs_feed",
    "mdb": "3513",
    "vehiclesAtProbe": 3
  },
  {
    "id": "maryland-transit-administration",
    "provider": "Maryland Transit Administration",
    "country": "US",
    "region": "Maryland",
    "url": "https://mdotmta-gtfs-rt.s3.amazonaws.com/MARC+RT/marc.pb",
    "bbox": [
      -77.9617,
      38.899,
      -76.0732,
      39.5581
    ],
    "center": [
      -76.6895,
      39.2577
    ],
    "core": [
      -76.7095,
      39.2377,
      -76.6695,
      39.2777
    ],
    "mdb": "1619",
    "vehiclesAtProbe": 1
  },
  {
    "id": "massachusetts-bay-transportation-authori",
    "provider": "Massachusetts Bay Transportation Authority (MBTA)",
    "country": "US",
    "region": "Boston",
    "url": "https://cdn.mbta.com/realtime/VehiclePositions.pb",
    "bbox": [
      -71.8485,
      41.5813,
      -70.2766,
      42.7978
    ],
    "center": [
      -71.0818,
      42.351
    ],
    "core": [
      -71.2107,
      42.2209,
      -70.972,
      42.4463
    ],
    "license": "https://www.mass.gov/files/documents/2017/10/27/develop_license_agree_0.pdf",
    "mdb": "1602",
    "vehiclesAtProbe": 309
  },
  {
    "id": "merced-county-transit-the-bus",
    "provider": "Merced County Transit (The Bus)",
    "country": "US",
    "region": "Merced",
    "url": "https://thebuslive.com/gtfs-rt/vehiclepositions",
    "bbox": [
      -121.0202,
      36.9645,
      -120.248,
      37.5571
    ],
    "center": [
      -120.5153,
      37.306
    ],
    "core": [
      -120.8787,
      37.2745,
      -120.4607,
      37.5271
    ],
    "mdb": "1506",
    "vehiclesAtProbe": 5
  },
  {
    "id": "metro-st-louis",
    "provider": "Metro St. Louis",
    "country": "US",
    "region": "St. Louis",
    "url": "https://www.metrostlouis.org/RealTimeData/StlRealTimeVehicles.pb",
    "bbox": [
      -90.7061,
      38.4697,
      -89.8609,
      38.8497
    ],
    "center": [
      -90.2537,
      38.6462
    ],
    "core": [
      -90.4646,
      38.5324,
      -90.011,
      38.7709
    ],
    "license": "https://www.metrostlouis.org/developer-resources/",
    "mdb": "1414",
    "vehiclesAtProbe": 76
  },
  {
    "id": "metro-transit",
    "provider": "Metro Transit",
    "country": "US",
    "region": "Minneapolis",
    "url": "https://svc.metrotransit.org/mtgtfs/vehiclepositions.pb",
    "bbox": [
      -94.1574,
      44.725,
      -92.8059,
      45.5601
    ],
    "center": [
      -93.2525,
      44.9519
    ],
    "core": [
      -93.3595,
      44.8346,
      -93.0387,
      45.0724
    ],
    "license": "https://svc.metrotransit.org",
    "mdb": "1683",
    "vehiclesAtProbe": 189
  },
  {
    "id": "metro-transit-city-of-madison",
    "provider": "Metro Transit - City of Madison",
    "country": "US",
    "region": "Madison",
    "url": "https://metromap.cityofmadison.com/gtfsrt/vehicles",
    "bbox": [
      -89.5783,
      42.966,
      -89.2448,
      43.2029
    ],
    "center": [
      -89.4016,
      43.0736
    ],
    "core": [
      -89.5481,
      43.0144,
      -89.2874,
      43.1617
    ],
    "license": "http://www.cityofmadison.com/metro/Apps/developers.cfm",
    "mdb": "2097",
    "vehiclesAtProbe": 40
  },
  {
    "id": "metropolitan-atlanta-rapid-transit-autho",
    "provider": "Metropolitan Atlanta Rapid Transit Authority (MARTA)",
    "country": "US",
    "region": "Atlanta",
    "url": "https://gtfs-rt.itsmarta.com/TMGTFSRealTimeWebService/vehicle/vehiclepositions.pb",
    "bbox": [
      -84.6698,
      33.4324,
      -84.075,
      34.1356
    ],
    "center": [
      -84.3756,
      33.7542
    ],
    "core": [
      -84.5409,
      33.5848,
      -84.1637,
      33.9645
    ],
    "mdb": "1601",
    "vehiclesAtProbe": 137
  },
  {
    "id": "metropolitan-transit-authority-mta",
    "provider": "Metropolitan Transit Authority (MTA)",
    "country": "US",
    "region": "Long Island",
    "url": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/lirr%2Fgtfs-lirr",
    "bbox": [
      -74.0529,
      40.5402,
      -71.9539,
      41.0997
    ],
    "center": [
      -73.7002,
      40.7486
    ],
    "core": [
      -74.0229,
      40.6293,
      -73.0523,
      40.873
    ],
    "license": "https://api.mta.info/#/DataFeedAgreement",
    "mdb": "1624",
    "vehiclesAtProbe": 59
  },
  {
    "id": "metropolitan-transit-authority-mta-1630",
    "provider": "Metropolitan Transit Authority (MTA)",
    "country": "US",
    "region": "New York City",
    "url": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace",
    "bbox": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "center": [
      -74.0037,
      40.7079
    ],
    "core": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "license": "https://api.mta.info/#/DataFeedAgreement",
    "mdb": "1630",
    "vehiclesAtProbe": 0
  },
  {
    "id": "metropolitan-transit-authority-mta-1631",
    "provider": "Metropolitan Transit Authority (MTA)",
    "country": "US",
    "region": "New York City",
    "url": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm",
    "bbox": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "center": [
      -74.0037,
      40.7079
    ],
    "core": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "license": "https://api.mta.info/#/DataFeedAgreement",
    "mdb": "1631",
    "vehiclesAtProbe": 0
  },
  {
    "id": "metropolitan-transit-authority-mta-1632",
    "provider": "Metropolitan Transit Authority (MTA)",
    "country": "US",
    "region": "New York City",
    "url": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-g",
    "bbox": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "center": [
      -74.0037,
      40.7079
    ],
    "core": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "license": "https://api.mta.info/#/DataFeedAgreement",
    "mdb": "1632",
    "vehiclesAtProbe": 0
  },
  {
    "id": "metropolitan-transit-authority-mta-1633",
    "provider": "Metropolitan Transit Authority (MTA)",
    "country": "US",
    "region": "New York City",
    "url": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-jz",
    "bbox": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "center": [
      -74.0037,
      40.7079
    ],
    "core": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "license": "https://api.mta.info/#/DataFeedAgreement",
    "mdb": "1633",
    "vehiclesAtProbe": 0
  },
  {
    "id": "metropolitan-transit-authority-mta-1634",
    "provider": "Metropolitan Transit Authority (MTA)",
    "country": "US",
    "region": "New York City",
    "url": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-nqrw",
    "bbox": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "center": [
      -74.0037,
      40.7079
    ],
    "core": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "license": "https://api.mta.info/#/DataFeedAgreement",
    "mdb": "1634",
    "vehiclesAtProbe": 0
  },
  {
    "id": "metropolitan-transit-authority-mta-1635",
    "provider": "Metropolitan Transit Authority (MTA)",
    "country": "US",
    "region": "New York City",
    "url": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs",
    "bbox": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "center": [
      -74.0037,
      40.7079
    ],
    "core": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "license": "https://api.mta.info/#/DataFeedAgreement",
    "mdb": "1635",
    "vehiclesAtProbe": 0
  },
  {
    "id": "metropolitan-transit-authority-mta-1636",
    "provider": "Metropolitan Transit Authority (MTA)",
    "country": "US",
    "region": "New York City",
    "url": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l",
    "bbox": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "center": [
      -74.0037,
      40.7079
    ],
    "core": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "license": "https://api.mta.info/#/DataFeedAgreement",
    "mdb": "1636",
    "vehiclesAtProbe": 0
  },
  {
    "id": "middletown-area-transit",
    "provider": "Middletown Area Transit",
    "country": "US",
    "region": "Middletown",
    "url": "https://passio3.com/9town/passioTransit/gtfs/realtime",
    "bbox": [
      -72.658,
      41.2614,
      -72.0935,
      41.5613
    ],
    "center": [
      -72.3757,
      41.4114
    ],
    "core": [
      -72.658,
      41.2614,
      -72.0935,
      41.5613
    ],
    "mdb": "2271",
    "vehiclesAtProbe": 0
  },
  {
    "id": "milwaukee-county-transit-system-mcts",
    "provider": "Milwaukee County Transit System (MCTS)",
    "country": "US",
    "region": "Milwaukee",
    "url": "https://realtime.ridemcts.com/gtfsrt/vehicles",
    "bbox": [
      -88.115,
      42.8708,
      -87.8281,
      43.3842
    ],
    "center": [
      -87.9391,
      43.0457
    ],
    "core": [
      -88.0662,
      42.9393,
      -87.875,
      43.1612
    ],
    "license": "https://www.ridemcts.com/policies/developer-terms",
    "mdb": "2130",
    "vehiclesAtProbe": 102
  },
  {
    "id": "monroe-county-transportation-authority-m",
    "provider": "Monroe County Transportation Authority (MCTA)",
    "country": "US",
    "region": "Pennsylvania",
    "url": "https://ponytracker.availtec.com/InfoPoint/gtfs-realtime.ashx?type=vehicleposition",
    "bbox": [
      -75.4273,
      40.9826,
      -75.1551,
      41.2191
    ],
    "center": [
      -75.2912,
      41.1008
    ],
    "core": [
      -75.4273,
      40.9826,
      -75.1551,
      41.2191
    ],
    "mdb": "3436",
    "vehiclesAtProbe": 0
  },
  {
    "id": "montebello-bus-lines",
    "provider": "Montebello Bus Lines",
    "country": "US",
    "region": "Montebello",
    "url": "https://mbl.rideralerts.com/InfoPoint/GTFS-Realtime.ashx?Type=VehiclePosition",
    "bbox": [
      -118.3061,
      33.8917,
      -117.9924,
      34.1288
    ],
    "center": [
      -118.1087,
      34.0186
    ],
    "core": [
      -118.2438,
      33.96,
      -118.0224,
      34.0988
    ],
    "mdb": "2218",
    "vehiclesAtProbe": 20
  },
  {
    "id": "mountain-line-transit",
    "provider": "Mountain Line Transit",
    "country": "US",
    "region": "Flagstaff",
    "url": "https://mountainline.syncromatics.com/gtfs-rt/vehiclepositions",
    "bbox": [
      -111.7197,
      35.1281,
      -111.5305,
      35.3302
    ],
    "center": [
      -111.6455,
      35.1943
    ],
    "core": [
      -111.6827,
      35.1581,
      -111.5605,
      35.2387
    ],
    "mdb": "1980",
    "vehiclesAtProbe": 13
  },
  {
    "id": "mountain-view-transportation-management-",
    "provider": "Mountain View Transportation Management Association (MVgo)",
    "country": "US",
    "region": "Mountain View",
    "url": "https://mtma.tripshot.com/v1/gtfs/realtime/feed/mvgo?types=VehiclePosition",
    "bbox": [
      -122.1116,
      37.3877,
      -122.0478,
      37.4314
    ],
    "center": [
      -122.0797,
      37.4095
    ],
    "core": [
      -122.1116,
      37.3877,
      -122.0478,
      37.4314
    ],
    "license": "https://mvgo.org/developers/",
    "mdb": "2110",
    "vehiclesAtProbe": 0
  },
  {
    "id": "nashville-mta-wego-public-transit",
    "provider": "Nashville MTA WeGo Public Transit",
    "country": "US",
    "region": "Nashville",
    "url": "http://transitdata.nashvillemta.org/TMGTFSRealTimeWebService/vehicle/vehiclepositions.pb",
    "bbox": [
      -87.3791,
      35.7416,
      -86.2972,
      36.525
    ],
    "center": [
      -86.7566,
      36.1577
    ],
    "core": [
      -86.8537,
      36.0787,
      -86.657,
      36.2947
    ],
    "license": "https://www.wegotransit.com/contact-us/data-request-submission/",
    "mdb": "1622",
    "vehiclesAtProbe": 100
  },
  {
    "id": "ny-waterway",
    "provider": "NY Waterway",
    "country": "US",
    "region": "New York",
    "url": "https://nywaterway.connexionz.net/rtt/public/utility/gtfsrealtime.aspx/vehicleposition",
    "bbox": [
      -74.0788,
      40.4333,
      -73.8702,
      41.5058
    ],
    "center": [
      -74.0038,
      40.7609
    ],
    "core": [
      -74.0238,
      40.7409,
      -73.9838,
      40.7809
    ],
    "mdb": "3199",
    "vehiclesAtProbe": 1
  },
  {
    "id": "port-authority-of-allegheny-county",
    "provider": "Port Authority of Allegheny County",
    "country": "US",
    "region": "Pittsburgh",
    "url": "http://truetime.portauthority.org/gtfsrt-train/vehicles",
    "bbox": [
      -80.2589,
      40.2679,
      -79.7054,
      40.6676
    ],
    "center": [
      -80.0583,
      40.3397
    ],
    "core": [
      -80.0793,
      40.3185,
      -79.9827,
      40.4513
    ],
    "license": "https://www.portauthority.org/business-center/developer-resources/developer-license-agreement/",
    "mdb": "1711",
    "vehiclesAtProbe": 24
  },
  {
    "id": "port-authority-of-allegheny-county-1714",
    "provider": "Port Authority of Allegheny County",
    "country": "US",
    "region": "Pittsburgh",
    "url": "https://truetime.portauthority.org/gtfsrt-bus/vehicles",
    "bbox": [
      -80.2589,
      40.2731,
      -79.7054,
      40.6676
    ],
    "center": [
      -79.9343,
      40.4446
    ],
    "core": [
      -80.1245,
      40.3416,
      -79.8463,
      40.521
    ],
    "license": "https://www.portauthority.org/business-center/developer-resources/developer-license-agreement/",
    "mdb": "1714",
    "vehiclesAtProbe": 170
  },
  {
    "id": "regional-transportation-district-rtd",
    "provider": "Regional Transportation District (RTD)",
    "country": "US",
    "region": "Denver",
    "url": "https://www.rtd-denver.com/files/gtfs-rt/VehiclePosition.pb",
    "bbox": [
      -105.5841,
      39.4569,
      -104.6695,
      40.2066
    ],
    "center": [
      -104.9855,
      39.7542
    ],
    "core": [
      -105.2681,
      39.5908,
      -104.7899,
      40.0369
    ],
    "license": "https://www.rtd-denver.com/business-center/open-spatial-data/gtfs-realtime-license-agreement",
    "mdb": "1678",
    "vehiclesAtProbe": 328
  },
  {
    "id": "rhode-island-public-transit-authority",
    "provider": "Rhode Island Public Transit Authority",
    "country": "US",
    "region": "Rhode Island",
    "url": "http://realtime.ripta.com:81/api/vehiclepositions?format=gtfs.proto",
    "bbox": [
      -71.8298,
      41.3727,
      -71.1543,
      42.017
    ],
    "center": [
      -71.4066,
      41.8244
    ],
    "core": [
      -71.5135,
      41.4716,
      -71.2601,
      41.9802
    ],
    "mdb": "1662",
    "vehiclesAtProbe": 15
  },
  {
    "id": "riverside-transit-agency",
    "provider": "Riverside Transit Agency",
    "country": "US",
    "region": "Riverside",
    "url": "https://rtabus.com/gtfsrt/vehicles",
    "bbox": [
      -117.9155,
      33.4523,
      -116.8758,
      34.1001
    ],
    "center": [
      -117.351,
      33.9176
    ],
    "core": [
      -117.5787,
      33.6782,
      -116.9867,
      34.0045
    ],
    "mdb": "1665",
    "vehiclesAtProbe": 117
  },
  {
    "id": "rochester-genesee-regional-transportatio",
    "provider": "Rochester-Genesee Regional Transportation Authority (RGRTA)",
    "country": "US",
    "region": "Rochester",
    "url": "https://api.rgrta.com/rtgvehicles?key=00e2dbf6b15742febb37d0a1d7d3acd5",
    "bbox": [
      -78.1411,
      42.5264,
      -76.9934,
      43.2973
    ],
    "center": [
      -77.6083,
      43.1582
    ],
    "core": [
      -77.6588,
      43.0872,
      -77.4882,
      43.2139
    ],
    "mdb": "1775",
    "vehiclesAtProbe": 29
  },
  {
    "id": "rogue-valley-transportation-district",
    "provider": "Rogue Valley Transportation District",
    "country": "US",
    "region": "Medford",
    "url": "https://gtfsrt.rvtd.cadavl.com/ProfilGtfsRt2_0RSProducer-RVTD/VehiclePosition.pb",
    "bbox": [
      -122.9667,
      42.1758,
      -122.6715,
      42.4815
    ],
    "center": [
      -122.8191,
      42.3287
    ],
    "core": [
      -122.9667,
      42.1758,
      -122.6715,
      42.4815
    ],
    "mdb": "3458",
    "vehiclesAtProbe": 0
  },
  {
    "id": "sandy-area-metro",
    "provider": "Sandy Area Metro",
    "country": "US",
    "region": "Sandy",
    "url": "https://passio3.com/sandyor/passioTransit/gtfs/realtime/vehiclePositions",
    "bbox": [
      -122.4279,
      45.2859,
      -121.709,
      45.503
    ],
    "center": [
      -122.2587,
      45.4308
    ],
    "core": [
      -122.3467,
      45.377,
      -122.2387,
      45.4508
    ],
    "mdb": "2747",
    "vehiclesAtProbe": 2
  },
  {
    "id": "santa-cruz-metro-scmtd",
    "provider": "Santa Cruz Metro (SCMTD)",
    "country": "US",
    "region": "Santa Cruz",
    "url": "https://rt.scmetro.org/gtfsrt/vehicles",
    "bbox": [
      -122.1674,
      36.8596,
      -121.7084,
      37.2792
    ],
    "center": [
      -122.0253,
      36.9784
    ],
    "core": [
      -122.1345,
      36.8916,
      -121.74,
      37.1321
    ],
    "license": "https://scmtd.com/en/riders-guide/google-transit/gtfs-dev-data",
    "mdb": "1910",
    "vehiclesAtProbe": 53
  },
  {
    "id": "shore-transit",
    "provider": "Shore Transit",
    "country": "US",
    "region": "Salisbury",
    "url": "https://myride.shoretransit.org/gtfs/GTFS_VehiclePositions.pb",
    "bbox": [
      -75.6153,
      38.0246,
      -75.5153,
      38.1246
    ],
    "center": [
      -75.5653,
      38.0746
    ],
    "core": [
      -75.5853,
      38.0546,
      -75.5453,
      38.0946
    ],
    "mdb": "3443",
    "vehiclesAtProbe": 1
  },
  {
    "id": "south-bend-public-transportation-corpora",
    "provider": "South Bend Public Transportation Corporation",
    "country": "US",
    "region": "South Bend",
    "url": "https://passio3.com/transpo/passioTransit/gtfs/realtime/vehiclePositions",
    "bbox": [
      -87.6231,
      41.5979,
      -86.311,
      41.8842
    ],
    "center": [
      -86.967,
      41.741
    ],
    "core": [
      -87.6231,
      41.5979,
      -86.311,
      41.8842
    ],
    "mdb": "3077",
    "vehiclesAtProbe": 0
  },
  {
    "id": "south-metro-area-regional-transit-smart",
    "provider": "South Metro Area Regional Transit (SMART)",
    "country": "US",
    "region": "Wilsonville",
    "url": "https://mysmartbus.com/gtfs-rt/vehiclepositions",
    "bbox": [
      -123.035,
      44.9378,
      -122.5988,
      45.398
    ],
    "center": [
      -122.6488,
      45.348
    ],
    "core": [
      -122.6688,
      45.328,
      -122.6288,
      45.368
    ],
    "mdb": "2707",
    "vehiclesAtProbe": 1
  },
  {
    "id": "southeastern-pennsylvania-transportation",
    "provider": "Southeastern Pennsylvania Transportation Authority (SEPTA)",
    "country": "US",
    "region": "Philadelphia",
    "url": "https://www3.septa.org/gtfsrt/septarail-pa-us/Vehicle/rtVehiclePosition.pb",
    "bbox": [
      -75.8038,
      39.6706,
      -74.755,
      40.3064
    ],
    "center": [
      -75.1662,
      39.9699
    ],
    "core": [
      -75.3913,
      39.8837,
      -75.1169,
      40.1212
    ],
    "license": "https://www3.septa.org/developer/",
    "mdb": "3060",
    "vehiclesAtProbe": 41
  },
  {
    "id": "southeastern-pennsylvania-transportation-3063",
    "provider": "Southeastern Pennsylvania Transportation Authority (SEPTA)",
    "country": "US",
    "region": "Philadelphia",
    "url": "https://www3.septa.org/gtfsrt/septa-pa-us/Vehicle/rtVehiclePosition.pb",
    "bbox": [
      -75.8347,
      39.8123,
      -74.7542,
      40.334
    ],
    "center": [
      -75.1808,
      40.0017
    ],
    "core": [
      -75.3231,
      39.8945,
      -75.0543,
      40.1214
    ],
    "license": "https://www3.septa.org/developer/",
    "mdb": "3063",
    "vehiclesAtProbe": 721
  },
  {
    "id": "spirit-bus",
    "provider": "Spirit Bus",
    "country": "US",
    "region": "Monterey Park",
    "url": "https://passio3.com/montereyp/passioTransit/gtfs/realtime/vehiclePositions",
    "bbox": [
      -118.1688,
      34.0351,
      -118.1087,
      34.0697
    ],
    "center": [
      -118.1388,
      34.0524
    ],
    "core": [
      -118.1688,
      34.0351,
      -118.1087,
      34.0697
    ],
    "mdb": "2221",
    "vehiclesAtProbe": 0
  },
  {
    "id": "springfield-mass-transit-district-smtd",
    "provider": "Springfield Mass Transit District (SMTD)",
    "country": "US",
    "region": "Springfield",
    "url": "http://ride.smtd.org/gtfsrt/vehicles",
    "bbox": [
      -89.7584,
      39.6678,
      -89.527,
      39.8986
    ],
    "center": [
      -89.6429,
      39.7922
    ],
    "core": [
      -89.6632,
      39.7715,
      -89.6214,
      39.8212
    ],
    "license": "https://www.smtd.org/gtfs-information/",
    "mdb": "1781",
    "vehiclesAtProbe": 7
  },
  {
    "id": "stanislaus-regional-transit-authority-st",
    "provider": "Stanislaus Regional Transit Authority (StanRTA)",
    "country": "US",
    "region": "Modesto",
    "url": "https://max.availtec.com/InfoPoint/GTFS-Realtime.ashx?Type=VehiclePosition",
    "bbox": [
      -121.899,
      37.2571,
      -120.7495,
      37.9549
    ],
    "center": [
      -120.9915,
      37.642
    ],
    "core": [
      -121.0648,
      37.4867,
      -120.8935,
      37.7169
    ],
    "mdb": "1614",
    "vehiclesAtProbe": 24
  },
  {
    "id": "staten-island-railway",
    "provider": "Staten Island Railway",
    "country": "US",
    "region": "New York City",
    "url": "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-si",
    "bbox": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "center": [
      -74.0037,
      40.7079
    ],
    "core": [
      -74.252,
      40.5128,
      -73.7554,
      40.9031
    ],
    "license": "https://api.mta.info/#/DataFeedAgreement",
    "mdb": "1637",
    "vehiclesAtProbe": 0
  },
  {
    "id": "tompkins-consolidated-area-transit-tcat",
    "provider": "Tompkins Consolidated Area Transit (TCAT)",
    "country": "US",
    "region": "Ithaca",
    "url": "https://realtimetcatbus.availtec.com/InfoPoint/GTFS-Realtime.ashx?&Type=VehiclePosition&serverid=0",
    "bbox": [
      -76.6781,
      42.3279,
      -76.2809,
      42.5907
    ],
    "center": [
      -76.4853,
      42.4398
    ],
    "core": [
      -76.5217,
      42.4186,
      -76.4612,
      42.4743
    ],
    "mdb": "1649",
    "vehiclesAtProbe": 7
  },
  {
    "id": "transit-authority-of-river-city-tarc",
    "provider": "Transit Authority of River City (TARC)",
    "country": "US",
    "region": "Louisville",
    "url": "https://tarc.rideralerts.com/InfoPoint/GTFS-realtime.ashx?Type=VehiclePosition",
    "bbox": [
      -85.9043,
      38.0564,
      -85.503,
      38.3833
    ],
    "center": [
      -85.7971,
      38.2459
    ],
    "core": [
      -85.855,
      38.1354,
      -85.7384,
      38.2945
    ],
    "mdb": "2665",
    "vehiclesAtProbe": 7
  },
  {
    "id": "university-of-minnesota",
    "provider": "University of Minnesota",
    "country": "US",
    "region": "Minneapolis",
    "url": "https://data.peaktransit.com/gtfsrt/88/VehiclePosition.pb",
    "bbox": [
      -94.1574,
      44.7255,
      -92.8059,
      45.5601
    ],
    "center": [
      -93.2307,
      44.9778
    ],
    "core": [
      -93.2656,
      44.9506,
      -93.2028,
      45.0022
    ],
    "mdb": "3528",
    "vehiclesAtProbe": 4
  },
  {
    "id": "valley-metro",
    "provider": "Valley Metro",
    "country": "US",
    "region": "Phoenix",
    "url": "https://app.mecatran.com/utw/ws/gtfsfeed/vehicles/valleymetro?apiKey=4f22263f69671d7f49726c3011333e527368211f",
    "bbox": [
      -112.8722,
      32.3827,
      -111.638,
      33.7433
    ],
    "center": [
      -112.0566,
      33.447
    ],
    "core": [
      -112.2486,
      33.3295,
      -111.7682,
      33.6601
    ],
    "license": "https://phoenixopendata.com/dataset/valley-metro-bus-schedule/resource/28ccc0a5-49c8-495c-b91f-193de5ce2cb7",
    "mdb": "1722",
    "vehiclesAtProbe": 539
  },
  {
    "id": "valley-regional-transit",
    "provider": "Valley Regional Transit",
    "country": "US",
    "region": "Boise",
    "url": "https://s3.amazonaws.com/etatransit.gtfs/valleyregionaltransit.etaspot.net/position_updates.pb",
    "bbox": [
      -116.286,
      43.5904,
      -116.186,
      43.6904
    ],
    "center": [
      -116.236,
      43.6404
    ],
    "core": [
      -116.256,
      43.6204,
      -116.216,
      43.6604
    ],
    "license": "https://www.valleyregionaltransit.org/about-us/resources/",
    "mdb": "2454",
    "vehiclesAtProbe": 1
  },
  {
    "id": "via-mobility",
    "provider": "Via Mobility",
    "country": "US",
    "region": "Colorado",
    "url": "https://passio3.com/viaboulder/passioTransit/gtfs/realtime/vehiclePositions",
    "bbox": [
      -105.5948,
      39.9304,
      -105.1694,
      40.0701
    ],
    "center": [
      -105.2537,
      40.0201
    ],
    "core": [
      -105.283,
      39.9971,
      -105.2337,
      40.0401
    ],
    "mdb": "2398",
    "vehiclesAtProbe": 2
  },
  {
    "id": "votran",
    "provider": "Votran",
    "country": "US",
    "region": "Daytona Beach",
    "url": "http://realtimevotran.availtec.com/infopoint/GTFS-Realtime.ashx?&Type=VehiclePosition",
    "bbox": [
      -81.5068,
      28.856,
      -80.8474,
      29.384
    ],
    "center": [
      -81.1771,
      29.12
    ],
    "core": [
      -81.5068,
      28.856,
      -80.8474,
      29.384
    ],
    "license": "http://www.votran.org/about-us/data.stml",
    "mdb": "1740",
    "vehiclesAtProbe": 0
  },
  {
    "id": "autolinee-federico",
    "provider": "Autolinee Federico",
    "country": "",
    "region": "",
    "url": "https://autolineefederico.selfip.com:8080/gtfs-rt/vehicle_positions.pb",
    "bbox": [
      15.5873,
      37.882,
      16.6617,
      38.8901
    ],
    "center": [
      16.2616,
      38.2315
    ],
    "core": [
      15.6178,
      37.9275,
      16.5908,
      38.847
    ],
    "mdb": "3118",
    "vehiclesAtProbe": 23
  },
  {
    "id": "basmy-alor-setar",
    "provider": "BAS.MY Alor Setar",
    "country": "",
    "region": "",
    "url": "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-alor-setar",
    "bbox": [
      100.297,
      5.5623,
      100.6599,
      6.3089
    ],
    "center": [
      100.3767,
      6.1165
    ],
    "core": [
      100.3339,
      5.619,
      100.5538,
      6.2581
    ],
    "mdb": "3168",
    "vehiclesAtProbe": 43
  },
  {
    "id": "basmy-johor-bahru",
    "provider": "BAS.MY Johor Bahru",
    "country": "",
    "region": "",
    "url": "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-johor",
    "bbox": [
      103.5265,
      1.3286,
      103.9511,
      1.7604
    ],
    "center": [
      103.7529,
      1.495
    ],
    "core": [
      103.5715,
      1.4358,
      103.9058,
      1.6739
    ],
    "mdb": "3174",
    "vehiclesAtProbe": 78
  },
  {
    "id": "basmy-kangar",
    "provider": "BAS.MY Kangar",
    "country": "",
    "region": "",
    "url": "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-kangar",
    "bbox": [
      100.0819,
      6.0777,
      100.4931,
      6.7143
    ],
    "center": [
      100.3185,
      6.4355
    ],
    "core": [
      100.1272,
      6.1289,
      100.4463,
      6.6842
    ],
    "mdb": "3167",
    "vehiclesAtProbe": 22
  },
  {
    "id": "basmy-kota-bharu",
    "provider": "BAS.MY Kota Bharu",
    "country": "",
    "region": "",
    "url": "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-kota-bharu",
    "bbox": [
      101.7971,
      4.7766,
      102.6489,
      6.2829
    ],
    "center": [
      102.2396,
      6.0791
    ],
    "core": [
      101.9556,
      5.6736,
      102.4363,
      6.2033
    ],
    "mdb": "3169",
    "vehiclesAtProbe": 61
  },
  {
    "id": "basmy-kuala-terengganu",
    "provider": "BAS.MY Kuala Terengganu",
    "country": "",
    "region": "",
    "url": "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-kuala-terengganu",
    "bbox": [
      102.8987,
      5.0207,
      103.2557,
      5.5829
    ],
    "center": [
      103.1368,
      5.3317
    ],
    "core": [
      102.991,
      5.0507,
      103.2257,
      5.4683
    ],
    "mdb": "3170",
    "vehiclesAtProbe": 26
  },
  {
    "id": "basmy-kuching",
    "provider": "BAS.MY Kuching",
    "country": "",
    "region": "",
    "url": "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-kuching",
    "bbox": [
      110.1048,
      1.116,
      110.6167,
      1.698
    ],
    "center": [
      110.3423,
      1.5462
    ],
    "core": [
      110.1998,
      1.2906,
      110.5015,
      1.6372
    ],
    "mdb": "3152",
    "vehiclesAtProbe": 45
  },
  {
    "id": "basmy-melaka",
    "provider": "BAS.MY Melaka",
    "country": "",
    "region": "",
    "url": "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-melaka",
    "bbox": [
      102.0683,
      2.1417,
      102.3902,
      2.4321
    ],
    "center": [
      102.2418,
      2.243
    ],
    "core": [
      102.1811,
      2.1796,
      102.3249,
      2.4018
    ],
    "mdb": "3173",
    "vehiclesAtProbe": 24
  },
  {
    "id": "basmy-seremban-a",
    "provider": "BAS.MY Seremban A",
    "country": "",
    "region": "",
    "url": "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-seremban-a",
    "bbox": [
      101.6375,
      2.5388,
      102.1429,
      2.9025
    ],
    "center": [
      101.8141,
      2.8043
    ],
    "core": [
      101.6675,
      2.5688,
      102.1129,
      2.8725
    ],
    "mdb": "3171",
    "vehiclesAtProbe": 8
  },
  {
    "id": "basmy-seremban-b",
    "provider": "BAS.MY Seremban B",
    "country": "",
    "region": "",
    "url": "https://api.data.gov.my/gtfs-realtime/vehicle-position/mybas-seremban-b",
    "bbox": [
      101.7464,
      2.4737,
      102.455,
      2.962
    ],
    "center": [
      101.9824,
      2.7153
    ],
    "core": [
      101.7764,
      2.5037,
      102.425,
      2.932
    ],
    "mdb": "3172",
    "vehiclesAtProbe": 15
  },
  {
    "id": "butte-regional-transit-b-line",
    "provider": "Butte Regional Transit (B-Line)",
    "country": "",
    "region": "",
    "url": "https://planmyride.blinetransit.com/gtfsrealtime/GTFS_VehiclePositions.pb",
    "bbox": [
      -121.9326,
      39.6788,
      -121.7795,
      39.797
    ],
    "center": [
      -121.8424,
      39.7456
    ],
    "core": [
      -121.9026,
      39.7088,
      -121.8095,
      39.767
    ],
    "mdb": "2428",
    "vehiclesAtProbe": 4
  },
  {
    "id": "champaign-urbana-mass-transit-district",
    "provider": "Champaign-Urbana Mass Transit District",
    "country": "",
    "region": "",
    "url": "https://gtfs-rt.mtd.org/vehicle-positions",
    "bbox": [
      -88.3307,
      40.019,
      -88.1223,
      40.1984
    ],
    "center": [
      -88.224,
      40.111
    ],
    "core": [
      -88.2965,
      40.0549,
      -88.1678,
      40.1517
    ],
    "mdb": "2889",
    "vehiclesAtProbe": 26
  },
  {
    "id": "guelph-transit",
    "provider": "Guelph Transit",
    "country": "",
    "region": "",
    "url": "https://glphprdtmgtfs.glphtrpcloud.com/tmgtfsrealtimewebservice/vehicle/vehiclepositions.pb",
    "bbox": [
      -80.3433,
      43.4414,
      -80.1445,
      43.6237
    ],
    "center": [
      -80.2408,
      43.5375
    ],
    "core": [
      -80.3097,
      43.479,
      -80.1789,
      43.5873
    ],
    "license": "https://explore.guelph.ca/pages/terms-of-use",
    "mdb": "2592",
    "vehiclesAtProbe": 30
  },
  {
    "id": "motionbuscard",
    "provider": "motionbuscard",
    "country": "",
    "region": "",
    "url": "http://20.19.98.194:8328/Api/api/gtfs-realtime",
    "bbox": [
      32.3107,
      34.601,
      34.1179,
      35.2226
    ],
    "center": [
      33.3591,
      35.0079
    ],
    "core": [
      32.4076,
      34.6531,
      34.0764,
      35.1898
    ],
    "mdb": "1920",
    "vehiclesAtProbe": 136
  },
  {
    "id": "tango-bus",
    "provider": "Tango Bus",
    "country": "",
    "region": "",
    "url": "http://185.220.72.38:8085/ProfilGtfsRt2_0RSProducer-TANGO/VehiclePosition.pb",
    "bbox": [
      4.2227,
      43.652,
      4.5629,
      44.0104
    ],
    "center": [
      4.3655,
      43.8322
    ],
    "core": [
      4.3037,
      43.7131,
      4.5329,
      43.9804
    ],
    "license": "https://www.data.gouv.fr/pages/legal/licences/etalab-2.0",
    "mdb": "3466",
    "vehiclesAtProbe": 20
  },
  {
    "id": "tukebusz",
    "provider": "Tükebusz",
    "country": "",
    "region": "",
    "url": "http://menobusz.tukebusz.hu:30080/mobilapp/GTFS/RTx_positions.x",
    "bbox": [
      18.138,
      45.9879,
      18.3902,
      46.17
    ],
    "center": [
      18.2249,
      46.0718
    ],
    "core": [
      18.1685,
      46.0184,
      18.2992,
      46.115
    ],
    "mdb": "3120",
    "vehiclesAtProbe": 28
  },
  {
    "id": "university-of-georgia",
    "provider": "University of Georgia",
    "country": "",
    "region": "",
    "url": "https://passio3.com/uga/passioTransit/gtfs/realtime/vehiclePositions",
    "bbox": [
      -83.4295,
      33.8797,
      -83.3231,
      34.0051
    ],
    "center": [
      -83.3759,
      33.9529
    ],
    "core": [
      -83.3995,
      33.9097,
      -83.3531,
      33.9751
    ],
    "mdb": "2619",
    "vehiclesAtProbe": 3
  }
];
