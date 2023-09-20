<template>
  <base-map :map-clickable="false" :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { withBase } from '@vuepress/client'
import MapboxDraw from "@mapbox/mapbox-gl-draw"
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [107.744809, 30.180706],
  zoom: 6,
}

const handleMapLoaded = async (map: mapboxgl.Map) => {
  const polygon = {
    'coordinates': [
      [
        [107, 30],
        [107, 29],
        [108, 29],
        [108, 30],
        [107, 30]
      ]
    ],
    'type': 'Polygon'
  }

  map.addSource('points', {
    type: 'geojson',
    data: withBase('/data/point.geojson')
  })
  map.addLayer({
    id: 'points',
    type: 'circle',
    source: 'points',
    paint: {
      'circle-color': '#11b4da',
      'circle-radius': 5,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#fff',
    },
    filter: ['within', polygon]
  })

  const draw = new MapboxDraw({
    displayControlsDefault: false,
  })

  map.addControl(draw, 'top-left')

  map.on('draw.update', function (e) {
    map.setFilter('points', ['within', e.features[0]])
  })
  draw.add(polygon)
}
</script>
