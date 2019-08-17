<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
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
      mapOptions: {
        center: [106.581355, 29.561788],
        zoom: 16,
        pitch: 60,
        antialias: true
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addFillExtrusionLayer(map)
    }
  }
}
</script>
