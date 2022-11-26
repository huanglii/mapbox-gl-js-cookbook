<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.GRAY,
  center: [-77.03, 38.875],
  zoom: 12,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  const line: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "MultiLineString",
          "coordinates": [
            [
              [-77.044211, 38.852924],
              [-77.045659, 38.860158],
              [-77.044232, 38.862326],
              [-77.040879, 38.865454],
              [-77.039936, 38.867698],
              [-77.040338, 38.86943],
              [-77.04264, 38.872528],
              [-77.03696, 38.878424],
              [-77.032309, 38.87937]
            ],
            [
              [-77.030056, 38.880945],
              [-77.027645, 38.881779],
              [-77.026946, 38.882645],
              [-77.026942, 38.885502],
              [-77.028054, 38.887449],
              [-77.02806, 38.892088],
              [-77.03364, 38.892108],
              [-77.033643, 38.899926]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-77.034211, 38.852924],
            [-77.035659, 38.860158],
            [-77.0342329, 38.862326],
            [-77.030879, 38.865454],
            [-77.029936, 38.867698],
            [-77.030338, 38.86943],
            [-77.03264, 38.872528],
            [-77.02696, 38.878424],
            [-77.022309, 38.87937],
            [-77.020056, 38.880945],
            [-77.017645, 38.881779],
            [-77.016946, 38.882645],
            [-77.016942, 38.885502],
            [-77.018054, 38.887449],
            [-77.01806, 38.892088],
            [-77.02364, 38.892108],
            [-77.023643, 38.899926]
          ]
        }
      }
    ]
  }

  map.addSource('line-source', {
    type: 'geojson',
    lineMetrics: true,
    data: line,
  })
  map.addLayer({
    id: 'line-gradient-layer',
    type: 'line',
    source: 'line-source',
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
  })
}
</script>
