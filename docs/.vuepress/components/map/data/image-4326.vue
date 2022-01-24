<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import addImageLayer from '../../../snippet/data/image4326'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        center: [107.744809, 30.180706],
        zoom: 6,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addImageLayer(map, this.$withBase('/assets/images/4326.png'))
    },
  },
}
</script>
