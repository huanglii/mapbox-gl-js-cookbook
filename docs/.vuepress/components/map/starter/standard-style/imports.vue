<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import { withBase } from '@vuepress/client'
import BaseMap from '../../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [107.744809, 30.180706],
  zoom: 6,
  style: {
    version: 8,
    imports: [
      {
        id: "basemap",
        url: withBase('/mapbox/standard.json'),
      }
    ],
    sources: {
      'chongqing': {
        type: 'geojson',
        data: withBase('/data/cq.geojson'),
      }
    },
    layers: [
      {
        id: 'polygon-layer',
        type: 'fill',
        source: 'chongqing',
        slot: 'bottom',
        paint: {
          'fill-color': '#FFD273',
          'fill-opacity': 0.8,
        },
      }
    ]
  }
}

function handleMapLoaded(map: mapboxgl.Map) {

}
</script>
