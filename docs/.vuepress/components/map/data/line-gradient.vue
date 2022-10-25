<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import baseMap from '../base-map.vue'
import {
  lineString as lineStringHelper,
  multiLineString as multiLineStringHelper,
} from '@turf/helpers'
import { STYLE } from '../../../utils/constant'

const mapOptions = {
  style: STYLE.GRAY,
  center: [-77.03, 38.875],
  zoom: 12,
}

const handleMapLoaded = (map) => {
  // addLineGradientLayer(map)
  const lineStringCoordinates1 = [
    [
      [-77.044211, 38.852924],
      [-77.045659, 38.860158],
      [-77.044232, 38.862326],
      [-77.040879, 38.865454],
      [-77.039936, 38.867698],
      [-77.040338, 38.86943],
      [-77.04264, 38.872528],
      [-77.03696, 38.878424],
      [-77.032309, 38.87937],
    ],
    [
      [-77.030056, 38.880945],
      [-77.027645, 38.881779],
      [-77.026946, 38.882645],
      [-77.026942, 38.885502],
      [-77.028054, 38.887449],
      [-77.02806, 38.892088],
      [-77.03364, 38.892108],
      [-77.033643, 38.899926],
    ],
  ]
  const lineStringCoordinates2 = [].concat(
    ...lineStringCoordinates1.map((line) => {
      return line.map((coord) => {
        return [coord[0] + 0.01, coord[1]]
      })
    })
  )
  const linestring1 = multiLineStringHelper(lineStringCoordinates1)
  const linestring2 = lineStringHelper(lineStringCoordinates2)
  const lineGradientLayerOption = {
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
    },
    paint: {
      'line-color': 'red',
      'line-width': 10,
      // 'line-gradient' must be specified using an expression
      // with the special 'line-progress' property
      'line-gradient': [
        'interpolate',
        ['linear'],
        ['line-progress'],
        0,
        'blue',
        0.1,
        'royalblue',
        0.3,
        'cyan',
        0.5,
        'lime',
        0.7,
        'yellow',
        1,
        'red',
      ],
    },
  }
  map.addLayer({
    id: 'line-gradient-layer-1',
    type: 'line',
    source: {
      // 'line-gradient' can only be used with GeoJSON sources
      // and the source must have the 'lineMetrics' option set to true
      type: 'geojson',
      lineMetrics: true,
      data: linestring1,
    },
    ...lineGradientLayerOption,
  })
  map.addLayer({
    id: 'line-gradient-layer-2',
    type: 'line',
    source: {
      type: 'geojson',
      lineMetrics: true,
      data: linestring2,
    },
    ...lineGradientLayerOption,
  })
}
</script>
