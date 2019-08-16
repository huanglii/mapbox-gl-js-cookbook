import { Deck } from '@deck.gl/core'
import { GeoJsonLayer } from '@deck.gl/layers'
import { scaleLinear, scaleThreshold } from 'd3-scale'
import { csv } from 'd3-fetch'

// Source data GeoJSON
const DATA_URL = {
  ACCIDENTS:
    'https://uber.osgis.cn/uber-common/deck.gl-data/master/examples/highway/accidents.csv',
  ROADS:
    'https://uber.osgis.cn/uber-common/deck.gl-data/master/examples/highway/roads.json'
}

function getKey ({ state, type, id }) {
  return `${state}-${type}-${id}`
}

const COLOR_SCALE = scaleThreshold()
  .domain([0, 12, 20, 32, 84, 136, 220, 400, 500, 600])
  .range([
    [26, 152, 80],
    [102, 189, 99],
    [166, 217, 106],
    [217, 239, 139],
    [255, 255, 191],
    [254, 224, 139],
    [253, 174, 97],
    [244, 109, 67],
    [215, 48, 39],
    [168, 0, 0]
  ])

const WIDTH_SCALE = scaleLinear()
  .clamp(true)
  .domain([0, 200])
  .range([10, 2000])

const INITIAL_VIEW_STATE = {
  latitude: 38,
  longitude: -100,
  zoom: 4,
  minZoom: 2,
  maxZoom: 8
}

export default function addLineLayer (map, id) {
  const roads = DATA_URL.ROADS
  const year = 2015
  // const trailLength = 180

  let incidents = {}
  let fatalities = {}

  const _aggregateAccidents = function (accidents) {
    incidents = {}
    fatalities = {}

    if (accidents) {
      accidents.forEach(a => {
        const r = (incidents[a.year] = incidents[a.year] || {})
        const f = (fatalities[a.year] = fatalities[a.year] || {})
        const key = getKey(a)
        r[key] = a.incidents
        f[key] = a.fatalities
      })
    }
    return { incidents, fatalities }
  }

  const _getLineColor = function (f, fatalities) {
    if (!fatalities) {
      return [200, 200, 200]
    }
    const key = getKey(f.properties)
    const fatalitiesPer1KMile = ((fatalities[key] || 0) / f.properties.length) * 1000
    return COLOR_SCALE(fatalitiesPer1KMile)
  }

  const _getLineWidth = function (f, incidents) {
    if (!incidents) {
      return 10
    }
    const key = getKey(f.properties)
    const incidentsPer1KMile = ((incidents[key] || 0) / f.properties.length) * 1000
    return WIDTH_SCALE(incidentsPer1KMile)
  }

  const formatRow = d => ({
    ...d,
    incidents: Number(d.incidents),
    fatalities: Number(d.fatalities)
  })

  csv(DATA_URL.ACCIDENTS, formatRow).then(data => {
    _aggregateAccidents(data)
  })

  return new Deck({
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
      new GeoJsonLayer({
        id: 'geojson',
        data: roads,
        opacity: 1,
        stroked: false,
        filled: false,
        lineWidthMinPixels: 0.5,
        parameters: {
          depthTest: false
        },
        getLineColor: f => _getLineColor(f, fatalities[year]),
        getLineWidth: f => _getLineWidth(f, incidents[year]),
        updateTriggers: {
          getLineColor: { year },
          getLineWidth: { year }
        },
        transitions: {
          getLineColor: 1000,
          getLineWidth: 1000
        }
      })
    ]
  })
}
