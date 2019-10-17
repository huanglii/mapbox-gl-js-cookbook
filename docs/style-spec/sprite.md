# 雪碧图

如果图层样式中有使用 `background-pattern`、`fill-pattern`、`line-pattern`、`fill-extrusion-pattern`、或 `icon-image` 属性，则必须设置该属性。

格式为 `URL` 字符串，必须为绝对路径。 `.png`、`.json` 和 `@2x.png` 扩展会自动添加，如下：
``` js
'sprite': 'http://localhost:8081/mapbox/sprite'
```
则实际会加载以下资源：
``` js
// http://localhost:8081/mapbox/sprite.json
// http://localhost:8081/mapbox/sprite.png
// http://localhost:8081/mapbox/sprite@2x.png 
```

通常我们会使用一些自己的图标，下面介绍几种使用自定义图标的方法。

## Studio
最直接的方法就是在 [Studio](https://studio.mapbox.com/) 中去上传、管理图标。
<div align="center">
  <img :src="$withBase('/images/sprite1.png')" width="580" />
</div>

在样式预览中，我们可以将 `sprite.png`、`sprite@2x.png` `sprite.json` 文件下载下来，放到服务器使用。

<div align="center">
  <img :src="$withBase('/images/sprite2.png')" width="580" />
</div>

::: tip
1. 只支持 `svg` 格式；
2. 在 `iconfont` 下载的图标，可以上传使用。
:::

## addImage
通过 `map.addImage()` 方法向样式中添加图标。
``` js
map.loadImage('/images/cat.png', (error, image) => {
  if (error) throw error
  // addImage(id, image. options)
  map.addImage('cat', image)
})
// 或
if (!map.hasImage('cat')) map.addImage('cat', './cat-icon.png')
```

::: tip
文档：[addImage](https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage)
:::

## styleimagemissing
当样式所需的图标或图案丢失时将会触发该事件。

``` js
map.on('styleimagemissing', e => {
  var id = e.id // 丢失图片 id
  map.loadImage(url, (error, image) => {
    if (error) throw error
    map.addImage(id, image)
  })
})
```

::: tip
文档：[styleimagemissing](https://docs.mapbox.com/mapbox-gl-js/api/#map.event:styleimagemissing)

示例：[Generate and add a missing icon to the map](https://docs.mapbox.com/mapbox-gl-js/example/add-image-missing-generated/)
:::

## spritezero
前面两种方法都是单个图加载，如果需要很多图标，最好直接生成雪碧图。可以使用 [spritezero](https://github.com/mapbox/spritezero) 来创建，它提供了 `cli` 工具，即 `spritezero-cli`，更为方便。

### 安装
注意需要 `node` 版本 `v8` 才能安装成功。
``` bash
npm install -g @mapbox/spritezero-cli
```

### 使用
``` bash
spritezero [output filename] [input directory]
  --retina      shorthand for --ratio=2
  --ratio=[n]   pixel ratio
```

::: tip
1. 该工具只支持 `svg` 格式；
2. 我在 `iconfont` 上下载的 svg 格式，生成不太成功，估计是 svg 格式上的问题吧。
:::

## 代码生成
我们还可以使用其他生成雪碧图的工具去生成。
1. [spritezero](https://github.com/mapbox/spritezero)
2. [spritesmith](https://github.com/Ensighten/spritesmith)
3. [开源方案搭建可离线的精美矢量切片地图服务-8.mapbox 之sprite大图图标文件生成（附源码）](https://www.cnblogs.com/ATtuing/p/9273391.html)
4. ...
