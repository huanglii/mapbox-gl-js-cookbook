<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script>
import baseMap from './base-map'
import addDotLayer from '../snippet/dot'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [(105.28976 + 110.199858) / 2, (28.160225 + 32.2011870) / 2],
        zoom: 6,
        minZoom: 6
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addDotLayer(map)
    }
  }
}
</script>
