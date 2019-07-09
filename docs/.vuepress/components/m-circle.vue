<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addCircleLayer from '../../snippet/circle'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-circle',
      center: [-122.447303, 37.753574],
      zoom: 12
    }
  },
  methods: {
    handleMapLoaded () {
      addCircleLayer(this.$refs.map)
    }
  }
}
</script>
