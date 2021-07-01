export default function addFillLayer (map, data) {
  map.addSource('chongqing', {
    'type': 'geojson',
    'data': data
  })
  map.addLayer({
    'id': 'polygon-layer-1',
    'type': 'fill',
    'source': 'chongqing',
    'paint': {
      'fill-color': '#FFD273',
      'fill-outline-color': '#f00',
      'fill-opacity': 0.8
    },
    'filter': ['==', ['%', ['get', 'value'], 3], 0]
  })
  // 纹理
  map.addLayer({
    'id': 'polygon-layer-2',
    'type': 'fill',
    'source': 'chongqing',
    'paint': {
      'fill-pattern': 'religious-buddhist-11'
    },
    'filter': ['==', ['%', ['get', 'value'], 3], 1]
  })
  // 虚线
  map.addLayer({
    'id': 'line-layer-2',
    'type': 'line',
    'source': 'chongqing',
    'paint': {
      'line-color': '#0000FF',
      'line-width': 1,
      'line-dasharray': [5, 5]
    },
    'filter': ['==', ['%', ['get', 'value'], 3], 2]
  })
}
