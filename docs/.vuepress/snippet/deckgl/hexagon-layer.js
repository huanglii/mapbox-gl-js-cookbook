import { MapboxLayer } from '@deck.gl/mapbox'
import { HexagonLayer } from '@deck.gl/aggregation-layers'
import data from './data/sf-bike-parking.json'

export default function addLayer(map) {
  /**
   * Data format:
   * [
   *   {COORDINATES: [-122.42177834, 37.78346622]},
   *   ...
   * ]
   */
  const layer = new MapboxLayer({
    id: 'hexagon-layer',
    type: HexagonLayer,
    data,
    pickable: true,
    extruded: true,
    radius: 100,
    elevationScale: 5,
    colorRange: [
      [1, 152, 189],
      [73, 227, 206],
      [216, 254, 181],
      [254, 237, 177],
      [254, 173, 84],
      [209, 55, 78],
    ],
    getPosition: (d) => d.COORDINATES,
  })
  map.addLayer(layer)
}
