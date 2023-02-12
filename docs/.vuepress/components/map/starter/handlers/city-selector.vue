<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../../base-map.vue'
import CitySelectorControl from 'city-selector-control'
import 'city-selector-control/dist/style.css'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [104.2945384995, 35.8600924965],
  zoom: 2.4,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addControl(new CitySelectorControl(), 'top-right')
}
</script>
