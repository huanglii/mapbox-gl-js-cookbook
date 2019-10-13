<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addFillLayer from '../snippet/fill'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [106.55955364671473, 29.56198696123272],
        zoom: 16
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addFillLayer(map)
    }
  }
}
</script>
