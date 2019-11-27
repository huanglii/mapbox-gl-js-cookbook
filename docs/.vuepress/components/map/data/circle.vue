<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map'
import addCircleLayer from '../../../snippet/data/circle'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [-76.5340, 39.1817],
        zoom: 16
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addCircleLayer(map)
    }
  }
}
</script>
