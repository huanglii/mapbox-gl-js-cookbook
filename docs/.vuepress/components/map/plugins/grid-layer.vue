<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import { withBase } from '@vuepress/client'
import GridLayer from '@naivemap/mapbox-gl-grid-layer'
import BaseMap from '../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [107.744809, 30.180706],
  zoom: 6,
}
const handleMapLoaded = async (map: mapboxgl.Map) => {
  fetch(withBase('/data/dem.json')).then(res => res.json()).then((data) => {
    const layer = new GridLayer('grid-layer', {
      data: {
        data: data,
        metadata: {
          xll: 105.289583,
          yll: 28.154306,
          cellsize: 0.025,
          ncols: 196,
          nrows: 162,
          lltype: 'corner'
        },
      },
      colorOption: {
        type: 'stretched',
        colors: ['#30123B', '#4686FB', '#1BE5B5', '#A4FC3C', '#FBB938', '#E3440A', '#7A0403'],
        values: [0, 500, 1000, 1500, 2000, 2500, 3000],
      },
    })
    map.addLayer(layer, 'admin-1-boundary-bg')
  })
}
</script>
