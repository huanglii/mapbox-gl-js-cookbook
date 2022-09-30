<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import CitySelectorControl from 'city-selector-control'
import 'city-selector-control/dist/style.css'
import baseMap from '../../base-map.vue'

const mapOptions = {
  center: [104.2945384995, 35.8600924965],
  zoom: 2.4,
}

const handleMapLoaded = (map) => {
  map.addControl(new CitySelectorControl(), 'top-right')
}
</script>
