<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map'
import addUniqueLayer from '../../../snippet/thematic/unique'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [124.879014, 47.816000],
        zoom: 15.2,
        minZoom: 15
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addUniqueLayer(map, this.$withBase('/data/land.geojson'))
    }
  }
}
</script>
