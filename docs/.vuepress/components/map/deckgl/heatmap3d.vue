<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map'
import addHexgonLayer from '../../../snippet/deckgl/heatmap3d'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [-1.4157267858730052, 52.232395363869415],
        zoom: 5,
        pitch: 40.5,
        bearing: -27.396674584323023
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addHexgonLayer(map)
    }
  }
}
</script>
