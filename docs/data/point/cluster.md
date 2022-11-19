# 聚合

聚合仅用于 `geojson` 数据源，并设置 [cluster](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson-cluster) 为 `true`。

```js{4}
map.addSource('points', {
  type: 'geojson',
  data: 'https://900913.cn/geoserver/buildings/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=buildings:cq_point&outputFormat=application/json',
  cluster: true,
  clusterMaxZoom: 10, // 最大聚合 zoom， 超过这个值则不聚合
  clusterRadius: 50, // 聚合半径，默认 50
})
```

添加聚合图层时，分三个图层：① 聚合图层，② 聚合数量图层，③ 不聚合的点图层。

<ClientOnly>
  <common-code-view name="data-circle-cluster"/>
</ClientOnly>
