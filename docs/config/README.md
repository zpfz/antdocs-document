---
title: 首页
---

# 首页

默认的主题提供了一个首页（Homepage）的布局 (用于 [这个网站的主页](/))。想要使用它，需要在你的根级 `README.md` 的 YAML front matter 指定 `home: true`。以下是一个如何使用的例子：

```yaml
---
home: true
heroImage: /assets/logo.png
actions:
  - text: 快速上手
    link: /guide/
    type: primary
    size: large
  - text: 在线演示
    link: https://codesandbox.io/s/zpfz-antdocs-document-0jzb8r
    type: primary
    ghost: true
    size: large
features:
  - title: Less 预处理器
    details: 从 Stylus 样式过渡到 Less 样式，统一使用预处理器，让 node_modules 不再过度臃肿。
  - title: Ant Design 风格
    details: 主题搭载 Ant Design of Vue 组件，支持 Markdown 语法与 Ant Design 组件混用。
  - title: 各种功能优化
    details: 新增底部栏目设置，优化行内代码、代码块以及其他各种显示效果和动画，真正实现风格迁移。
footerWrap: 
  - headline: 🌿生态系统
    items:
    - title: AntDocs
      link: https://github.com/zpfz/vuepress-theme-antdocs/
      details: VuePress 主题
    - title: VuePress-Creator
      link: https://zpfz.github.io/vuepress-creator/
      details: VuePress CLI
  - headline: ⚓资源链接
    items:
    - title: VuePress
      link: https://vuepress.vuejs.org/zh/
    - title: Ant Design Vue 1.x
      link: https://1x.antdv.com/docs/vue/introduce-cn/
footer: MIT Licensed | Copyright © 2020-present Feng L.H.
---
```

你可以将相应的内容设置为 `null` 来禁用标题和副标题。

任何 `YAML front matter` 之后额外的内容将会以普通的 markdown 被渲染，并插入到 `features` 的后面。

## 品牌图   

开启 `home: true` 的情况下，在 `YAML front matter` 添加以下的配置可以开启品牌图：
```yaml
---
home: true
heroImage: /hero.png
---
```

## 标题

开启 `home: true` 的情况下，在 `YAML front matter` 添加以下的配置可以开启首页标题：
```yaml
---
home: true
heroText: AntDocs
---
```
若不配置该字段，将优先显示 `config.js` 配置下的 `title`，默认值为 `Hello`。


## 标语

开启 `home: true` 的情况下，在 `YAML front matter` 添加以下的配置可以开启首页标语：
```yaml
---
home: true
tagline: 一款 Ant Design 设计风格的 VuePress 主题
---
```
若不配置该字段，将优先显示 `config.js` 配置下的 `description`，默认值为 `Welcome to your VuePress site`。


## 导航按钮

开启 `home: true` 的情况下，在 `YAML front matter` 添加以下的配置可以开启导航按钮：
```yaml
---
home: true
actions:
  - text: 快速上手
    link: /guide/
    type: primary
    size: large
  - text: 在线演示
    link: https://codesandbox.io/s/zpfz-antdocs-document-0jzb8r
    type: primary
    ghost: true
    size: large
---
```
其中，按钮可配置的字段有 `text`、`link`、`type`、`size`、`ghost`、`shape`，相关字段说明如下：
- `actions` <a-tag color="blue">可选</a-tag>
  - `text` 按钮文字。<a-tag color="orange">必选</a-tag>
  - `link` 按钮的导航链接，默认值 `/`，可以是文档内部链接也可以是外部链接。<a-tag color="blue">可选</a-tag>
  - `type` 按钮类型，默认值 `primary` ，可选值有：`primary`、`dashed`、`danger`、`link`，效果可参考：[按钮类型](https://1x.antdv.com/components/button-cn/#components-button-demo-type) <a-tag color="blue">可选</a-tag>
  - `ghost` 镂空效果，默认值 `false`，可选值有：`true` 和 `false`。<a-tag color="blue">可选</a-tag>
  - `size`：指定按钮大小，默认值 `large`，可选值有：`large`、`default`、`small`，效果可参考：[按钮尺寸](https://1x.antdv.com/components/button-cn/#components-button-demo-size) <a-tag color="blue">可选</a-tag>
  - `shape`：按钮形状，默认值 `null`，可选值有：`circle`、`round` 和 `null`。 <a-tag color="blue">可选</a-tag>

## 特性展示

开启 `home: true` 的情况下，在 `YAML front matter` 添加以下的配置可以开启特性展示：
```yaml
---
home: true
features:
  - title: Less 预处理器
    details: 从 Stylus 样式过渡到 Less 样式，统一使用预处理器，让 node_modules 不再过度臃肿。
  - title: Ant Design 风格
    details: 主题搭载 Ant Design of Vue 组件，支持 Markdown 语法与 Ant Design 组件混用。
  - title: 各种功能优化
    details: 新增底部栏目设置，优化行内代码、代码块以及其他各种显示效果和动画，真正实现风格迁移。
---
```
其中，按钮可配置的字段有 `title`、`details`，相关字段说明如下：
- `features` <a-tag color="blue">可选</a-tag>
  - `title` 特性标题。
  - `details` 特性描述。


## 底部栏

### 导航栏
开启 `home: true` 的情况下，在 `YAML front matter` 添加以下的配置可以开启底部导航栏：
```yaml
---
home: true
footerWrap: 
  - headline: 🌿生态系统
    items:
    - title: AntDocs
      link: https://github.com/zpfz/vuepress-theme-antdocs/
      details: VuePress 主题
    - title: VuePress-Creator
      link: https://zpfz.github.io/vuepress-creator/
      details: VuePress CLI
  - headline: ⚓资源链接
    items:
    - title: VuePress
      link: https://vuepress.vuejs.org/zh/
    - title: Ant Design Vue 1.x
      link: https://1x.antdv.com/docs/vue/introduce-cn/
---
```
其中，按钮可配置的字段有 `headline`、`title`、`link`、`details`，相关字段说明如下：
- `footerWrap` <a-tag color="blue">可选</a-tag>
  - `headline` 底部栏分栏标题。
  - `items`
    - `title` 底部栏分栏下 item 的名称。
    - `link` 底部栏分栏下 item 的导航链接。
    - `details` 底部栏分栏下 item 的描述信息。

### 版权信息
开启 `home: true` 的情况下，在 `YAML front matter` 添加以下的配置可以开启底部版权信息：
```yaml
---
home: true
footer: MIT Licensed | Copyright © 2020-present Feng L.H.
---
```
<a-alert type="info" showIcon>
  <span slot="message">
    footer 支持填写 html 代码片段，这意味着你可以添加备案信息或其他导航链接。
  </span>
</a-alert>

## 置顶按钮
为了能够让用户有更多的自由性去设置主题，我们将置顶按钮修改为可自定义开启，只需在 `.vuepress/config.js` 中 `themeConfig` 字段下添加一行 `backToTop: true` 即可开启，反之则关闭。配置示例代码如下：
```js {3}
themeConfig: {
  // ...
  backToTop: true,
  // ...
}
```