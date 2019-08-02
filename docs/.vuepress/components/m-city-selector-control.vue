<template>
  <base-map :container="container" :center="center" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addCitySeletorControl from '../snippet/city-selector-control'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-city-selector-control',
      center: [106.581355, 29.561788]
    }
  },
  methods: {
    handleMapLoaded () {
      addCitySeletorControl(this.$refs.map)
    }
  }
}
</script>
