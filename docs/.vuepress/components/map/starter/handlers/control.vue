<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import baseMap from '../../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [104.294538, 35.860092],
  zoom: 2.4,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  // 定位
  map.addControl(new mapboxgl.GeolocateControl())
  // 比例尺
  map.addControl(new mapboxgl.ScaleControl(), 'bottom-right')
}
</script>
