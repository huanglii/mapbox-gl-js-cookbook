export default function addLinePointLayer(map) {
  let roadFilter = [
    'all',
    ['==', '$type', 'LineString'],
    [
      'all',
      ['!=', 'type', 'service:parking_aisle'],
      ['!in', 'structure', 'bridge', 'tunnel'],
      [
        'in',
        'class',
        'link',
        'motorway',
        'motorway_link',
        'primary',
        'secondary',
        'service',
        'street',
        'street_limited',
        'tertiary',
        'track',
        'trunk',
      ],
    ],
  ]
  map.addLayer({
    id: 'line-point-layer',
    type: 'circle',
    source: 'composite',
    'source-layer': 'road',
    filter: roadFilter,
    paint: {
      'circle-radius': 24,
      'circle-color': '#3eaf7c',
      'circle-blur': 2,
    },
  })
  map.addLayer({
    id: 'line-point-layer-1',
    type: 'circle',
    source: 'composite',
    'source-layer': 'road',
    filter: roadFilter,
    paint: {
      'circle-radius': 2.5,
      'circle-color': '#FFF',
      'circle-opacity': 0.5,
      'circle-stroke-width': 1,
      'circle-stroke-color': [
        'match',
        ['get', 'class'],
        'street',
        '#FFD273',
        'track',
        '#E86D68',
        'motorway',
        '#A880FF',
        'service',
        '#68E0E8',
        '#9BFF69',
      ],
      'circle-stroke-opacity': 0.5,
    },
  })
}
