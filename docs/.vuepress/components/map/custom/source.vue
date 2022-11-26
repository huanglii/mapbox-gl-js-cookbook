<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import mapboxgl from 'mapbox-gl';
import BaseMap from '../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [110, 38],
  zoom: 1,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  const source: mapboxgl.CustomSourceInterface<ImageData> = {
    id: 'custom-source',
    type: 'custom',
    dataType: 'raster',
    tileSize: 256,
    async loadTile({ z, x, y }) {
      const tileSize = 256
      const canvas = document.createElement('canvas')
      canvas.width = canvas.height = tileSize
      const context = canvas.getContext('2d')
      context!.fillStyle = '#74a9cf'
      context!.fillRect(0, 0, tileSize, tileSize)

      context!.font = '18px serif'
      context!.fillStyle = 'white'
      context!.textAlign = 'center'
      context!.fillText(`${z}/${x}/${y}`, tileSize / 2, tileSize / 2, tileSize)

      const imageData = context!.getImageData(0, 0, tileSize, tileSize)
      return imageData
    },
    hasTile(tile) {
      return (tile.x + tile.y) % 2 === 0
    },
  }

  map.addSource('custom-source', source)
  map.addLayer({
    id: 'custom-source',
    type: 'raster',
    source: 'custom-source',
    paint: {
      'raster-opacity': 0.75,
      'raster-fade-duration': 0,
    },
  })
}
</script>
