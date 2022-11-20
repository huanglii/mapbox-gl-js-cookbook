<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import { withBase } from '@vuepress/client'
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'

const mapOptions = {
  style: STYLE.GRAY,
  center: [107.744809, 30.180706],
  zoom: 6,
  pitch: 60,
  antialias: true,
}
const handleMapLoaded = (map) => {
  map.addLayer({
    id: 'fill-extrusion-layer',
    type: 'fill-extrusion',
    source: {
      type: 'geojson',
      data: withBase('/data/cq.geojson'),
    },
    minzoom: 5,
    paint: {
      'fill-extrusion-color': [
        'interpolate-hcl',
        ['linear'],
        ['get', 'area'],
        0, '#6BD089',
        5000, '#DC6C6C',
      ],
      'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['zoom'],
        5, 0,
        8, ['*', ['get', 'area'], 10],
      ],
      'fill-extrusion-base': 0,
      'fill-extrusion-opacity': 0.6,
    },
  })
}
</script>
