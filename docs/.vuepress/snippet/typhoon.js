import {
  point as pointHelper,
  lineString as lineStringHelper,
  polygon as polygonHelper,
  featureCollection as featureCollectionHelper
} from '@turf/helpers'
import lineArc from '@turf/line-arc'

import lekima from '../public/data/lekima'

export default function addTyphoonLayer (map) {
  let typhoonFeatureCollection = pointsToFeatureCollection(lekima.points)
  map.addSource('typhoon-source', {
    'type': 'geojson',
    'data': typhoonFeatureCollection
  })
  // 风圈
  map.addLayer({
    'id': 'wind-circle-layer',
    'type': 'fill',
    'source': 'typhoon-source',
    'paint': {
      'fill-color': 'rgba(74, 110, 140, 0.4)',
      'fill-outline-color': 'rgba(74, 110, 140, 1)'
    },
    'filter': ['all', ['==', '$type', 'Polygon'], ['==', 'type', 'wind-circle']]
  })
  // 台风路径线
  map.addLayer({
    'id': 'track-line-layer',
    'type': 'line',
    'source': 'typhoon-source',
    'paint': {
      'line-width': [
        'interpolate',
        ['linear'],
        ['zoom'],
        5,
        1,
        10,
        3
      ],
      'line-color': '#fb5614'
    },
    'filter': ['all', ['==', '$type', 'LineString'], ['==', 'type', 'track']]
  })
  // 台风预测路径线
  map.addLayer({
    'id': 'forecast-line-layer',
    'type': 'line',
    'source': 'typhoon-source',
    'paint': {
      'line-width': [
        'interpolate',
        ['linear'],
        ['zoom'],
        5,
        1,
        10,
        3
      ],
      'line-dasharray': [3, 3],
      'line-color': [
        'match',
        ['get', 'tm'],
        '中国', '#FF4050',
        '中国香港', '#FF66FF',
        '中国台湾', '#FFA040',
        '日本', '#43FF4B',
        '美国', '#40DDFF',
        '#ff0000'
      ]
    },
    'filter': ['all', ['==', '$type', 'LineString'], ['==', 'type', 'forecast']]
  })
  // 台风路径点
  map.addLayer({
    'id': 'track-point-layer',
    'type': 'circle',
    'source': 'typhoon-source',
    'paint': {
      'circle-radius': [
        'interpolate',
        [
          'cubic-bezier',
          0.85,
          0.45,
          0,
          0.65
        ],
        ['zoom'],
        5,
        ['*', ['to-number', ['get', 'power']], 0.4],
        10,
        ['*', ['to-number', ['get', 'power']], 1]
      ],
      'circle-color': [
        'match',
        ['get', 'strong'],
        '热带低压', '#00FEDF',
        '热带风暴', '#FEF300',
        '强热带风暴', '#FE902C',
        '台风', '#FE0404',
        '强台风', '#FE3AA3',
        '超强台风', '#AE00D9',
        '#ff0000'
      ],
      'circle-opacity': 0.8,
      'circle-stroke-width': 3,
      'circle-stroke-color': 'rgba(110, 110, 110, .3)'
    },
    'filter': ['all', ['==', '$type', 'Point'], ['in', 'type', 'track', 'forecast']]
  })
  // 当前台风点
  map.addLayer({
    'id': 'points',
    'type': 'symbol',
    'source': 'typhoon-source',
    'layout': {
      'icon-image': 'typhoon'
    },
    'filter': ['all', ['==', '$type', 'Point'], ['==', 'type', 'current']]
  })
}

/**
 * 台风点数据转换为 GeoJSON FeatureCollection
 * @param {Array} typhoonPoints
 */
function pointsToFeatureCollection (typhoonPoints) {
  let typhoonFeatures = []
  // 路径点
  let trackPoints = []
  for (let i = 0, len = typhoonPoints.length; i < len; i++) {
    const typhoonPoint = typhoonPoints[i]
    let point = [typhoonPoint.lng - 0, typhoonPoint.lat - 0]
    trackPoints.push(point)
    // 属性
    let prop = { ...typhoonPoint }
    if (prop.hasOwnProperty('forecast')) {
      delete prop.forecast
    }
    if (i < len - 1) {
      typhoonFeatures.push(pointHelper(point, {
        ...prop,
        type: 'track'
      }))
    } else {
      typhoonFeatures.push(pointHelper(point, {
        ...prop,
        type: 'current'
      }))
    }
  }
  // 路径线
  typhoonFeatures.push(lineStringHelper(trackPoints, {
    type: 'track'
  }))

  let currentTyphoonPoint = typhoonPoints[typhoonPoints.length - 1]
  // 风圈
  typhoonFeatures.push(...generateWindCircleFeature(currentTyphoonPoint))

  // 取当前点的预测数据
  let forecastAgencys = currentTyphoonPoint.forecast
  for (let i = 0, len = forecastAgencys.length; i < len; i++) {
    const forecastAgency = forecastAgencys[i]
    let { forecastpoints, tm } = forecastAgency
    // 预测点
    let forecastPoints = []
    for (const forecastpoint of forecastpoints) {
      let point = [forecastpoint.lng - 0, forecastpoint.lat - 0]
      forecastPoints.push(point)
      if (i >= 1) {
        // 第一个点及当前台风点，不需要
        typhoonFeatures.push(pointHelper(point, {
          ...forecastpoint,
          tm,
          type: 'forecast'
        }))
      }
    }
    // 预测线
    typhoonFeatures.push(lineStringHelper(forecastPoints, {
      tm,
      type: 'forecast'
    }))
  }
  return featureCollectionHelper(typhoonFeatures)
}

/**
 * 生成台风点的风圈风圈（面）
 * @param {Object} typhoonPoint
 */
function generateWindCircleFeature (typhoonPoint) {
  let center = [typhoonPoint.lng, typhoonPoint.lat]
  let windCircle7 = radiiToPolygon(center, typhoonPoint.radius7)
  let windCircle10 = radiiToPolygon(center, typhoonPoint.radius10)
  let windCircle12 = radiiToPolygon(center, typhoonPoint.radius12)
  return [windCircle7, windCircle10, windCircle12]
}

/**
 * 四个方向的半径转为风圈面
 * @param {Array} center 中心点
 * @param {String} radii 风圈半径 '320|380|300|380'
 */
function radiiToPolygon (center, radii) {
  let radiiArr = radii.split('|')
  let rNE = radiiArr[0]
  let rSE = radiiArr[1]
  let rSW = radiiArr[2]
  let rNW = radiiArr[3]

  // lineArc 的一个 bug，需将 steps 设置得足够大，生成的圆弧才看起来正常
  // 详见：https://github.com/Turfjs/turf/pull/1590
  let lineArcOptions = {
    steps: 1024
  }
  let ne = lineArc(center, rNE, 0, 90, lineArcOptions).geometry.coordinates
  let se = lineArc(center, rSE, 90, 180, lineArcOptions).geometry.coordinates
  let sw = lineArc(center, rSW, 180, 270, lineArcOptions).geometry.coordinates
  let nw = lineArc(center, rNW, 270, 360, lineArcOptions).geometry.coordinates
  return polygonHelper([[...ne, ...se, ...sw, ...nw, ne[0]]], { type: 'wind-circle' })
}
