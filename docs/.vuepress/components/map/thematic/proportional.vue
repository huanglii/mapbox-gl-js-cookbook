<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { withBase } from '@vuepress/client'
import { STYLE } from '../../../utils/constant'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.GRAY,
  center: [107.744809, 30.180706],
  zoom: 6,
  minZoom: 4,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  // const MAX_R = 15 // 最大半径
  // const MIN_R = 5 // 最小半径
  // const MAX_V = 10 // 字段最大值
  // const MIN_V = 0 // 字段最小值
  map.addSource('proportion-source', {
    type: 'geojson',
    data: withBase('/data/point.geojson'),
  })
  map.addLayer({
    id: 'proportion-layer',
    type: 'circle',
    source: 'proportion-source',
    paint: {
      // 'circle-radius': (MAX_R - MIN_R) / (MAX_V - MIN_V) * (V - MIN_V) + MIN_R,
      // 'circle-radius': [
      //   '+',
      //   ['*',
      //     [
      //       '/',
      //       ['-', MAX_R, MIN_R],
      //       ['-', MAX_V, MIN_V]
      //     ],
      //     ['-', ['get', 'v1'], MIN_V]
      //   ],
      //   MIN_R
      // ],
      'circle-radius': ['interpolate', ['linear'], ['get', 'v1'], 0, 5, 10, 15],
      'circle-color': [
        'interpolate',
        ['linear'],
        ['get', 'v1'],
        0,
        '#FFD273',
        2.5,
        '#E86D68',
        5,
        '#A880FF',
        7.5,
        '#68E0E8',
        10,
        '#9BFF69',
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff',
    },
  })
}
</script>
