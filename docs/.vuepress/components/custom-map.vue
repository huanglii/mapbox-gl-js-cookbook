<template>
  <div class="map-wrapper">
    <div :id="container"
         :style="{ width: '100%', height: `${height}px`, borderRadius: '6px' }">
      <!-- 移入自定义层 -->
      <slot name="custom"></slot>
    </div>
    <slot v-if="maploaded"></slot>

  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
export default {
  name: 'custom-map',
  props: {
    container: {
      type: String,
      default: `map-${new Date().getTime()}`
    },
    height: {
      type: Number,
      default: 400
    },
    mapStyle: {
      type: String,
      default: 'mapbox://styles/huanglii/cjmn2rlvn0c8u2sl97kkiep6r'
    },
    center: {
      type: Array,
      default () {
        return [-74.50, 40]
      }
    },
    zoom: {
      type: Number,
      default: 9
    },
    minZoom: {
      type: Number,
      default: 0
    },
    maxZoom: {
      type: Number,
      default: 22
    },
    scrollZoom: {
      type: Boolean,
      default: true
    },
    pitch: {
      type: Number,
      default: 0
    },
    bearing: {
      type: Number,
      default: 0
    },
    antialias: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      map: null,
      maploaded: false
    }
  },
  mounted () {
    let { container, mapStyle: style, center, zoom, minZoom, maxZoom, scrollZoom, pitch, bearing, antialias } = this
    this.initMap({
      container,
      style,
      center,
      zoom,
      minZoom,
      maxZoom,
      scrollZoom,
      pitch,
      bearing,
      antialias
    })
    window.addEventListener('resize', this.resize)
  },
  methods: {
    initMap (options) {
      mapboxgl.accessToken = 'pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2pzNHBtendwMDZ2ZDQzbnVmZXdtMDlvdiJ9.GSija86yNNR4ssBtFFpx0g'
      this.map = new mapboxgl.Map(options)
      this.map.addControl(new mapboxgl.NavigationControl({
        showCompass: false
      }), 'top-left')
      this.map.addControl(new mapboxgl.FullscreenControl(), 'top-left')
      this.map.on('load', this.handleMapLoaded)
    },
    handleMapLoaded (evt) {
      this.maploaded = true
      this.$emit('load', evt.target)
      this.map.on('click', this.handleMapClick)
    },
    handleMapClick (evt) {
      let features = this.map.queryRenderedFeatures(
        evt.point
      )
      if (features.length > 0) {
        let { layer, properties } = features[0]
        new mapboxgl.Popup()
          .setLngLat(evt.lngLat)
          .setHTML(this.createPropHtml(layer.id, properties))
          .addTo(this.map)
      }
    },
    createPropHtml (title, prop) {
      return `
      <div class="title"><b>${title}</b></div>
      <div class="content">
        ${Object.keys(prop).map(key => `${`<p><b>${key}: </b>${prop[key]}</p>`}`).join('')}
      </div>
    `
    },
    resize () {
      this.map.resize()
    }
  }
}
</script>

<style lang="less">
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
