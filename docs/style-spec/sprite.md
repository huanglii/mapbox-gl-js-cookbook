# 雪碧图

> [sprite](https://docs.mapbox.com/mapbox-gl-js/style-spec/sprite/)

如果图层样式中有使用 `background-pattern`、`fill-pattern`、`line-pattern`、`fill-extrusion-pattern`、或 `icon-image` 属性，则必须设置该属性。

格式为 `URL` 字符串，必须为绝对路径。`.png`、`.json` 和 `@2x.png` 扩展会自动添加，如下：

```js
'sprite': 'http://localhost:8080/mapbox/sprite'
```

则实际会加载以下资源：

```js
// http://localhost:8080/mapbox/sprite.json
// http://localhost:8080/mapbox/sprite.png
// http://localhost:8080/mapbox/sprite@2x.json
// http://localhost:8080/mapbox/sprite@2x.png
```

通常我们会使用一些自己的图标，下面介绍几种使用自定义图标的方法：

## Mapbox Studio

最直接的方法就是在 [Mapbox Studio](https://studio.mapbox.com/) 中上传、管理图标。然后在样式预览中，将 `sprite.png`、`sprite@2x.png` `sprite.json` 文件下载下来使用。

<div align="center">
  <img :src="$withBase('/assets/images/sprite1.png')" width="420" />
  <img :src="$withBase('/assets/images/sprite2.png')" width="420" />
</div>

::: tip 提示

1. 只支持 `svg` 格式
2. 在 `iconfont` 下载的图标可以上传使用
3. 官方推荐的地图图标集：[MAKI ICONS](https://labs.mapbox.com/maki-icons/)
   :::

## addImage

通过 [map.addImage()](https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage) 方法向样式中添加图标。

```js
map.loadImage('./images/cat.png', (error, image) => {
  if (error) throw error
  if (!map.hasImage('cat')) map.addImage('cat', image)
})
```

## styleimagemissing

当样式所需的图标或图案丢失时将会触发 [styleimagemissing](https://docs.mapbox.com/mapbox-gl-js/api/#map.event:styleimagemissing)事件，通过该事件可添加指定 `id` 图标。

```js
map.on('styleimagemissing', (e) => {
  const id = e.id // 丢失图片 id
  map.loadImage(url, (error, image) => {
    if (error) throw error
    map.addImage(id, image)
  })
})
```

> 示例：[Generate and add a missing icon to the map](https://docs.mapbox.com/mapbox-gl-js/example/add-image-missing-generated/)

## spritezero

前两种方法都是单个图标加载，如果需要很多图标，需要多次加载。这个时候最好直接生成雪碧图，则可以使用 [spritezero](https://github.com/mapbox/spritezero) 创建。

### 安装

> 在 `Ubuntu` 安装成功，`Windows` 安装失败

```bash
npm install @mapbox/spritezero
```

### 使用

```js
var spritezero = require('@mapbox/spritezero')
var fs = require('fs')
var glob = require('glob')
var path = require('path')

;[1, 2].forEach(function (pxRatio) {
  var svgs = glob.sync(path.resolve(path.join(__dirname, 'input/*.svg'))).map(function (f) {
    return {
      svg: fs.readFileSync(f),
      id: path.basename(f).replace('.svg', ''),
    }
  })
  var pngPath = path.resolve(path.join(__dirname, 'output/sprite@' + pxRatio + '.png'))
  var jsonPath = path.resolve(path.join(__dirname, 'output/sprite@' + pxRatio + '.json'))

  // Pass `true` in the layout parameter to generate a data layout
  // suitable for exporting to a JSON sprite manifest file.
  spritezero.generateLayout(
    { imgs: svgs, pixelRatio: pxRatio, format: true },
    function (err, dataLayout) {
      if (err) return
      fs.writeFileSync(jsonPath, JSON.stringify(dataLayout))
    }
  )

  // Pass `false` in the layout parameter to generate an image layout
  // suitable for exporting to a PNG sprite image file.
  spritezero.generateLayout(
    { imgs: svgs, pixelRatio: pxRatio, format: false },
    function (err, imageLayout) {
      spritezero.generateImage(imageLayout, function (err, image) {
        if (err) return
        fs.writeFileSync(pngPath, image)
      })
    }
  )
})
```

::: tip 提示

1. 注意 `node` 版本 `v10` 及以上；
2. 如果需要将 `png` 转换为雪碧图，需要修改 [spritezero](https://github.com/mapbox/spritezero/blob/main/lib/generate.js#L124) 源码，将 `mapnik.Image.fromSVGBytes` 修改为 ` mapnik.Image.fromBytes` 即可；
3. **sdf support**：[Option to generate SDF sprites](https://github.com/mapbox/spritezero/pull/66)、[@elastic/spritezero](https://github.com/elastic/spritezero)、[Demo of SDF sprites](http://www.npeihl.com/maki-sdf-sprites/)；
4. 命令行工具 [spritezero-cli](https://github.com/mapbox/spritezero-cli)，可直接文件夹中生成雪碧图。
   :::
