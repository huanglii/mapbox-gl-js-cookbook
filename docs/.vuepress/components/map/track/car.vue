<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { withBase } from '@vuepress/client'
import { STYLE } from '../../../utils/constant'
import addTrackCarLayer from '../../../snippet/track/car'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.NAVIGATION,
  center: [106.573193, 29.558285],
  zoom: 13.5,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.loadImage(withBase('/assets/images/arrow.png'), (error, image) => {
    if (error) throw error
    if (image && !map.hasImage('arrow')) map.addImage('arrow', image)
    addTrackCarLayer(map)
  })
}
</script>
