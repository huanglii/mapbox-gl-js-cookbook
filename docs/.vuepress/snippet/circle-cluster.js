export default function addCircleClusterLayer (map) {
  // 分图层
  map.addSource('cq_point', {
    'type': 'geojson',
    'data': 'https://900913.cn/geoserver/buildings/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=buildings:cq_point&outputFormat=application/json',
    'cluster': true,
    'clusterMaxZoom': 10, // 最大聚合 zoom， 超过这个值则不聚合
    'clusterRadius': 50 // 聚合半径，默认 50
  })
  // 聚合图层
  map.addLayer({
    'id': 'clusters',
    'type': 'circle',
    'source': 'cq_point',
    'filter': ['has', 'point_count'],
    'paint': {
      //   * Blue, 20px 点数量小于 100
      //   * Yellow, 30px 点数量 100 - 750
      //   * Pink, 40px circles 点数量 [750, ∞)
      'circle-color': [
        'step',
        ['get', 'point_count'],
        '#51bbd6',
        100,
        '#f1f075',
        750,
        '#f28cb1'
      ],
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        20,
        100,
        30,
        750,
        40
      ]
    }
  })
  // 聚合数量图层
  map.addLayer({
    'id': 'cluster-count',
    'type': 'symbol',
    'source': 'cq_point',
    'filter': ['has', 'point_count'],
    'layout': {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    }
  })
  // 不聚合图层
  map.addLayer({
    'id': 'unclustered-point',
    'type': 'circle',
    'source': 'cq_point',
    'filter': ['!', ['has', 'point_count']],
    'paint': {
      'circle-color': '#11b4da',
      'circle-radius': 4,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff'
    }
  })
}
