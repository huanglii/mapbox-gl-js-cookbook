<template>
  <base-map :map-options="mapOptions" :borderOptions="borderOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addHeatmapLayer from '../../../snippet/data/heatmap'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [-120, 50],
        zoom: 2
      },
      borderOptions: {
        layout: {
          'visibility': 'visible'
        },
        paint: {
          'line-color': '#6e6e6e'
        },
        beforeId: 'admin-1-boundary-bg'
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addHeatmapLayer(map)
    }
  }
}
</script>
