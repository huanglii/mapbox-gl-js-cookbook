<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import addRasterLayer from '../../../snippet/data/raster'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        zoom: 2,
        style: {
          version: 8,
          sources: {},
          layers: [],
        },
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addRasterLayer(map)
    },
  },
}
</script>
