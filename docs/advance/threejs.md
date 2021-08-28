# ThreeJS

## 3D 文本标注
Mapbox GL 默认文本标注图层不支持高度属性，这里使用 ThreeJS 来实现有高度的文本标注。

<ClientOnly>
  <common-code-view name="threejs-text-3d" />
</ClientOnly>

该方法需要引入字体文件，ThreeJS 官方案例中提供了几种英文字体的 `json` 文件，如果想要显示中文，可以下载相关字体的 `ttf` 格式文件，在 [Facetype.js](https://gero3.github.io/facetype.js/) 网站生成 `json` 文件，即可使用。

但是一个完整的中文字体文件会很大，可通过 Google 开源项目 [sfntly](https://github.com/googlefonts/sfntly) 中的 `sfnttool` 工具提取指定的文字。

#### 字体提取步骤：
1. 下载 `sfnttool` 工具（[直接下载](https://download.csdn.net/download/huangli0/12031450) 或 从源码 [sfntly](https://github.com/googlefonts/sfntly) 编译）
2. 提取指定文字，输出 `ttf` 文件（需要 java 环境）
``` bash
java -jar sfnttool.jar -s '茶牛奶咖啡' 庞门正道标题体2.0增强版.ttf PangMenZhengDao_Regular.ttf
```
3. 在 [Facetype.js](https://gero3.github.io/facetype.js/) 网站生成 `json` 文件
4. 使用
``` js
const loader = new THREE.FontLoader()
loader.load('PangMenZhengDao_Regular.json', font => {
  const textBufferGeometry = new THREE.TextBufferGeometry('牛奶', {
    font
  })
})
```