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
import uuid from 'uuid/v4'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
export default {
  name: 'base-map',
  props: {
    height: {
      type: Number,
      default: 400
    },
    mapOptions: {
      type: Object
    }
  },
  data () {
    return {
      map: null,
      maploaded: false,
      mapDefaultOptions: {
        container: uuid(),
        style: 'mapbox://styles/huanglii/cjmn2rlvn0c8u2sl97kkiep6r?optimize=true',
        center: [-74.50, 40],
        zoom: 6,
        minZoom: 0,
        maxZoom: 22,
        scrollZoom: true,
        pitch: 0,
        bearing: 0,
        antialias: false
      }
    }
  },
  computed: {
    mapContainer () {
      return this.mapOptions.container || this.mapDefaultOptions.container
    }
  },
  mounted () {
    let options = Object.assign({}, this.mapDefaultOptions, this.mapOptions)
    this.initMap(options)
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
