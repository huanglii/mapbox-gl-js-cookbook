import * as THREE from 'three'
import Text3DLayer from './text-3d-layer'

const symbolPoints = {
  'type': 'FeatureCollection',
  'features': [{
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [-87.61787282255271, 41.86594037453304]
    },
    'properties': {
      'title': '咖啡',
      'height': 30,
      'color': '#ee7170'
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [-87.61615278964635, 41.86594037453304]
    },
    'properties': {
      'title': '牛奶',
      'height': 20,
      'color': '#72ba6f'
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [-87.61787282255271, 41.866463903152635]
    },
    'properties': {
      'title': '茶',
      'height': 40,
      'color': '#7372eb'
    }
  }]
}

export default function addText3DLayer (map, fontUrl) {
  map.addSource('points', {
    type: 'geojson',
    data: symbolPoints
  })
  map.addLayer({
    'id': 'room-extrusion',
    'type': 'fill-extrusion',
    'source': {
      'type': 'geojson',
      'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson'
    },
    'paint': {
      'fill-extrusion-color': ['get', 'color'],
      'fill-extrusion-height': ['get', 'height'],
      'fill-extrusion-base': ['get', 'base_height'],
      'fill-extrusion-opacity': 0.5
    }
  })
  map.addLayer({
    'id': 'point-layer',
    'type': 'circle',
    'source': 'points',
    'paint': {
      'circle-radius': 3,
      'circle-color': 'red'
    }
  })
  const loader = new THREE.FontLoader()
  loader.load(fontUrl, font => {
    let text3DLayer = new Text3DLayer({
      'id': 'symbol-layer',
      // 'source': symbolPoints,
      'source': 'points',
      'style': {
        'height-offset': 1,
        'height': ['get', 'height'],
        'text': ['get', 'title'],
        // 'text-color': ['get', 'color'],
        'text-color': '#fff',
        'font-size': 5
      },
      'font': font
    })
    map.addLayer(text3DLayer)
  })
}
