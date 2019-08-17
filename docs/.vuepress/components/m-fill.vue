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
        center: [-68.13734351262877, 45.137451890638886],
        zoom: 5
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
