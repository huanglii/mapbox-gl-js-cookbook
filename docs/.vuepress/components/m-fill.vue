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
        center: [25, 10],
        zoom: 3.2
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
