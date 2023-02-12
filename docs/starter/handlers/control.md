# 控件

## 定位

[GeolocateControl](https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol) 提供一个按钮，该按钮使用浏览器的 [Geolocation API](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation) 在地图上定位用户。

```js
map.addControl(new mapboxgl.GeolocateControl())
```

## 全屏

[FullscreenControl](https://docs.mapbox.com/mapbox-gl-js/api/markers/#fullscreencontrol) 可以切换地图的全屏模式。

```js
map.addControl(new mapboxgl.FullscreenControl())
```

## 导航

[NavigationControl](https://docs.mapbox.com/mapbox-gl-js/api/markers/#navigationcontrol) 包含缩放和指南针。

```js
map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }))
```

## 比例尺

[ScaleControl](https://docs.mapbox.com/mapbox-gl-js/api/markers/#scalecontrol) 显示地图上的距离与地面上相应距离的比率。

```js
map.addControl(new mapboxgl.ScaleControl())
```

<ClientOnly>
  <common-code-view name="starter-handlers-control" :is-code-view="false"/>
</ClientOnly>

## 自定义

Mapbox GL JS 提供了 **`IControl`** 接口。自定义控件必须实现 **`onAdd`** 和 **`onRemove`** 方法，并且有一个 HTML 元素，通常为 `div` 元素。如果要使用 Mapbox GL JS 默认控件样式，需要给元素添加 **`mapboxgl-ctrl`** 样式。

### 官方示例

```js
// es6 类
class HelloWorldControl {
  onAdd(map) {
    this._map = map
    this._container = document.createElement('div')
    this._container.className = 'mapboxgl-ctrl'
    this._container.textContent = 'Hello, world'
    return this._container
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container)
    this._map = undefined
  }
}

// es5 原型类
function HelloWorldControl() {}

HelloWorldControl.prototype.onAdd = function (map) {
  this._map = map
  this._container = document.createElement('div')
  this._container.className = 'mapboxgl-ctrl'
  this._container.textContent = 'Hello, world'
  return this._container
}

HelloWorldControl.prototype.onRemove = function () {
  this._container.parentNode.removeChild(this._container)
  this._map = undefined
}
```

### 城市选择器

一个快速定位城市的控件。GitHub 地址：[城市选择器](https://github.com/huanglii/city-selector-control)

<ClientOnly>
  <common-code-view name="starter-handlers-city-selector" :is-code-view="false"/>
</ClientOnly>
