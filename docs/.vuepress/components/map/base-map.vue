<template>
  <div class="map-wrapper">
    <div :id="mapContainer" :style="{ width: '100%', height: `${height}px`, borderRadius: '6px' }"></div>
    <slot v-if="mapLoaded"></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import HomeControl from '../control/HomeControl'
import { TK, STYLE } from '../../utils/constant'
import { createPropHtml } from '../../utils'
import 'mapbox-gl/dist/mapbox-gl.css'

interface Props {
  height?: number,
  mapOptions?: Omit<mapboxgl.MapboxOptions, 'container'>
  mapClickable?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  height: 520,
  mapClickable: true
})
const emit = defineEmits<{
  (e: 'load', map: mapboxgl.Map): void
}>()

const mapContainer = Math.random().toString(16).substring(2)
let map: mapboxgl.Map
let mapLoaded = ref(false)

onMounted(() => {
  const mapDefaultOptions = {
    container: mapContainer,
    style: STYLE.DEFAULT,
    center: [104.294538, 35.860092],
    zoom: 2.4,
    minZoom: 0,
    maxZoom: 22,
    scrollZoom: true,
    pitch: 0,
    bearing: 0,
    antialias: false,
  }
  const options = Object.assign({}, mapDefaultOptions, props.mapOptions)
  initMap(options)
})

const initMap = (options: mapboxgl.MapboxOptions) => {
  mapboxgl.accessToken = TK
  map = new mapboxgl.Map(options)
  map.addControl(new mapboxgl.NavigationControl(), 'top-left')
  map.addControl(new mapboxgl.FullscreenControl(), 'top-left')
  map.addControl(
    new HomeControl({
      center: options.center,
      zoom: options.zoom,
      pitch: options.pitch,
      bearing: options.bearing,
    }),
    'bottom-left'
  )
  map.on('load', (e: mapboxgl.MapboxEvent<undefined> & mapboxgl.EventData) => {
    mapLoaded.value = true
    emit('load', e.target)
  })
  if (props.mapClickable) {
    map.on('click', (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
      const features = map.queryRenderedFeatures(e.point)
      if (features.length > 0) {
        const feature = features[0]
        const { layer, properties, geometry } = feature
        let lngLat: mapboxgl.LngLatLike = e.lngLat
        if (geometry.type === 'Point') {
          lngLat = geometry.coordinates as [number, number]
        }
        if (properties) {
          new mapboxgl.Popup()
            .setLngLat(lngLat)
            .setHTML(createPropHtml(layer.id, properties))
            .addTo(map)
        }
      }
    })
  }
}
</script>

<style lang="scss">
.mapboxgl-popup {
  &-content {
    padding: 0;

    .title {
      padding: 0 30px 0 10px;
      line-height: 32px;
      font-size: 14px;
      color: #fff;
      background-color: #3eaf7c;
    }

    .content {
      padding: 10px;
      max-height: 200px;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #fff;

      p {
        margin: 0;
        line-height: 24px;
      }
    }
  }

  &-close-button {
    outline: none;
    color: #fff;
    font-size: 24px;
    line-height: 32px;
    padding: 0 6px;
    font-family: inherit;
  }
}
</style>
