import { polygon as polygonHelper } from '@turf/helpers'
const coords = [
  [
    [1, -1],
    [20, -1],
    [20, 21],
    [1, 21],
    [1, -1],
  ],
]
export default function addFillLineLayer(map) {
  const polygon = polygonHelper(coords)
  map.addLayer({
    id: 'fill-line-layer',
    type: 'line',
    source: {
      type: 'geojson',
      data: polygon,
    },
    layout: {
      'line-join': 'round',
    },
    paint: {
      'line-color': 'red',
      'line-width': 2,
      'line-gap-width': 4,
      'line-dasharray': [2, 2],
    },
  })
}
