<template>
  <base-map :map-options="mapOptions" :borderOptions="borderOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addCircleScatterLayer from '../snippet/circle-scatter'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/mapbox/dark-v10?optimize=true',
        center: [116.3162548, 36.9017491],
        zoom: 2,
        maxZoom: 6,
        minZoom: 1
      },
      borderOptions: {
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
