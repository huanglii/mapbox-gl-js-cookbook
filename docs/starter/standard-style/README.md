# Mapbox 标准样式

Mapbox GL JS v3 支持 [Mapbox 标准样式](https://www.mapbox.com/blog/standard-core-style)，逼真的 3D 灯光系统，地标、建筑和地形阴影的 3D 模型以及许多其他视觉增强功能。

<ClientOnly>
  <common-code-view name="starter-standard-style-index"/>
</ClientOnly>

## 底图

通过新的 [Mapbox Maps SDK](https://www.mapbox.com/blog/maps-sdks-new-versions)，Mapbox 正在建立“底图”的概念，`Mapbox Standard` 是第一个遵循这一范例的标准。底图为构建地图体验提供了始终最新的视觉画布。它包含希望在地图上看到的所有元素，例如自然特征、道路、建筑物和兴趣点。它还具有引人入胜的现代设计，由制图师保持新鲜感，并改进了界面，可在该底图之上添加定制的位置体验。

::: warning

1. `map.queryRenderedFeatures` 不返回标准样式中的要素信息
   :::

## [导入](https://docs.mapbox.com/style-spec/reference/imports/)

导入可用于将其他样式内容添加到当前样式中。不用复制单个图层，而是仅引用其他样式的 URL，因此导入的样式始终是最新版本。如：

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

插槽允许在样式中创建定义明确的插入点，如：通常“面”图层需要插入到“线”图层下方，在标准样式之前，需要通过指定图层 id 来实现，一旦 id 发生变化，则会抛出错误，而在新的标准样式中，只需要指定相应的插槽即可。插槽图层仅充当占位符，本身不会呈现任何内容。

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

标准样式（`mapbox://styles/mapbox/standard`）中定义了三个插槽：`bottom`, `middle` 和 `top`。

- `bottom`：突出显示路径和道路、建筑物、模型和注记下方的区域（面）。
- `middle`：覆盖区域，或在路径和道路上方，但在建筑物、模型和注记下方添加的线条。
- `top`：将数据放置在 POI 图层上方，但在地点和交通注记下方。这允许对自定义符号注记图层进行优先级排序，同时仍显示 Mapbox POI 图层并避免与地点和交通注记冲突。

## [配置](https://docs.mapbox.com/style-spec/reference/config/)

配置选项允许自定义样式的各个方面。样式现在可以在其模式 (`schema`) 中声明配置选项。它们可以在导入样式时设置，也可以在客户端运行时进行更改。各图层可以使用配置选项根据配置的值更改其外观。

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
