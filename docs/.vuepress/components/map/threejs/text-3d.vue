<template>
  <base-map :map-options="mapOptions" :map-clickable="false" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { withBase } from '@vuepress/client'
import addText3DLayer from '../../../snippet/threejs/text-3d'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [-87.61694, 41.86625],
  zoom: 17.5,
  pitch: 30,
  bearing: 20,
  antialias: true,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.removeLayer('poi-label')
  addText3DLayer(map, withBase('/fonts/PangMenZhengDao_Regular.json'))
}
</script>
