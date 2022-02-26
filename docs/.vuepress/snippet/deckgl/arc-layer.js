import { MapboxLayer } from '@deck.gl/mapbox'
import { ArcLayer } from '@deck.gl/layers'
import data from './data/bart-segments.json'

export default function addLayer(map) {
  /**
   * Data format:
   * [
   *   {
   *     inbound: 72633,
   *     outbound: 74735,
   *     from: {
   *       name: '19th St. Oakland (19TH)',
   *       coordinates: [-122.269029, 37.80787]
   *     },
   *     to: {
   *       name: '12th St. Oakland City Center (12TH)',
   *       coordinates: [-122.271604, 37.803664]
   *   },
   *   ...
   * ]
   */
  const layer = new MapboxLayer({
    id: 'arc-layer',
    type: ArcLayer,
    data,
    getWidth: 5,
    pickable: true,
    getSourceColor: (d) => [Math.sqrt(d.inbound), 140, 0],
    getSourcePosition: (d) => d.from.coordinates,
    getTargetColor: (d) => [Math.sqrt(d.outbound), 140, 0],
    getTargetPosition: (d) => d.to.coordinates,
  })
  map.addLayer(layer)
}
