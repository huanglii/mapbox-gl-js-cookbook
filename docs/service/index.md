# 服务
::: tip
开放地理信息联盟（Open GeoSpatial Consortium，OGC）
:::

::: tip
开源空间信息基金会（Open Source Geospatial Foundation，OSGeo）
:::

## TMS
Tiled Map Service（瓦片地图服务），简称 `tms`，由 `OSGeo` 提出的切片规则。`geoserver` 的 `tms` 服务就是按照这个标准来的。
::: warning  
MapboxGL 在加载 `tms` 服务时，需要注意 `source` 的 `scheme` 属性。它定义了服务切片的规则，有两个值可选 **`xyz`** 和 **`tms`**，默认是 **`xyz`**。

其中 **`xyz`** 代表常用的切片规则，即 `OGC` 标准，切片源点在左上角。**`tms`** 是 `OSGeo` 提出的切片规则，切片源点是左下角。
:::

加载示例：(geoserver)
``` js
"{source-id}": {
  "type": "vector",
  "tiles": [
    "https://a.example.com/geoserver/gwc/service/tms/1.0.0/example:example@EPSG:900913@pbf/{z}/{x}/{y}.pbf"
  ],
  "scheme": "tms" // 此处修改为 tms
},
 ```

<ClientOnly>
  <code-view name="tms"/>
</ClientOnly>

## WMS
Web Map Service(Web地图服务)，简称`WMS`，由`OGC`制定，是一种动态服务。
**`WMS`** 是根据传入的地理范围，在服务器端进行渲染，返回图片。`MapboxGL`只支持`EPSG:3857`坐标系。

加载示例（png）
``` js
'source': {
  'type': 'raster',
  'tiles': [
    'https://900913.cn/geoserver/china_admin/wms?service=WMS&version=1.1.0&request=GetMap&layers=china_admin:Chongqing&bbox={bbox-epsg-3857}&width=661&height=768&srs=EPSG:3857&format=image%2Fpng&TRANSPARENT=TRUE'
  ],
}
```

<ClientOnly>
  <code-view name="wms"/>
</ClientOnly>

## WMTS
Web Map Tile Service（网络地图瓦片服务），简称 `WMTS`，由`OGC`制定。
* 图片格式
``` js
"source-id": {
  "type": "raster",
  "tiles": [
    "https://900913.cn/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=buildings:Chongqing&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILECOL={x}&TILEROW={y}"
    // 或 geoserver rest 服务
    // "https://900913.cn/geoserver/gwc/service/wmts/rest/buildings:Chongqing/polygon/EPSG:900913/EPSG:900913:{z}/{y}/{x}?format=image/png"
  ]
}
```

* 矢量格式
``` js
"source": {
  "type": "vector",
  "tiles": [
    "https://900913.cn/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=buildings:cq_point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"
  ]
}
```

<ClientOnly>
  <code-view name="wmts"/>
</ClientOnly>

## WFS
Web Feature Service(Web要素服务)，简称`WFS`, 是`OGC`标准之一。**`WFS`** 是服务器将矢量数据发送给客户端。在使用  **`WFS`** 时地图是由客户端绘制的。

加载示例（geojson）
``` js
"source": {
  "type": "geojson",
  "data": "https://900913.cn/geoserver/buildings/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=buildings%3Acq_point&outputFormat=application%2Fjson",
}
```

<ClientOnly>
  <code-view name="wfs"/>
</ClientOnly>
