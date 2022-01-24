import { MapboxLayer } from '@deck.gl/mapbox'
import { HexagonLayer } from '@deck.gl/aggregation-layers'
import data from './data/sf-bike-parking.json'

export default function addLayer(map) {
  const colorRange = [
    [1, 152, 189],
    [73, 227, 206],
    [216, 254, 181],
    [254, 237, 177],
    [254, 173, 84],
    [209, 55, 78],
  ]
  const layer = new MapboxLayer({
    type: HexagonLayer,
    id: 'hexagon-layer',
    data,
    pickable: true,
    extruded: true,
    radius: 100,
    elevationScale: 5,
    colorRange,
    getPosition: (d) => d.COORDINATES,
  })
  map.addLayer(layer)
}
