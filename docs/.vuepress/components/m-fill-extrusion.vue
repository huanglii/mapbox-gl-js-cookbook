<template>
  <base-map :container="container" :center="center" :zoom="zoom" :pitch="pitch" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addFillExtrusionLayer from '../snippet/fill-extrusion'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-fill-extrusion',
      center: [106.581355, 29.561788],
      zoom: 16,
      pitch: 60
    }
  },
  methods: {
    handleMapLoaded () {
      addFillExtrusionLayer(this.$refs.map)
    }
  }
}
</script>
