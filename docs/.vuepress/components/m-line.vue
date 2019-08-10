<template>
  <base-map :container="container" :center="center" :zoom="zoom" @load="handleMapLoaded"/>
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
      center: [-122.486552, 37.831048],
      zoom: 14.5
    }
  },
  methods: {
    handleMapLoaded (map) {
      addLineLayer(map)
    }
  }
}
</script>
