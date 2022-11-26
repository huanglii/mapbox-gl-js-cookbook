<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <div class="legend custom">
      <div class="legend-item" @click="setFilter()">
        <span class="square"></span>
        <span class="text">全部</span>
      </div>
      <div v-for="(item, index) in legends" :key="index" class="legend-item" @click="setFilter(item[0])">
        <span class="square" :style="{ backgroundColor: item[1] }"></span>
        <span class="text">{{ item[0] }}</span>
      </div>
    </div>
  </base-map>
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { withBase } from '@vuepress/client'
import { STYLE } from '../../../utils/constant'

let map: mapboxgl.Map
const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.SATELLITE,
  center: [124.879014, 47.816],
  zoom: 15.2,
  minZoom: 15,
}
const legends: [number, string][] = [
  [1, '#FFD273'],
  [2, '#E86D68'],
  [3, '#A880FF'],
  [4, '#68E0E8'],
  [5, '#9BFF69'],
]

const handleMapLoaded = (e) => {
  map = e
  map.addSource('land', {
    type: 'geojson',
    data: withBase('/data/land.geojson'),
  })
  map.addLayer({
    id: 'unique-layer',
    type: 'fill',
    source: 'land',
    paint: {
      'fill-color': [
        'match',
        ['get', 'type'],
        1,
        '#FFD273',
        2,
        '#E86D68',
        3,
        '#A880FF',
        4,
        '#68E0E8',
        5,
        '#9BFF69',
        '#fff',
      ],
      // 'fill-color': {
      //   property: 'type',
      //   type: 'categorical',
      //   stops: [
      //     [1, '#FFD273'],
      //     [2, '#E86D68'],
      //     [3, '#A880FF'],
      //     [4, '#68E0E8'],
      //     [5, '#9BFF69'],
      //   ],
      // },
      'fill-opacity': 0.5,
    },
  })
  map.addLayer({
    id: 'unique-outline-layer',
    type: 'line',
    source: 'land',
    paint: {
      'line-color': '#FFF',
      'line-width': 1.5,
    },
  })
}

const setFilter = (value?: number) => {
  const filter = value ? [value] : [1, 2, 3, 4, 5]
  map.setFilter('unique-layer', ['in', 'type', ...filter])
}
</script>
