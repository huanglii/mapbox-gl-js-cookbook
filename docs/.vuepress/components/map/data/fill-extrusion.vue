<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import { withBase } from 'vuepress/client';
import { STYLE } from '../../../utils/constant';
import BaseMap from '../base-map.vue';

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.GRAY,
  center: [107.744809, 30.180706],
  zoom: 6,
  pitch: 52,
  antialias: true,
}
const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addLayer({
    id: 'fill-extrusion-layer',
    type: 'fill-extrusion',
    source: {
      type: 'geojson',
      data: withBase('/data/cq.geojson'),
    },
    minzoom: 5,
    paint: {
      'fill-extrusion-color': ['interpolate-hcl', ['linear'], ['get', 'area'], 0, '#6BD089', 5000, '#DC6C6C'],
      'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 5, 0, 8, ['*', ['get', 'area'], 30]],
      'fill-extrusion-base': 0,
      'fill-extrusion-opacity': 0.6,
    },
  })
  map.addLayer({
    id: 'point-layer',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: withBase('/data/point.geojson'),
    },
    minzoom: 5,
    layout: {
      'text-field': '{son}',
      // mapbox-gl-js >= 3.0.0
      'symbol-z-elevate': true,
    },
  })
}
</script>
