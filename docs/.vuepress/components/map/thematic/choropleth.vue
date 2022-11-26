<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <div class="legend">
      <div class="legend-item" @click="setFilter('0-100')">
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
  style: STYLE.GRAY,
  center: [107.744809, 30.180706],
  zoom: 6,
  minZoom: 4,
}
const legends: [string, string][] = [
  ['0-20', '#FFD273'],
  ['20-40', '#E86D68'],
  ['40-60', '#A880FF'],
  ['60-80', '#68E0E8'],
  ['80-100', '#9BFF69'],
]

const handleMapLoaded = (e: mapboxgl.Map) => {
  map = e
  map.addSource('choropleth-source', {
    type: 'geojson',
    data: withBase('/data/cq.geojson'),
  })
  map.addLayer(
    {
      id: 'choropleth-layer',
      type: 'fill',
      source: 'choropleth-source',
      paint: {
        'fill-color': [
          'case',
          ['<', ['get', 'value'], 20],
          '#FFD273',
          ['<', ['get', 'value'], 40],
          '#E86D68',
          ['<', ['get', 'value'], 60],
          '#A880FF',
          ['<', ['get', 'value'], 80],
          '#68E0E8',
          ['<=', ['get', 'value'], 100],
          '#9BFF69',
          '#000',
        ],
        'fill-opacity': 0.85,
      },
    },
    'poi-label'
  )
}

const setFilter = (value: string) => {
  const min = Number(value.split('-')[0])
  const max = Number(value.split('-')[1])
  map.setFilter('choropleth-layer', ['all', ['>=', ['get', 'value'], min], ['<', ['get', 'value'], max]])
}
</script>
