<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addImageLayer from '../snippet/image'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-image',
      center: [104.2945384995, 35.8600924965],
      zoom: 2.4
    }
  },
  methods: {
    handleMapLoaded () {
      addImageLayer(this.$refs.map)
    }
  }
}
</script>
