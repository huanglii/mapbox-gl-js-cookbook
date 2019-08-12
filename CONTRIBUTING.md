## 如何贡献
本 Cookbook 使用 [VuePress](https://vuepress.vuejs.org/zh/) 生成。
1. 克隆项目
2. 写作
3. 本地查看
```
yarn docs:dev # 或者：npm run docs:dev
```
4. 检查代码规范
```
yarn lint # 或者：npm run lint
```
5. 第4步检查无误后，提交 `Pull Request`

## 文档规范
文档暂无规范，后续补充。
对于示例代码部分：
1. 在 `.vuepress/components` 中添加 Vue 组件，以 `m-{名称}` 命名，如：`m-tms.vue`。
2. 在 md 文件中使用添加的 Vue 组件。
```
<ClientOnly>
  <code-view name="{名称}"/>
</ClientOnly>
```
如果不需要 `查看代码` 按钮，添加 `is-code-view` 属性为 `false`。
```
<ClientOnly>
  <code-view name="{名称}" :is-code-view="false"/>
</ClientOnly>
```
3. 如果需要 `查看代码` 按钮，在 `example` 中添加 `{name}.md`，插入相应代码即可。

### 代码规范
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

#### 细则
- **使用两个空格** – 进行缩进
- **字符串使用单引号** – 需要转义的地方除外
- **不再有冗余的变量** – 这是导致 *大量* bug 的源头!
- **无分号** – [这][1][没什么不好。][2][不骗你！][3]
- **行首不要以 `(`, `[`, or `` ` `` 开头**
  - 这是省略分号时**唯一**会造成问题的地方 – *工具里已加了自动检测！*
  - [详情][4]
- **关键字后加空格** `if (condition) { ... }`
- **函数名后加空格** `function name (arg) { ... }`
- 坚持使用全等 `===` 摒弃 `==` 一但在需要检查 `null || undefined` 时可以使用 `obj == null`。
- 一定要处理 Node.js 中错误回调传递进来的 `err` 参数。
- 使用浏览器全局变量时加上 `window` 前缀 – `document` 和 `navigator` 除外
  - 避免无意中使用到了这些命名看上去很普通的全局变量， `open`, `length`,
    `event` 还有 `name`。
- **[查看更多][5]** – *为何不试试 `standard` 规范呢！*

## 目录结构
```
├── docs                     // 文档
│   ├── .vuepress            // 所有 VuePress 相关的文件都将会被放在这里
│       ├── components       // Vue 组件
│       ├── public           // 公共文件
│       ├── snippet          // 代码段
│       ├── config.js        // VuePress 配置文件
│   ├── advance              // 页面 - 进阶
│   ├── data                 // 页面 - 数据
│   ├── example              // 页面 - 案例
│   ├── guide                // 页面 - 指南
│   ├── service              // 页面 - 服务
│   ├── README.md            // 首页
├── package.json             // package.json
└── README.md                // README
```
