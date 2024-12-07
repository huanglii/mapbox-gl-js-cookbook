<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { withBase } from 'vuepress/client'
import { MapboxLayer } from '@deck.gl/mapbox'
import { ArcLayer } from '@deck.gl/layers'
import { STYLE } from '../../../utils/constant'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.GRAY,
  center: [-122.19, 37.75],
  zoom: 9.16,
  pitch: 30,
  antialias: true,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  /**
   * Data format:
   * [
   *   {
   *     inbound: 72633,
   *     outbound: 74735,
   *     from: {
   *       name: '19th St. Oakland (19TH)',
   *       coordinates: [-122.269029, 37.80787]
   *     },
   *     to: {
   *       name: '12th St. Oakland City Center (12TH)',
   *       coordinates: [-122.271604, 37.803664]
   *   },
   *   ...
   * ]
   */
  const layer = new MapboxLayer({
    id: 'arc-layer',
    type: ArcLayer,
    data: withBase('/data/bart-segments.json'),
    getWidth: 1,
    pickable: true,
    getSourceColor: (d) => [Math.sqrt(d.inbound), 140, 0],
    getSourcePosition: (d) => d.from.coordinates,
    getTargetColor: (d) => [Math.sqrt(d.outbound), 140, 0],
    getTargetPosition: (d) => d.to.coordinates,
  })
  map.addLayer(layer)
}
</script>
