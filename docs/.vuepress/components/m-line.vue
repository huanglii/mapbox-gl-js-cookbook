<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addLineLayer from '../snippet/line'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-line',
      center: [-122.486052, 37.830348],
      zoom: 15
    }
  },
  methods: {
    handleMapLoaded () {
      addLineLayer(this.$refs.map)
    }
  }
}
</script>
