import { polygon as polygonHelper } from '@turf/helpers'
const coords1 = [
  [
    [1, -1],
    [20, -1],
    [20, 21],
    [1, 21],
    [1, -1]
  ]
]
const coords2 = [
  [
    [30, -1],
    [49, -1],
    [49, 21],
    [30, 21],
    [30, -1]
  ]
]
export default function addFillLayer (map) {
  const polygon1 = polygonHelper(coords1)
  const polygon2 = polygonHelper(coords2)
  map.addLayer({
    'id': 'polygon-layer-1',
    'type': 'fill',
    'source': {
      'type': 'geojson',
      'data': polygon1
    },
    'paint': {
      'fill-color': '#088',
      'fill-outline-color': '#f00',
      'fill-opacity': 0.8
    }
  })
  map.addLayer({
    'id': 'polygon-layer-2',
    'type': 'fill',
    'source': {
      'type': 'geojson',
      'data': polygon2
    },
    'paint': {
      'fill-color': '#088',
      'fill-opacity': 0.8,
      'fill-pattern': 'square-stroked-15'
    }
  })
  map.addLayer({
    'id': 'line-layer-2',
    'type': 'line',
    'source': {
      'type': 'geojson',
      'data': polygon2
    },
    'paint': {
      'line-color': '#f00'
    }
  })
}
