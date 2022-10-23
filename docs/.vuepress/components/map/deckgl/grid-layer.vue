<template>
  <base-map :map-clickable="false" :map-options="mapOptions" @load="handleMapLoaded">
    <div id="grid-layer-tooltip" class="tooltip"></div>
  </base-map>
</template>

<script setup>
import { withBase } from '@vuepress/client'
import { MapboxLayer } from '@deck.gl/mapbox'
import { GridLayer } from '@deck.gl/aggregation-layers'
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'

const mapOptions = {
  style: STYLE.DARK,
  center: [-122.441107, 37.755579],
  zoom: 11.4,
  minZoom: 8,
  pitch: 50,
  antialias: true,
}
const handleMapLoaded = (map) => {
  const layer = new MapboxLayer({
    id: 'grid-layer',
    type: GridLayer,
    data: withBase('/data/sf-bike-parking.json'),
    pickable: true,
    extruded: true,
    cellSize: 200,
    elevationScale: 4,
    getPosition: (d) => d.COORDINATES,
    onHover: (info) => {
      const $tooltip = document.getElementById('grid-layer-tooltip')
      if (info.object) {
        $tooltip.innerHTML = `${info.object.position.join(', ')}\nCount: ${info.object.count}`
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
