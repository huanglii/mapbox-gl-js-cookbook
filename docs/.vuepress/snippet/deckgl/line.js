import { Deck } from '@deck.gl/core'
import { LineLayer, ScatterplotLayer } from '@deck.gl/layers'

// Source data CSV
const DATA_URL = {
  AIRPORTS:
    'https://uber.osgis.cn/uber-common/deck.gl-data/master/website/airports.json', // eslint-disable-line
  FLIGHT_PATHS:
    'https://uber.osgis.cn/uber-common/deck.gl-data/master/examples/line/heathrow-flights.json' // eslint-disable-line
}

const INITIAL_VIEW_STATE = {
  latitude: 47.65,
  longitude: 7,
  zoom: 4.5,
  maxZoom: 16,
  pitch: 50,
  bearing: 0
}

function getColor (d) {
  const z = d.start[2]
  const r = z / 10000
  return [255 * (1 - r * 2), 128 * r, 255 * r, 255 * (1 - r)]
}

function getSize (type) {
  if (type.search('major') >= 0) {
    return 100
  }
  if (type.search('small') >= 0) {
    return 30
  }
  return 60
}

export default function addLineLayer (map, id) {
  const getWidth = 3
  return new Deck({
    id,
    canvas: id,
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
      new ScatterplotLayer({
        id: 'airports',
        data: DATA_URL.AIRPORTS,
        radiusScale: 20,
        getPosition: d => d.coordinates,
        getFillColor: [255, 140, 0],
        getRadius: d => getSize(d.type)
        // pickable: true,
        // onHover: this._onHover
      }),
      new LineLayer({
        id: 'flight-paths',
        data: DATA_URL.FLIGHT_PATHS,
        getSourcePosition: d => d.start,
        getTargetPosition: d => d.end,
        getColor,
        getWidth
        // pickable: true,
        // onHover: this._onHover
      })
    ]
  })
}
