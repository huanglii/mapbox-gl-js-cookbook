<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import { lineString as lineStringHelper } from '@turf/helpers'
import baseMap from '../base-map.vue'

const mapOptions = {
  center: [-122.486552 + 0.004, 37.831048],
  zoom: 14.5,
}

const handleMapLoaded = (map) => {
  const lineStringCoordinates = [
    [-122.48404, 37.830497],
    [-122.483482, 37.82992],
    [-122.483568, 37.829548],
    [-122.48507, 37.829446],
    [-122.4861, 37.828802],
    [-122.486958, 37.82931],
    [-122.487001, 37.830802],
    [-122.487516, 37.831683],
    [-122.488031, 37.832158],
    [-122.488889, 37.832971],
    [-122.489876, 37.832632],
    [-122.490434, 37.832937],
    [-122.49125, 37.832429],
    [-122.491636, 37.832564],
  ]
  const linestring1 = lineStringHelper(lineStringCoordinates)
  const linestring2 = lineStringHelper(
    lineStringCoordinates.map((coord) => {
      return [coord[0] + 0.01, coord[1]]
    })
  )
  const linestring3 = lineStringHelper([
    [-122.481636, 37.832564],
    [-122.48404, 37.830497],
  ])
  map.addLayer({
    id: 'line-layer-1',
    type: 'line',
    source: {
      type: 'geojson',
      data: linestring1,
    },
    layout: {
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#3eaf7c',
      'line-width': 4,
      'line-gap-width': 4,
    },
  })
  map.addLayer({
    id: 'line-layer-2',
    type: 'line',
    source: {
      type: 'geojson',
      data: linestring2,
    },
    paint: {
      'line-color': '#fb5614',
      'line-width': 2,
      'line-dasharray': [2, 2],
    },
  })
  map.addLayer({
    id: 'line-layer-3',
    type: 'line',
    source: {
      type: 'geojson',
      data: linestring3,
    },
    paint: {
      'line-width': 10,
      'line-pattern': 'airport-11',
    },
  })
}
</script>
