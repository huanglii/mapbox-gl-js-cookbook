import { MapboxLayer } from '@deck.gl/mapbox'
import { PathLayer } from '@deck.gl/layers'

import data from './data/bart-lines.json'

export default function addLayer (map) {
  /**
   * Data format:
   * [
   *   {
   *     path: [[-122.4, 37.7], [-122.5, 37.8], [-122.6, 37.85]],
   *     name: 'Richmond - Millbrae',
   *     color: '[255, 0, 0]'
   *   },
   *   ...
   * ]
   */
  const layer = new MapboxLayer({
    id: 'path-layer',
    type: PathLayer,
    data,
    pickable: true,
    rounded: true,
    billboard: true,
    widthScale: 10,
    widthMinPixels: 2,
    getPath: d => d.path,
    getColor: d => JSON.parse(d.color),
    getWidth: d => 5,
    onHover: (info, e) => {
      const $tooltip = document.getElementById('pathlayer-tooltip')
      if (info.object) {
        $tooltip.innerHTML = `名称：${info.object.name}`
        $tooltip.style.display = 'block'
        $tooltip.style.left = info.x + 'px'
        $tooltip.style.top = info.y + 'px'
      } else {
        $tooltip.style.display = 'none'
      }
      /* Update tooltip
         http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
      */
    }
  })
  map.addLayer(layer)
}
