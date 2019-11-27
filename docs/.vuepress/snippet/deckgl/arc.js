import { Deck } from '@deck.gl/core'
import { GeoJsonLayer, ArcLayer } from '@deck.gl/layers'
import { scaleQuantile } from 'd3-scale'

// Source data GeoJSON
const DATA_URL =
  'https://uber.osgis.cn/uber-common/deck.gl-data/master/examples/arc/counties.json' // eslint-disable-line

const inFlowColors = [
  [255, 255, 204],
  [199, 233, 180],
  [127, 205, 187],
  [65, 182, 196],
  [29, 145, 192],
  [34, 94, 168],
  [12, 44, 132]
]

const outFlowColors = [
  [255, 255, 178],
  [254, 217, 118],
  [254, 178, 76],
  [253, 141, 60],
  [252, 78, 42],
  [227, 26, 28],
  [177, 0, 38]
]

const INITIAL_VIEW_STATE = {
  longitude: -100,
  latitude: 40.7,
  zoom: 2.5,
  maxZoom: 15,
  pitch: 30,
  bearing: 30
}

export default function addArcLayer (map, id) {
  const state = {
    hoveredCountry: null,
    selectedCounty: null
  }
  let strokeWidth = 2
  let deck

  function _recalculateArcs (data, selectedCounty = state.selectedCounty) {
    if (!data) {
      return
    }
    if (!selectedCounty) {
      selectedCounty = data.find(f => f.properties.name === 'Los Angeles, CA')
    }
    const { flows, centroid } = selectedCounty.properties

    const arcs = Object.keys(flows).map(toId => {
      const f = data[toId]
      return {
        source: centroid,
        target: f.properties.centroid,
        value: flows[toId]
      }
    })

    const scale = scaleQuantile()
      .domain(arcs.map(a => Math.abs(a.value)))
      .range(inFlowColors.map((c, i) => i))

    arcs.forEach(a => {
      a.gain = Math.sign(a.value)
      a.quantile = scale(Math.abs(a.value))
    })

    if (state.onSelectCounty) {
      state.onSelectCounty(selectedCounty)
    }

    state.arcs = arcs
    state.selectedCounty = selectedCounty

    if (deck) {
      let _arcProps = {}
      Object.assign(_arcProps, arcLayer.props, { data: state.arcs })
      let _geojsonProps = {}
      Object.assign(_geojsonProps, geojsonLayer.props, { data: state.data })
      const layers = [new GeoJsonLayer(_geojsonProps), new ArcLayer(_arcProps)]
      deck.setProps({ layers })
    }
  }

  function _onHoverCounty ({ x, y, object }) {
    state.x = x
    state.y = y
    state.hoveredCountry = object
  }

  function _onSelectCounty ({ object }) {
    _recalculateArcs(state.data, object)
  }

  const geojsonLayer = new GeoJsonLayer({
    id: 'geojson',
    data: state.data,
    stroked: false,
    filled: true,
    getFillColor: [0, 0, 0, 0],
    pickable: true,
    autoHighlight: true,
    onHover: _onHoverCounty,
    onClick: _onSelectCounty
  })

  const arcLayer = new ArcLayer({
    id: 'arc',
    data: state.arcs,
    getSourcePosition: d => d.source,
    getTargetPosition: d => d.target,
    getSourceColor: d => (d.gain > 0 ? inFlowColors : outFlowColors)[d.quantile],
    getTargetColor: d => (d.gain > 0 ? outFlowColors : inFlowColors)[d.quantile],
    getWidth: strokeWidth
  })

  function initDeckLayer () {
    deck = new Deck({
      canvas: id,
      id: id,
      width: '100%',
      height: '100%',
      style: { postion: 'relative', top: '0px' },
      initialViewState: INITIAL_VIEW_STATE,
      controller: true,
      onViewStateChange: ({ viewState }) => {
        map.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch
        })
      },
      layers: [
        geojsonLayer,
        arcLayer
      ]
    })
  }
  initDeckLayer()
  fetch(DATA_URL)
    .then(response => response.json())
    .then(({ features }) => {
      state.data = features
      _recalculateArcs(features)
    })
}
