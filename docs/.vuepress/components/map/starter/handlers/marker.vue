<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { withBase } from '@vuepress/client'
import baseMap from '../../base-map.vue'
import { STYLE } from '../../../../utils/constant'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.GRAY,
  center: [-63.8904723180264, -16.806481318445833],
  zoom: 5.8,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  const points = [
    {
      iconSize: [80, 80],
      coordinates: [-66.324462890625, -16.024695711685304],
    },
    {
      iconSize: [60, 60],
      coordinates: [-61.2158203125, -15.97189158092897],
    },
    {
      iconSize: [50, 50],
      coordinates: [-63.29223632812499, -18.28151823530889],
    },
  ]
  points.forEach((point) => {
    const el = document.createElement('div')
    el.className = 'marker'
    el.style.width = `${point.iconSize[0]}px`
    el.style.height = `${point.iconSize[1]}px`

    const img = document.createElement('img')
    img.src = withBase('/assets/images/cat.jfif')
    el.appendChild(img)

    new mapboxgl.Marker(el).setLngLat(point.coordinates as mapboxgl.LngLatLike).addTo(map)
  })
}
</script>

<style lang="scss">
.marker {
  img {
    border-radius: 50%;
    box-shadow: 0 0 15px 5px rgba(105, 105, 105, 0.5);
    animation: scale 2s infinite linear;
  }
}

@keyframes scale {
  0% {
    transform: scale(0.5);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.5);
  }
}
</style>
