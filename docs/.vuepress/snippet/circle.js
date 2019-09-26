import { point as pointHelper } from '@turf/helpers'

export default function addCircleLayer (map) {
  const point1 = pointHelper([-76.5360, 39.1817])
  const point2 = pointHelper([-76.5340, 39.1817])
  const point3 = pointHelper([-76.5320, 39.1817])
  map.addLayer({
    'id': 'circle-layer-1',
    'type': 'circle',
    'source': {
      'type': 'geojson',
      'data': point1
    },
    'paint': {
      'circle-radius': 40,
      'circle-color': '#DA4949',
      'circle-opacity': 0.65,
      'circle-stroke-width': 30,
      'circle-stroke-color': '#DA4949',
      'circle-stroke-opacity': 0.4
    }
  })
  map.addLayer({
    'id': 'circle-layer-2',
    'type': 'circle',
    'source': {
      'type': 'geojson',
      'data': point2
    },
    'paint': {
      'circle-radius': 50,
      'circle-color': '#DA4949',
      'circle-blur': 0.8
    }
  })
  map.addLayer({
    'id': 'circle-layer-3',
    'type': 'circle',
    'source': {
      'type': 'geojson',
      'data': point3
    },
    'paint': {
      'circle-radius': 40,
      'circle-opacity': 0,
      'circle-stroke-width': 30,
      'circle-stroke-color': '#DA4949',
      'circle-stroke-opacity': 0.5
    }
  })
}
