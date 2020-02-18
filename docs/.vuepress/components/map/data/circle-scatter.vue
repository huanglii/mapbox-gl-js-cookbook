<template>
  <base-map :map-options="mapOptions" :borderOptions="borderOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map'
import { STYLE } from '../../../utils/constant'
import addCircleScatterLayer from '../../../snippet/data/circle-scatter'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [116.3162548, 36.9017491],
        zoom: 2,
        maxZoom: 6,
        minZoom: 1
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
      addCircleScatterLayer(map)
    }
  }
}
</script>
