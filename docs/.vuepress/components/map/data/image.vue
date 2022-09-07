<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        center: [104.2945384995, 35.8600924965],
        zoom: 2.4,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      map.addLayer(
        {
          id: 'image-layer',
          type: 'raster',
          source: {
            type: 'image',
            url: this.$withBase('/assets/images/3857.png'),
            coordinates: [
              [73.50014498, 53.561438993],
              [135.088932019, 53.561438993],
              [135.088932019, 18.158746],
              [73.50014498, 18.158746],
            ],
          },
        },
        'aeroway-line'
      )
    },
  },
}
</script>
