<template>
  <div class="map-wrapper">
    <div :id="mapContainer" :style="{ width: '100%', height: `${height}px`, borderRadius: '6px' }"></div>
    <slot v-if="mapLoaded"></slot>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vuepress/client';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { onMounted, ref } from 'vue';
import { createPropHtml } from '../../utils';
import { TK } from '../../utils/constant';
import HomeControl from '../control/HomeControl';

interface Props {
  height?: number
  mapOptions?: Omit<mapboxgl.MapOptions, 'container'>
  mapClickable?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  height: 520,
  mapClickable: true,
})
const emit = defineEmits<{
  (e: 'load', map: mapboxgl.Map): void
}>()

const mapContainer = Math.random().toString(16).substring(2)
let map: mapboxgl.Map
let mapLoaded = ref(false)

onMounted(() => {
  const mapDefaultOptions: mapboxgl.MapOptions = {
    container: mapContainer,
    style: withBase('/mapbox/standard.json'),
    center: [104.294538, 35.860092],
    zoom: 2.4,
    minZoom: 0,
    maxZoom: 22,
    pitch: 0,
    bearing: 0,
    antialias: false,
    scrollZoom: true,
    cooperativeGestures: true,
    attributionControl: false,
    locale: {
      'AttributionControl.ToggleAttribution': 'Toggle attribution',
      'AttributionControl.MapFeedback': 'Map feedback',
      'FullscreenControl.Enter': '全屏',
      'FullscreenControl.Exit': '退出全屏',
      'GeolocateControl.FindMyLocation': '定位',
      'GeolocateControl.LocationNotAvailable': '定位不可用',
      'LogoControl.Title': 'Mapbox logo',
      'Map.Title': 'Map',
      'NavigationControl.ResetBearing': '指北',
      'NavigationControl.ZoomIn': '放大',
      'NavigationControl.ZoomOut': '缩小',
      'ScrollZoomBlocker.CtrlMessage': '使用 ctrl + 滚轮缩放地图',
      'ScrollZoomBlocker.CmdMessage': '使用 ⌘ + 滚轮缩放地图',
      'TouchPanBlocker.Message': '使用双指移动底图'
    }
  }
  const options = Object.assign({}, mapDefaultOptions, props.mapOptions)
  initMap(options)
})

const initMap = (options: mapboxgl.MapOptions) => {
  mapboxgl.accessToken = TK
  map = new mapboxgl.Map(options)
  map.addControl(new mapboxgl.AttributionControl({
    customAttribution: `v${mapboxgl.version}`
  }))
  map.addControl(new mapboxgl.NavigationControl({
    visualizePitch: true
  }), 'top-left')
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
  map.on('load', (e) => {
    mapLoaded.value = true
    emit('load', e.target)
  })
  if (props.mapClickable) {
    map.on('click', (e) => {
      const features = map.queryRenderedFeatures(e.point)

      if (features.length > 0) {
        const feature = features[0]
        const { layer, properties, geometry } = feature
        let lngLat: mapboxgl.LngLatLike = e.lngLat
        if (geometry.type === 'Point') {
          lngLat = geometry.coordinates as [number, number]
        }
        if (layer && properties) {
          new mapboxgl.Popup().setLngLat(lngLat).setHTML(createPropHtml(layer.id, properties)).addTo(map)
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
