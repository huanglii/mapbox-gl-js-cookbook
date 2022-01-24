<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addLayer from '../../../snippet/deckgl/arc-layer'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [-122.19, 37.75],
        zoom: 9.16,
        pitch: 30,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addLayer(map)
    },
  },
}
</script>
