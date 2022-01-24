export default function addCircleClusterLayer(map, data) {
  // 分图层
  map.addSource('cq_point', {
    type: 'geojson',
    data: data,
    cluster: true,
    clusterMaxZoom: 10, // 最大聚合 zoom， 超过这个值则不聚合
    clusterRadius: 50, // 聚合半径，默认 50
  })
  // 聚合图层
  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'cq_point',
    filter: ['has', 'point_count'],
    paint: {
      //   * Blue, 20px 点数量小于 5
      //   * Yellow, 30px 点数量 5 - 10
      //   * Pink, 40px circles 点数量 [10, ∞)
      'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 5, '#f1f075', 10, '#f28cb1'],
      'circle-radius': ['step', ['get', 'point_count'], 20, 5, 30, 10, 40],
    },
  })
  // 聚合数量图层
  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'cq_point',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12,
    },
  })
  // 不聚合图层
  map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'cq_point',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#11b4da',
      'circle-radius': 4,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff',
    },
  })
}
