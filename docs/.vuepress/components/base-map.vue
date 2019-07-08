<template>
  <div id="map-container" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  name: 'base-map',
  props: {
    center: {
      type: Array,
      default () {
        return [-74.50, 40]
      }
    },
    zoom: {
      type: Number,
      default: 9
    }
  },
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.initMap({
      container: 'map-container',
      style: 'mapbox://styles/huanglii/cjq2bt5sy50822smhq4ovebf5',
      center: this.center,
      zoom: this.zoom
    })
    window.addEventListener('resize', this.resize)
  },
  methods: {
    initMap (options) {
      mapboxgl.accessToken = 'pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2pzNHBtendwMDZ2ZDQzbnVmZXdtMDlvdiJ9.GSija86yNNR4ssBtFFpx0g'
      this.map = new mapboxgl.Map(options)
      this.map.on('load', this.handleMapLoaded)
    },
    handleMapLoaded (evt) {
      this.$emit('load', evt)
    },
    resize () {
      this.map.resize()
    },
    addLayer (layer) {
      this.map.addLayer(layer)
    }
  }
}
</script>
