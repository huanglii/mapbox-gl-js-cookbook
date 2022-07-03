<script setup>
import baseMap from './base-map.vue'
import { STYLE } from '@/utils/constant'

const mapOptions = {
  style: STYLE.SATELLITE,
  zoom: 1.2,
  projection: 'globe',
}

function handleMapLoaded(map) {
  map.setFog({})
}
</script>

<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

