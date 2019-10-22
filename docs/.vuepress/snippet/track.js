import { point as pointHelper, featureCollection as featureCollectionHelper } from '@turf/helpers'
import { coordAll } from '@turf/meta'
import bearing from '@turf/bearing'

export default function addTrackLayer (map, data) {
  let origin = [106.545608, 29.555456]
  let destination = [106.579902, 29.562958]

  let point = pointHelper(origin)
  let trackPoints = coordAll(data)
  let steps = trackPoints.length - 1
  let counter = 0

  map.addSource('track-source', {
    'type': 'geojson',
    'data': data
  })
  map.addSource('point-source', {
    'type': 'geojson',
    'data': point
  })
  map.addLayer({
    'id': 'line-layer',
    'type': 'line',
    'source': 'track-source',
    'paint': {
      'line-width': 10,
      'line-color': '#3d93fd'
    },
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    }
  })
  map.addLayer({
    'id': 'line-arrow-layer',
    'type': 'symbol',
    'source': 'track-source',
    'layout': {
      'symbol-placement': 'line',
      'symbol-spacing': 3,
      'icon-image': 'arrow',
      'icon-size': 0.5
    },
    'paint': {
      'icon-opacity': 0.6
    }
  })
  map.addLayer({
    'id': 'point-layer',
    'type': 'symbol',
    'source': {
      'type': 'geojson',
      'data': featureCollectionHelper([
        pointHelper(origin, { name: '两路口' }),
        pointHelper(destination, { name: '小什字' })
      ])
    },
    'paint': {
      'text-color': '#EB6338',
      'text-halo-color': '#FFE3AB',
      'text-halo-width': 0.5,
      'text-halo-blur': 0.5
    },
    'layout': {
      'icon-image': 'chongqing-rail-transit',
      'text-field': '{name}',
      'text-offset': [0, -0.8],
      'text-anchor': 'bottom',
      'text-size': 14
    }
  })
  map.addLayer({
    'id': 'track',
    'source': 'point-source',
    'type': 'symbol',
    'layout': {
      'icon-size': 1.2,
      'icon-image': 'bicycle-15',
      'icon-rotate': ['-', ['get', 'bearing'], 90],
      'icon-rotation-alignment': 'map',
      'icon-allow-overlap': true,
      'icon-ignore-placement': true
    }
  })

  function animate () {
    // 更新点坐标
    point.geometry.coordinates = trackPoints[counter]

    // 计算 bearing
    point.properties.bearing = bearing(
      pointHelper(trackPoints[counter >= steps ? counter - 1 : counter]),
      pointHelper(trackPoints[counter >= steps ? counter : counter + 1])
    )

    // 更新数据源
    map.getSource('point-source').setData(point)
    map.easeTo({
      center: point.geometry.coordinates
      // bearing: point.properties.bearing
    })

    if (counter < steps) {
      requestAnimationFrame(animate)
    }
    counter++
  }
  // 开始动画
  animate()
}
