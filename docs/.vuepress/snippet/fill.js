export default function addFillLayer (map) {
  map.addSource('buildings', {
    'type': 'vector',
    'scheme': 'tms',
    'tiles': [
      'https://900913.cn/geoserver/gwc/service/tms/1.0.0/buildings:Chongqing@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
    ]
  })
  map.addLayer({
    'id': 'polygon-layer-1',
    'type': 'fill',
    'source': 'buildings',
    'source-layer': 'Chongqing',
    'paint': {
      'fill-color': '#FFD273',
      'fill-outline-color': '#f00',
      'fill-opacity': 0.8
    },
    'filter': ['==', ['%', ['get', 'Floor'], 2], 0]
  })
  map.addLayer({
    'id': 'polygon-layer-2',
    'type': 'fill',
    'source': 'buildings',
    'source-layer': 'Chongqing',
    'paint': {
      'fill-pattern': 'religious-buddhist-11'
    },
    'filter': ['!=', ['%', ['get', 'Floor'], 2], 0]
  })
  map.addLayer({
    'id': 'line-layer-2',
    'type': 'line',
    'source': 'buildings',
    'source-layer': 'Chongqing',
    'paint': {
      'line-color': '#E86D68',
      'line-width': 1,
      'line-dasharray': [2, 2]
    }
  })
}
