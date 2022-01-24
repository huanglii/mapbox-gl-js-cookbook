<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script>
import baseMap from '../base-map.vue'
import addHillshadeLayer from '../../../snippet/thematic/hillshade'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: {
          version: 8,
          sources: {},
          layers: [
            {
              id: 'background-layer',
              type: 'background',
              paint: {
                'background-color': '#ccc',
              },
            },
          ],
        },
        center: [107.78172288228535, 30.19406837416186],
        zoom: 10,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addHillshadeLayer(map)
    },
  },
}
</script>
