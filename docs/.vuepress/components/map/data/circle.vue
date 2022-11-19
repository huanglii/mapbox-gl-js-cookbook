<template>
  <base-map :map-options="mapOptions" :height="220" @load="handleMapLoaded" />
</template>

<script setup>
import { point as pointHelper, featureCollection as featureCollectionHelper } from '@turf/helpers'
import baseMap from '../base-map.vue'

const mapOptions = {
  center: [-76.534, 39.1817],
  zoom: 16,
}

const handleMapLoaded = (map) => {
  const point1 = pointHelper([-76.536, 39.1817], { fid: 1 })
  const point2 = pointHelper([-76.534, 39.1817], { fid: 2 })
  const point3 = pointHelper([-76.532, 39.1817], { fid: 3 })
  const fc = featureCollectionHelper([point1, point2, point3])

  map.addSource('points', {
    type: 'geojson',
    data: fc,
  })
  map.addLayer({
    id: 'circle-layer-1',
    type: 'circle',
    source: 'points',
    paint: {
      'circle-radius': 40,
      'circle-color': '#DA4949',
      'circle-opacity': 0.65,
      'circle-stroke-width': 30,
      'circle-stroke-color': '#DA4949',
      'circle-stroke-opacity': 0.4,
    },
    filter: ['==', 'fid', 1],
  })
  map.addLayer({
    id: 'circle-layer-2',
    type: 'circle',
    source: 'points',
    paint: {
      'circle-radius': 50,
      'circle-color': '#DA4949',
      'circle-blur': 0.8,
    },
    filter: ['==', 'fid', 2],
  })
  map.addLayer({
    id: 'circle-layer-3',
    type: 'circle',
    source: 'points',
    paint: {
      'circle-radius': 40,
      'circle-opacity': 0,
      'circle-stroke-width': 30,
      'circle-stroke-color': '#DA4949',
      'circle-stroke-opacity': 0.5,
    },
    filter: ['==', 'fid', 3],
  })
}
</script>
