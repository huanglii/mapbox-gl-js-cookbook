export default function addWMTSLayer (map) {
  // 矢量瓦片格式
  map.addLayer({
    'id': 'wmts-layer-2',
    'type': 'fill',
    'source': {
      'type': 'vector',
      'tiles': [
        'https://900913.cn/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=buildings:Chongqing&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'
      ]
    },
    'source-layer': 'Chongqing',
    'paint': {
      'fill-color': '#7ec699'
    }
  })
  // png 格式
  map.addLayer({
    'id': 'wmts-layer-1',
    'type': 'raster',
    'source': {
      'type': 'raster',
      'tiles': [
        'https://900913.cn/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=buildings:cq_point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILECOL={x}&TILEROW={y}'
        // 或  'https://900913.cn/geoserver/gwc/service/wmts/rest/buildings:Chongqing/polygon/EPSG:900913/EPSG:900913:{z}/{y}/{x}?format=image/png'
      ]
    }
  })
}
