<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addMarker from '../../snippet/marker'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/huanglii/ck1naxpm00gvj1co6r4pxgxzl?optimize=true',
        center: [-63.8904723180264, -16.806481318445833],
        zoom: 5.8
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addMarker(map)
    }
  }
}
</script>

<style lang="less">
.marker {
  img {
    border-radius: 50%;
    box-shadow: 0 0 15px 5px rgba(105, 105, 105, 0.5);
    animation: scale 2s infinite linear;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.5)
  }
  50% {
    transform: scale(1)
  }
  100% {
    transform: scale(0.5)
  }
}
</style>
