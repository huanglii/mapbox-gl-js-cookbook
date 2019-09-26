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
    },
    borderOptions: {
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
      },
      borderDefaultOptions: {
        paint: {
          'line-color': 'hsl(357, 67%, 60%)',
          'line-opacity': ['step', ['zoom'], 1, 10, 0],
          'line-width': ['interpolate', ['linear'], ['zoom'], 0, 1, 22, 3]
        },
        beforeId: ''
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
      let chinaBorderLayer = this.map.getLayer('border-2oej0r')
      if (!chinaBorderLayer) {
        this.addBorderLayer()
      }
    },
    handleMapClick (evt) {
      let features = this.map.queryRenderedFeatures(
        evt.point
      )
      if (features.length > 0) {
        let { layer, properties } = features[0]
        if (Object.keys(properties).length > 0) {
          new mapboxgl.Popup()
            .setLngLat(evt.lngLat)
            .setHTML(this.createPropHtml(layer.id, properties))
            .addTo(this.map)
        }
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
    // 国界线
    addBorderLayer () {
      let borderOptions = Object.assign({}, this.borderDefaultOptions, this.borderOptions)
      let { paint, beforeId } = borderOptions
      this.map.addSource('border', {
        type: 'vector',
        url: 'mapbox://huanglii.4nxu8jv0'
      })
      this.map.addLayer({
        'id': 'border-2oej0r',
        'source': 'border',
        'source-layer': 'Border-2oej0r',
        'type': 'line',
        'paint': paint
      }, beforeId || undefined)
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
