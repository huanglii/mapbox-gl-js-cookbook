# HexagonLayer

[HexagonLayer](https://deck.gl/docs/api-reference/aggregation-layers/hexagon-layer)

## 示例

<ClientOnly>
  <common-code-view name="deckgl-hexagon-layer" />
</ClientOnly>

## 参数

### `radius` (Number, optional)

六边形半径，单位：m，默认：`1000`

### `extruded` (Boolean, optional)

是否启用单元格提升。单元格高程比例通过每个单元格中点的计数来确定。如果设置为`false`，则所有单元格都是平的。默认: `false`

### `getPosition`([Function](https://deck.gl/docs/developer-guide/using-layers#accessors), optional)

调用该方法以检索每个点的位置。默认: `object => object.position`
