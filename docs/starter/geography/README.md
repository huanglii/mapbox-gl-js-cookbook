# 地理与几何

## [LngLat](https://docs.mapbox.com/mapbox-gl-js/api/geography/#lnglat)

`LngLat` 对象表示给定的经度和纬度坐标，以度为单位。在 Mapbox GL 中，任何 `LngLat` 参数或选项的方法也可以是两个数字（经、纬度）的数组，参考：[LngLatLike](https://docs.mapbox.com/mapbox-gl-js/api/geography/#lnglatlike)

```js
const v1 = new mapboxgl.LngLat(-122.420679, 37.772537)
const v2 = [-122.420679, 37.772537]
const v3 = { lon: -122.420679, lat: 37.772537 }
```

## [LngLatBounds](https://docs.mapbox.com/mapbox-gl-js/api/geography/#lnglatbounds)

`LngLatBounds` 对象表示地理范围（四至），由西南和东北两个点（经纬度）定义。在 Mapbox GL 中，任何 `LngLatBounds` 参数或选项的方法也可以是两个 `LngLatLike` 的数组，参考：[LngLatBoundsLike](https://docs.mapbox.com/mapbox-gl-js/api/geography/#lnglatboundslike)

```js
const v1 = new mapboxgl.LngLatBounds(new mapboxgl.LngLat(-73.9876, 40.7661), new mapboxgl.LngLat(-73.9397, 40.8002))
const v2 = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002])
const v3 = [
  [-73.9876, 40.7661],
  [-73.9397, 40.8002],
]
const v4 = [-73.9876, 40.7661, -73.9397, 40.8002]
```

## [Point](https://docs.mapbox.com/mapbox-gl-js/api/geography/#point)

`Point` 对象有 `x` 和 `y` 属性，表示屏幕坐标（以像素为单位）。同样也有 [PointLike](https://docs.mapbox.com/mapbox-gl-js/api/geography/#pointlike)
