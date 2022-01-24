# WFS

> 标准：[Web Feature Service](http://www.opengeospatial.org/standards/wfs)

Web Feature Service（Web 要素服务），简称 WFS。WFS 标准定义了一些操作允许用户通过 HTTP 对空间数据进行查询、编辑等操作。WFS 服务中常用的操作包括：

1. GetCapabilities（获取服务中的要素类及支持的操作）
2. DescribeFeatureType（描述要素类的信息）
3. GetFeature（获取要素）
4. Transaction（创建、更新、删除数据的事务操作）

利用 `GetFeature` 操作和指定输出格式即可在 Mapbox GL JS 中使用。

加载示例（application/json 格式）：

```js
'source-id': {
  'type': 'geojson',
  'data': `https://900913.cn/geoserver/buildings/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=buildings:cq_point&outputFormat=application/json`
}
```

::: tip 提示

- wfs 会请求全部数据，不适用于大量数据。但是支持空间查询和属性查询，也会经常用到。
- 文档：[wfs/wms filter](https://docs.geoserver.org/latest/en/user/filter/index.html#filtering)
  :::
