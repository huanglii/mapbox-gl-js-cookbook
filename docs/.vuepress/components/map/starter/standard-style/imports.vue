<template>
  <base-map :map-options="mapOptions" />
</template>

<script setup lang="ts">
import { withBase } from 'vuepress/client';
import type { MapOptions } from 'mapbox-gl';
import BaseMap from '../../base-map.vue';

const mapOptions: Omit<MapOptions, 'container'> = {
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
</script>
