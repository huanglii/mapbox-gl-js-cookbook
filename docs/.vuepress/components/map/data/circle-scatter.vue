<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.DARK,
  center: [116.3162548, 36.9017491],
  zoom: 2,
  maxZoom: 6,
  minZoom: 1,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addSource('earthquakes', {
    type: 'vector',
    url: 'mapbox://huanglii.d41k5fmy',
  })

  const layerOptions = [
    {
      radius: 2,
      color: '#0098a3',
      blur: 1,
      opacity: 0.7,
      filter: ['<=', 'mag', 5],
    },
    {
      radius: 3,
      color: '#00ca8d',
      blur: 1,
      opacity: 0.7,
      filter: ['all', ['>', 'mag', 5], ['<=', 'mag', 6]],
    },
    {
      radius: 4,
      color: '#37C508',
      blur: 1,
      opacity: 0.5,
      filter: ['all', ['>', 'mag', 6], ['<=', 'mag', 7]],
    },
    {
      radius: 5,
      color: '#98f300',
      blur: 1,
      opacity: 0.6,
      filter: ['all', ['>', 'mag', 7], ['<=', 'mag', 8]],
    },
    {
      radius: 6,
      color: '#efff85',
      blur: 1,
      opacity: 0.6,
      filter: ['>', 'mag', 8],
    },
    {
      radius: 1,
      color: '#0098a3',
      blur: 0.4,
      opacity: 0.8,
      filter: ['<=', 'mag', 5],
    },
    {
      radius: 1,
      color: '#00ca8d',
      blur: 0.4,
      opacity: 0.8,
      filter: ['all', ['>', 'mag', 5], ['<=', 'mag', 6]],
    },
    {
      radius: 1,
      color: '#37C508',
      blur: 0.4,
      opacity: 0.8,
      filter: ['all', ['>', 'mag', 6], ['<=', 'mag', 7]],
    },
    {
      radius: 2,
      color: '#98f300',
      blur: 0.4,
      opacity: 0.8,
      filter: ['all', ['>', 'mag', 7], ['<=', 'mag', 8]],
    },
    {
      radius: 2,
      color: '#efff85',
      blur: 0.4,
      opacity: 0.8,
      filter: ['>', 'mag', 8],
    },
  ]
  // 分图层添加
  layerOptions.map((option, i) => {
    map.addLayer({
      id: `earthquakes-layer-${i}`,
      type: 'circle',
      source: 'earthquakes',
      'source-layer': 'earthquakes-cs3906',
      maxzoom: 9,
      paint: {
        'circle-radius': option.radius,
        'circle-color': option.color,
        'circle-blur': option.blur,
        'circle-opacity': option.opacity,
      },
      filter: option.filter,
    })
  })

  // 使用表达式
  // map.addLayer({
  //   'id': 'earthquakes-layer',
  //   'type': 'circle',
  //   'source': 'earthquakes',
  //   'source-layer': 'earthquakes-cs3906',
  //   'maxzoom': 9,
  //   'paint': {
  //     'circle-radius': 3,
  //     'circle-color': [
  //       'case',
  //       ['<=', ['get', 'mag'], 5], '#0098a3',
  //       ['all', ['>', ['get', 'mag'], 5], ['<=', ['get', 'mag'], 6]], '#00ca8d',
  //       ['all', ['>', ['get', 'mag'], 6], ['<=', ['get', 'mag'], 7]], '#37C508',
  //       ['all', ['>', ['get', 'mag'], 7], ['<=', ['get', 'mag'], 8]], '#98f300',
  //       ['>', ['get', 'mag'], 8], '#EFFF85',
  //       '#000'
  //     ],
  //     'circle-opacity': 0.65,
  //     'circle-blur': 1,
  //   }
  // })
}
</script>
