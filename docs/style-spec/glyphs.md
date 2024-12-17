# 字体

> [glyphs](https://docs.mapbox.com/mapbox-gl-js/style-spec/glyphs/)

如果图层样式中有使用 `text-field` 属性，则必须设置该属性。

如需使用自定义字体，有几种方法：

1. 在 [Mapbox Studio](https://studio.mapbox.com/) 上传 `.TTF` 或者 `.OTF` 字体。
2. 使用 [Font Maker](https://maplibre.org/font-maker/)。<Badge type="important" text="推荐" vertical="top" />
3. 使用 [mapbox/node-fontnik](https://github.com/mapbox/node-fontnik) 工具生成。使用方法如下：

```sh
# 克隆项目并安装
git clone git@github.com:mapbox/node-fontnik.git
cd node-fontnik & npm i
# 进入 bin 目录，转换字体文件
cd bin
node ./build-glyphs /home/fonts/open-sans/OpenSans-Regular.ttf ./glyphs/OpenSans Regular
```

也可使用下面的代码生成：

```js
var fontnik = require('fontnik')
var fs = require('fs')
var path = require('path')

var convert = function (fileName, outputDir) {
  var font = fs.readFileSync(path.resolve(__dirname + '/' + fileName))
  output2pbf(font, 0, 255, outputDir)
}

function output2pbf(font, start, end, outputDir) {
  if (start > 65535) {
    console.log('done!')
    return
  }
  fontnik.range(
    {
      font: font,
      start: start,
      end: end,
    },
    function (err, res) {
      var outputFilePath = path.resolve(__dirname + '/' + outputDir + start + '-' + end + '.pbf')
      fs.writeFile(outputFilePath, res, function (err) {
        if (err) {
          console.error(err)
        } else {
          output2pbf(font, end + 1, end + 1 + 255, outputDir)
        }
      })
    }
  )
}

convert('./fonts/open-sans/OpenSans-Regular.ttf', './glyphs/OpenSans Regular/')
```

> 参考：[mapbox/node-fontnik 工具使用介绍](https://www.jianshu.com/p/23634e54487e)

::: warning
经测试，上面几种方法（包括在 Mapbox Studio 中上传的字体）生成的字体对中文不生效，中文字体会显示为默认字体，如下：

<img :src="$withBase('/assets/images/fonts.png')" width="200" />

原因在于 Mapbox GL JS 默认使用本地字体渲染表意文字，可在初始化地图时将 `localFontFamily` 和 `localIdeographFontFamily` 设置为 `undefined`，即可使用生成的中文字体。感谢 [mrxuanz](https://github.com/huanglii/mapbox-gl-js-cookbook/issues/28)

```ts
const map = new mapboxgl.Map({
  // ...
  localFontFamily: undefined,
  localIdeographFontFamily: undefined,
})
```

<img :src="$withBase('/assets/images/fonts1.png')" width="200" />
:::
