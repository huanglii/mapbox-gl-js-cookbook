# OGC API

[OGC API](https://ogcapi.ogc.org/) 系列标准正在开发中，以使任何人都可以轻松地向 Web 提供地理空间数据。这些标准建立在 OGC Web 服务标准（WMS、WFS、WCS、WPS 等）的遗留基础上，但定义了利用现代 Web 开发实践的以资源为中心的 API。

## OGC API - FEATURES

[OGC API - FEATURES](https://github.com/opengeospatial/ogcapi-features) 即 WFS 3.0，提供在 Web 上创建、修改和查询空间数据的功能，并为希望遵循标准方式共享要素数据的 API 指定要求和建议。

如，查询 `test:point` 集合下的所有数据：

```
https://example.com/geoserver/ogc/features/collections/test:point/items
```
