<template>
  <base-map :map-clickable="false" :map-options="mapOptions" @load="handleMapLoaded">
    <div id="path-layer-tooltip" class="tooltip"></div>
  </base-map>
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { withBase } from 'vuepress/client'
import { MapboxLayer } from '@deck.gl/mapbox'
import { PathLayer } from '@deck.gl/layers'
import { STYLE } from '../../../utils/constant'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.GRAY,
  center: [-122.275307, 37.802267],
  zoom: 9,
  minZoom: 8,
  pitch: 45,
  bearing: 30,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
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
    data: withBase('/data/bart-lines.json'),
    pickable: true,
    jointRounded: true,
    capRounded: true,
    billboard: true,
    widthScale: 10,
    widthMinPixels: 2,
    getPath: (d) => d.path,
    getColor: (d) => JSON.parse(d.color),
    getWidth: () => 5,
    onHover: (info) => {
      const $tooltip = document.getElementById('path-layer-tooltip')!
      if (info.object) {
        $tooltip.innerHTML = `名称：${info.object.name}`
        $tooltip.style.display = 'block'
        $tooltip.style.left = info.x + 'px'
        $tooltip.style.top = info.y + 'px'
      } else {
        $tooltip.style.display = 'none'
      }
    },
  })
  map.addLayer(layer)
}
</script>

<style lang="scss">
.tooltip {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5em 0.75em;
  background-color: #09101d;
  color: #fff;
  border-radius: 10em;
  white-space: nowrap;
  font-size: 10px;
  pointer-events: none;
}
</style>
