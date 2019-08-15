<template>
  <custom-map :container="container"
              :center="center"
              :zoom="zoom"
              :pitch="pitch"
              :mapStyle="style"
              :bearing="bearing"
              @load="handleMapLoaded">
    <canvas id="trips-canvas"
            slot="custom" style="z-index: 2;"></canvas>
  </custom-map>

</template>

<script>
  import customMap from './custom-map'
  import addTripsLayer from '../snippet/deckgl-trips'
  export default {
    components: {
      customMap
    },
    data () {
      return {
        container: 'm-deckgl-trips',
        center: [7, 47.65],
        zoom: 4.5,
        pitch: 50,
        bearing: 0,
        style: 'mapbox://styles/mapbox/dark-v9?optimize=true'
      }
    },
    methods: {
      handleMapLoaded (map,) {
        addTripsLayer(map,'trips-canvas')
      }
    }
  }
</script>
