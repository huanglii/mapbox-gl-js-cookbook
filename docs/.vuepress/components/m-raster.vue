<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addRasterLayer from '../snippet/raster'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-raster',
      center: [-74.50, 40],
      zoom: 2
    }
  },
  methods: {
    handleMapLoaded () {
      addRasterLayer(this.$refs.map)
    }
  }
}
</script>
