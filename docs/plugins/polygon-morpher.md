# PolygonMorpher

[@naivemap/mapbox-gl-polygon-morpher](https://www.npmjs.com/package/@naivemap/mapbox-gl-polygon-morpher) 实现多边形平滑变化效果。

```bash
# yarn
yarn add @naivemap/mapbox-gl-polygon-morpher
# 或 npm
npm i @naivemap/mapbox-gl-polygon-morpher
```

```js
import PolygonMorpher from '@naivemap/mapbox-gl-polygon-morpher'

// 1. 构造一个 PolygonMorpher
const geojsonSource = map.getSource('geojson-source') // 只需要一个 GeoJSON 数据源
polygonMorpher = new PolygonMorpher(geojsonSource)

// 2. 变化到新的多边形
const newPolygonFeature = { type: 'Feature', geometry: { type: 'Polygon', coordinates: [] } }
polygonMorpher.morph(newPolygonFeature)
```

<ClientOnly>
  <common-code-view name="plugins-polygon-morpher"/>
</ClientOnly>
