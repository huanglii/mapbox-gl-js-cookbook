<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [107.744809, 30.180706],
        zoom: 6,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      map.addSource('chongqing', {
        type: 'geojson',
        data: this.$withBase('/data/cq.geojson'),
      })
      map.addLayer({
        id: 'polygon-layer-0',
        type: 'fill',
        source: 'chongqing',
        paint: {
          'fill-color': '#FFD273',
          'fill-opacity': 0.8,
          'fill-outline-color': '#FFF',
        },
        filter: ['==', ['%', ['get', 'value'], 3], 0],
      })
      // 纹理
      map.addLayer({
        id: 'polygon-layer-1',
        type: 'fill',
        source: 'chongqing',
        paint: {
          'fill-pattern': 'religious-buddhist-11',
        },
        filter: ['==', ['%', ['get', 'value'], 3], 1],
      })
      // 线
      map.addLayer({
        id: 'line-layer-2',
        type: 'line',
        source: 'chongqing',
        paint: {
          'line-color': '#0000FF',
          'line-width': 1,
          // 'line-dasharray': [5, 5],
        },
        filter: ['==', ['%', ['get', 'value'], 3], 2],
      })
    },
  },
}
</script>
