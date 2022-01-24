<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map.vue'
import addLinePointLayer from '../../../snippet/data/line-point'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [-122.48909194011641, 37.83524910926758],
        zoom: 13.6
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addLinePointLayer(map)
    }
  }
}
</script>
