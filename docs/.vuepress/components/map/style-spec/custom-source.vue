<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        center: [0, 0],
        zoom: 0,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      // map.addSource('custom-source', {
      //   type: 'custom',
      //   tileSize: 256,
      //   async loadTile({ z, x, y }) {
      //     const tileSize = 256
      //     const canvas = document.createElement('canvas')
      //     canvas.width = canvas.height = tileSize
      //     const context = canvas.getContext('2d')
      //     context.fillStyle = '#74a9cf'
      //     context.fillRect(0, 0, tileSize, tileSize)

      //     context.font = '18px serif'
      //     context.fillStyle = 'white'
      //     context.textAlign = 'center'
      //     context.fillText(`${z}/${x}/${y}`, tileSize / 2, tileSize / 2, tileSize)

      //     const imageData = context.getImageData(0, 0, tileSize, tileSize)
      //     return imageData
      //   },
      //   hasTile({ z, x, y }) {
      //     return (x + y) % 2 === 0
      //   },
      // })

      // map.addLayer({
      //   id: 'custom-source',
      //   type: 'raster',
      //   source: 'custom-source',
      //   paint: {
      //     'raster-opacity': 0.75,
      //     'raster-fade-duration': 0,
      //   },
      // })
    },
  },
}
</script>
