<template>
  <base-map @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addRasterLayer from '../snippet/raster'
export default {
  components: {
    baseMap
  },
  data () {
    return {}
  },
  methods: {
    handleMapLoaded (map) {
      addRasterLayer(map)
    }
  }
}
</script>
