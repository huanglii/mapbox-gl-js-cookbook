<template>
  <div class="map-wrapper">
    <div :id="mapContainer" :style="{ width: '100%', height: `${height}px`, borderRadius: '6px' }">
      <!-- 自定义层(canvas) -->
      <slot name="custom"></slot>
    </div>
    <slot v-if="maploaded"></slot>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import HomeControl from '../control/HomeControl'
import { TK, STYLE } from '../../utils/constant'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: 'BaseMap',
  props: {
    height: {
      type: Number,
      default: 520,
    },
    mapOptions: {
      type: Object,
      default() {
        return {}
      },
    },
    mapClickable: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['load'],
  data() {
    return {
      map: null,
      maploaded: false,
      mapDefaultOptions: {
        container: Math.random().toString(16).substring(2),
        style: STYLE.DEFAULT,
        center: [104.294538, 35.860092],
        zoom: 2.4,
        minZoom: 0,
        maxZoom: 22,
        scrollZoom: true,
        pitch: 0,
        bearing: 0,
        antialias: false,
      },
    }
  },
  computed: {
    mapContainer() {
      return this.mapOptions.container || this.mapDefaultOptions.container
    },
  },
  mounted() {
    const options = Object.assign({}, this.mapDefaultOptions, this.mapOptions)
    this.initMap(options)
    window.addEventListener('resize', this.resize)
  },
  methods: {
    initMap(options) {
      mapboxgl.accessToken = TK
      this.map = new mapboxgl.Map(options)
      this.map.addControl(new mapboxgl.NavigationControl(), 'top-left')
      const { center, zoom, pitch, bearing } = options
      this.map.addControl(
        new HomeControl({
          center,
          zoom,
          pitch,
          bearing,
        }),
        'bottom-left'
      )
      this.map.addControl(new mapboxgl.FullscreenControl(), 'top-left')
      this.map.on('load', this.handleMapLoaded)
    },
    handleMapLoaded(evt) {
      this.maploaded = true
      this.$emit('load', evt.target)
      if (this.mapClickable) this.map.on('click', this.handleMapClick)
    },
    handleMapClick(evt) {
      console.log(evt)
      const features = this.map.queryRenderedFeatures(evt.point)
      if (features.length > 0) {
        const { layer, properties } = features[0]
        if (Object.keys(properties).length > 0) {
          new mapboxgl.Popup()
            .setLngLat(evt.lngLat)
            .setHTML(this.createPropHtml(layer.id, properties))
            .addTo(this.map)
        }
      }
    },
    createPropHtml(title, prop) {
      return `
        <div class="title"><b>${title}</b></div>
        <div class="content">
          ${Object.keys(prop)
            .map((key) => `${`<p><b>${key}: </b>${prop[key]}</p>`}`)
            .join('')}
        </div>
      `
    },
    resize() {
      this.map.resize()
    },
  },
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
