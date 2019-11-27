<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map'
import addFillLineLayer from '../../../snippet/data/fill-line'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [10.5, 10.0],
        zoom: 3.2
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addFillLineLayer(map)
    }
  }
}
</script>
