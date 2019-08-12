<template>
  <base-map :container="container" :center="center" :zoom="zoom" :pitch="pitch" :mapStyle="style" :bearing="bearing" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addHexgonLayer from '../snippet/deckgl-heatmap3d'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-deckgl-heatmap3d',
      center: [-1.4157267858730052, 52.232395363869415],
      zoom: 5,
      pitch: 40.5,
      bearing: -27.396674584323023,
      style: 'mapbox://styles/mapbox/dark-v9?optimize=true'
    }
  },
  methods: {
    handleMapLoaded (map) {
      addHexgonLayer(map)
    }
  }
}
</script>
