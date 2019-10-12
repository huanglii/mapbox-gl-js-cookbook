<template>
  <base-map :map-options="mapOptions" :borderOptions="borderOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addHeatmapLayer from '../snippet/heatmap'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/mapbox/dark-v10?optimize=true',
        center: [-120, 50],
        zoom: 2
      },
      borderOptions: {
        paint: {
          'line-color': '#6e6e6e'
        },
        beforeId: 'admin-1-boundary-bg'
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addHeatmapLayer(map)
    }
  }
}
</script>
