<template>
  <base-map :container="container" :mapStyle="mapStyle" :center="center" :zoom="zoom" @load="handleMapLoaded"/>
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
      container: 'm-heatmap',
      mapStyle: 'mapbox://styles/mapbox/dark-v10',
      center: [-120, 50],
      zoom: 2
    }
  },
  methods: {
    handleMapLoaded (map) {
      addHeatmapLayer(map)
    }
  }
}
</script>
