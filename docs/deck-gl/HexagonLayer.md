# 蜂窝热力图（HexagonLayer）
[示例数据](https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/sf-bike-parking.json)

## 示例

``` js
import { HexagonLayer } from '@deck.gl/aggregation-layers'

const layer = new HexagonLayer({
  id: 'hexagon-layer',
  data,
  pickable: true,
  extruded: true,
  radius: 200,
  elevationScale: 4,
  getPosition: d => d.COORDINATES,
  onHover: ({ object, x, y }) => {
    const tooltip = `${object.centroid.join(', ')}\nCount: ${object.points.length}`;
    /* Update tooltip
        http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
    */
  }
})
```

## 参数

### `extruded`(Boolean, optional)

是否启用单元格提升。单元格高程比例通过每个单元格中点的计数来确定。如果设置为`false`，则所有单元格都是平的。默认: `false`

### `getPosition`([Function](https://deck.gl/#/documentation/developer-guide/using-layers?section=accessors), optional)

调用该方法以检索每个点的位置。默认: `object => object.position`

<ClientOnly>
  <common-code-view name="deckgl-hexagon-layer" />
</ClientOnly>
