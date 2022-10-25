<script setup>
import { STYLE } from '@/utils/constant'
import baseMap from '../base-map.vue'

const mapOptions = {
  style: STYLE.SATELLITE,
  zoom: 1.2,
  projection: 'globe',
  interactive: false,
}

function handleMapLoaded(map) {
  map.setFog({})
}
</script>

<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>
