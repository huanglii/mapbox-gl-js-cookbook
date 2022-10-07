<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import mapboxgl from 'mapbox-gl'
import baseMap from '../../base-map.vue'

const mapOptions = {
  center: [104.294538, 35.860092],
  zoom: 2.4,
}

const handleMapLoaded = (map) => {
  // console.log();
  // // 定位
  map.addControl(new mapboxgl.GeolocateControl())
  // // 全屏
  // map.addControl(new mapboxgl.FullscreenControl())
  map.addControl(new mapboxgl.ScaleControl(), 'bottom-right')
}
</script>
