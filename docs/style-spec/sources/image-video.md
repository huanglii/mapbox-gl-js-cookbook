# 图片 & 视频

图片（[image](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#image)）和视频（[video](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#video)）数据源，通过指定 `url` 和 `coordinate` 将图片和视频显示到地图。注意其坐标系必须是 **网络墨卡托(EPSG:3857)**。

如果是其他坐标系的图片，可以使用 [@naivemap/mapbox-gl-image-layer](https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-image-layer/README.md) 插件加载。
