<template>
  <base-map :map-clickable="false" :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import { withBase } from '@vuepress/client'
import { MapboxLayer } from '@deck.gl/mapbox'
import { HexagonLayer } from '@deck.gl/aggregation-layers'
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'

const mapOptions = {
  style: STYLE.DARK,
  center: [-122.441107, 37.755579],
  zoom: 11.4,
  minZoom: 8,
  pitch: 50,
  antialias: true,
}
const handleMapLoaded = (map) => {
  /**
   * Data format:
   * [
   *   {COORDINATES: [-122.42177834, 37.78346622]},
   *   ...
   * ]
   */
  const layer = new MapboxLayer({
    id: 'hexagon-layer',
    type: HexagonLayer,
    data: withBase('/data/sf-bike-parking.json'),
    pickable: true,
    extruded: true,
    radius: 100,
    elevationScale: 5,
    colorRange: [
      [1, 152, 189],
      [73, 227, 206],
      [216, 254, 181],
      [254, 237, 177],
      [254, 173, 84],
      [209, 55, 78],
    ],
    getPosition: (d) => d.COORDINATES,
  })
  map.addLayer(layer)
}
</script>
