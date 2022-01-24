import { point as pointHelper, featureCollection as featureCollectionHelper } from '@turf/helpers'
import { coordAll } from '@turf/meta'
import bearing from '@turf/bearing'

import data from './data/track.json'

export default function addTrackCarLayer(map) {
  let points = coordAll(data)
  let steps = points.length - 1
  let origin = points[0] // 起点
  let destination = points[steps] // 终点

  let point = pointHelper(origin)
  // 轨迹线
  let trackLine = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [origin],
    },
  }
  map.addSource('track-source', {
    type: 'geojson',
    data: trackLine,
  })
  map.addSource('point-source', {
    type: 'geojson',
    data: point,
  })
  map.addLayer({
    id: 'track-line-layer',
    type: 'line',
    source: 'track-source',
    paint: {
      'line-width': 10,
      'line-color': '#3d93fd',
    },
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
    },
  })
  map.addLayer({
    id: 'track-line-arrow-layer',
    type: 'symbol',
    source: 'track-source',
    layout: {
      'symbol-placement': 'line',
      'symbol-spacing': 3,
      'icon-image': 'arrow',
      'icon-size': 0.5,
    },
    paint: {
      'icon-opacity': 0.6,
    },
  })
  map.addLayer({
    id: 'track-point-layer',
    source: 'point-source',
    type: 'symbol',
    layout: {
      visibility: 'visible',
      'icon-size': 0.65,
      'icon-image': 'car',
      'icon-rotate': ['get', 'bearing'],
      'icon-rotation-alignment': 'map',
      'icon-allow-overlap': true,
      'icon-ignore-placement': true,
    },
  })
  map.addLayer({
    id: 'point-layer',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: featureCollectionHelper([
        pointHelper(origin, { name: '两路口', icon: 'start' }),
        pointHelper(destination, { name: '小什字', icon: 'end' }),
      ]),
    },
    paint: {
      'text-color': '#E86C48',
      'text-halo-color': '#FFF',
      'text-halo-width': 0.3,
      'text-halo-blur': 0.3,
    },
    layout: {
      'icon-size': 0.5,
      'icon-image': ['get', 'icon'],
      'icon-anchor': 'bottom',
      'text-anchor': 'bottom',
      'text-size': 14,
    },
  })

  let counter = 0
  function animate() {
    let lnglat = points[counter]
    // 更新点坐标
    point.geometry.coordinates = lnglat
    // 计算 bearing
    point.properties.bearing = bearing(
      pointHelper(points[counter >= steps ? counter - 1 : counter]),
      pointHelper(points[counter >= steps ? counter : counter + 1])
    )
    // 更新线坐标
    trackLine.geometry.coordinates.push(lnglat)
    // 更新数据源
    map.getSource('track-source').setData(trackLine)
    map.getSource('point-source').setData(point)
    // map.panTo(lnglat)
    map.easeTo({
      pitch: 30,
      zoom: 16,
      center: lnglat,
      bearing: point.properties.bearing,
    })

    if (counter < steps) {
      requestAnimationFrame(animate)
    } else {
      map.setLayoutProperty('track-point-layer', 'visibility', 'none')
      map.easeTo({
        pitch: 0,
        zoom: 13.5,
        center: [106.573193, 29.558285],
        bearing: 0,
      })
    }
    counter++
  }
  // 开始动画
  animate()
}
