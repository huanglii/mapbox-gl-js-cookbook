# Mapbox 标准样式

Mapbox GL JS v3 支持 [Mapbox 标准样式](https://www.mapbox.com/blog/standard-core-style)，通过强大的动态灯光系统、3D 地标建筑和精心制作的符号美学，实现了高性能和优雅的 3D 制图体验。

<ClientOnly>
  <common-code-view name="starter-standard-style-index"/>
</ClientOnly>

Mapbox 标准样式类似于底图 (`basemap`) 的概念，但又不同于传统底图，除了引入精美的 3D 地图外，还提供了一种简单且更高效的地图构建方式。

::: warning

1. `map.queryRenderedFeatures` 不返回标准样式中的要素信息
   :::

## [导入](https://docs.mapbox.com/style-spec/reference/imports/)

导入可用于将其他样式内容添加到当前样式中，仅需引用其他样式的 URL，而不再需要复制图层。如：

```json
{
  "version": 8,
  "imports": [
    {
      "id": "basemap",
      "url": "mapbox://styles/mapbox/standard"
    }
  ],
  "layers": []
}
```

<ClientOnly>
  <common-code-view name="starter-standard-style-imports"/>
</ClientOnly>

## [插槽](https://docs.mapbox.com/style-spec/reference/slots/)

插槽允许在样式中创建定义明确的插入点，如：通常“面”图层需要插入到“线”图层下方，在标准样式之前，需要通过指定图层 id 来实现，一旦 id 发生变化，则会抛出错误，而在新的标准样式中，只需要指定相应的插槽即可。

```json
{
  "layers": [
    ...,
    {
      "id": "bottom",
      "type": "slot",
      "metadata": {
        "mapbox:description": "Above polygons (land, landuse, water, etc.)"
      }
    },
    ...
  ]
}
```

当前提供的标准样式（`mapbox://styles/mapbox/standard`）中定义了三个插槽：`bottom`, `middle` 和 `top`。

- `bottom`：突出显示路径和道路、建筑物、模型和注记下方的区域（面）。
- `middle`：覆盖区域，或在路径和道路上方，但在建筑物、模型和注记下方添加的线条。
- `top`：将数据放置在 POI 图层上方，但在地点和交通注记下方。

## [配置](https://docs.mapbox.com/style-spec/reference/config/)

配置选项允许自定义样式的各个方面，通过在样式的 `schema` 属性中声明配置选项，以提供更多对样式的灵活性配置。它们可以在导入样式时设置，也可以在客户端运行时进行更改。各图层可以使用配置选项根据配置的值来修改其外观行为。

### 1. 配置

配置显示地点注记 (`showPlaceLabels`) 选项，默认 `true`。

```json{3}
{
  "schema": {
    "showPlaceLabels": {
      "default": true,
      "type": "boolean",
      "metadata": {
        "mapbox:title": "Place labels",
        "mapbox:description": "Shows and hides place label layers.",
        "mapbox:group": "Visibility"
      }
    },
    "lightPreset": {
      "default": "noon",
      "values": ["dawn", "noon", "dusk", "night"]
    }
  }
}
```

### 2. 使用

根据 `showPlaceLabels` 值设置是否显示图层。

```json{9}
{
  "layers": [
    {
      "id": "natural-point-label",
      "type": "symbol",
      "source": "composite",
      "source-layer": "natural_label",
      "layout": {
        "visibility": ["case", ["config", "showPlaceLabels"], "visible", "none"]
      }
    }
  ]
}
```

### 3. 修改

隐藏注记图层。

```ts
map.setConfigProperty('basemap', 'showPlaceLabels', false)
```

<!-- ## 模型

<ClientOnly>
  <common-code-view name="starter-standard-style-model"/>
</ClientOnly> -->
