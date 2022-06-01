---
title: 扩展配置
---

# 扩展配置

<a-alert type="info" closable>
  <span slot="message">
    v1.2.0 支持 多语言设置，配置方式请按照 VuePress 官方文档设置，时空门：<a href="https://vuepress.vuejs.org/zh/guide/i18n.html" target="_blank">多语言设置</a>
  </span>
</a-alert>

## 底部栏

我们为主题新增了首页底部栏功能，最大可支持 4 个栏目数，每个栏目数可以添加多个 Item。接下来我们将讲解如何去开启这个功能以及使用时需要注意的问题。  

打开你默认作为首页的 `README.md` 文件，在 Front Matter 之间添加以下配置：

```md
footerColumn: 2
footerWrap: 
- headline: Column 1
  items:
  - title: Item 1
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
  - title: Item 2
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
- headline: Column 2
  items:
  - title: Item 1
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
  - title: Item 2
    link: https://github.com/zpfz/vuepress-theme-antdocs
    details: details
```
其中，相关字段说明如下：
- `footerColumn`：底部栏分栏数，最大支持 4 个栏目数。<a-tag color="orange">必选</a-tag>
- `footerWrap`：底部栏数组。<a-tag color="orange">必选</a-tag>
  - `headline`：底部栏分栏标题。<a-tag color="blue">可选</a-tag>
  - `items`
    - `title`：底部栏分栏下 item 的名称。<a-tag color="orange">必选</a-tag>
    - `link`：底部栏分栏下 item 的导航链接。<a-tag color="orange">必选</a-tag>
    - `details`：底部栏分栏下 item 的描述信息。<a-tag color="blue">可选</a-tag>

### 页脚 <a-tag color="red">v1.2.2+</a-tag>
为了满足首页页脚支持填写备案号等需求，我们对页脚进行了优化，将其支持填写 html 代码片段。现在，除了直接填写文本外，你还可以这样使用:
```js
footer: Written by Feng L.H. | <a href="http://beian.miit.gov.cn/" target="_blank">自行填写ICP备案号</a>
```


## 广告位

为了保证项目维护与发展，我们给主题添加了广告位功能，用户可以给侧边栏自定义广告，通过获取额外的资金来鼓励自己写作的积极性，这对开发者是极有帮助的。  
目前，广告位支持两种风格以及一种招待状态。打开 `.vuepress/config.js` 文件，在 `themeConfig` 下添加 `ads` 字段，如下所示：
```js {3-5}
themeConfig: {
  ...
  ads:{
    // 广告位配置
  },
  ...
}, 
```

### 广告风格一
最基本的广告风格就是 `图片+文字描述`，你可以通过以下的配置来使用这个功能：
```js
themeConfig: {
  ...
  ads:{
    style: 1, 
    image: 'https://s1.ax1x.com/2020/03/22/84PzLD.png',
    text: 'Limited time offer: Get 10 free Adobe Stock images.',
    link: 'https://vuepress.vuejs.org/',
  },
  ...
}, 
```
其中，相关字段说明如下：
- `style`：指定某种风格，可选参数：1，2，3。<a-tag color="orange">必选</a-tag>
- `image`：指定图片链接。<a-tag color="blue">可选</a-tag>
- `text`：指定文本描述。<a-tag color="blue">可选</a-tag>
- `link`：指定点击广告时跳转的链接。<a-tag color="blue">可选</a-tag>

此外，你可以在 `.vuepress/styles/palette.less` 下添加样式变量 `@PromoStyle1MW` 来设置图片的最大宽度。

### 广告风格二  
当你想直接用图片或者有多张图片作为广告时，你可以通过以下的配置来使用这个功能：
```js
themeConfig: {
  ...
  ads:{
    style: 2, 
    speed: 2000,
    items:[
      {
        text: 'Ads details here',
        image:'https://cn.bing.com/th?id=OHR.LoughriggTarn_ZH-CN1404327665_1920x1080.jpg',
        link: 'https://vuepress.vuejs.org/'
      },
      {
        text: 'Ads details here',
        image:'https://cn.bing.com/th?id=OHR.MetamorphicRocks_ZH-CN9753251368_1920x1080.jpg',
        link: 'https://vuepress.vuejs.org/'
      },
      {
        text: 'Ads details here',
        image:'https://cn.bing.com/th?id=OHR.KeichitsuCrocuse_ZH-CN1061292366_1920x1080.jpg',
        link: 'https://vuepress.vuejs.org/'
      }
    ]
  },
  ...
}, 
```
其中，相关字段说明如下：
- `style`：指定某种风格，可选参数：1，2，3。<a-tag color="orange">必选</a-tag>
- `speed`：指定切换图片时的速度，默认 3000 毫秒（3秒）。<a-tag color="blue">可选</a-tag>
- `items`  
    - `text`：指定鼠标在广告上悬停时显示的信息。<a-tag color="blue">可选</a-tag>
    - `image`：指定图片链接。<a-tag color="blue">可选</a-tag>
    - `link`：指定点击广告时跳转的链接。<a-tag color="blue">可选</a-tag>

### 招待状态
当你需要招广告商时，你可以通过以下的配置来使用这个功能：
```js
themeConfig: {
  ...
  ads:{
    style: 3, 
    title: '赞助商', 
    btnText: '成为赞助商',
    msgTitle: '成为赞助商',
    msgText: '如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在 AndDocs 文档侧边栏等页面。',
    msgOkText: '确定',
  },
  ...
}, 
```
其中，相关字段说明如下：
- `style`：指定某种风格，可选参数：1，2，3。（实际上，除了1和2之外，其他参数的状态都是这个风格。）<a-tag color="orange">必选</a-tag>
- `title`：指定广告位的标题。<a-tag color="blue">可选</a-tag>
- `btnText`：指定广告位按钮的名称。<a-tag color="blue">必选</a-tag>
- `msgTitle`：指定弹窗的标题。<a-tag color="orange">必选</a-tag>
- `msgText`：指定弹窗的文本信息。<a-tag color="orange">必选</a-tag>
- `msgOkText`：指定弹窗关闭按钮的名称。<a-tag color="orange">必选</a-tag>

当然，这三种效果的配置可以同时存在，你只需要设置好 `style` 就能指定显示某种效果。
此外，为了给用户保留较好的浏览效果，广告位在移动端默认不显示。如果你非要在移动端显示侧边栏广告的话，可以在 `.vuepress/styles/palette.less` 下添加 `@MobileShow: block;` 即可。

## 置顶按钮

为了能够让用户有更多的自由性去设置主题，我们将置顶按钮修改为可自定义开启，只需在 `.vuepress/config.js` 中 `themeConfig` 字段下添加一行 `backToTop: true` 即可开启，反之则关闭。配置示例代码如下：
```js {3}
themeConfig: {
  ...
  backToTop: true,
  ...
}
```

## 首页按钮
为了让首页主要和次要按钮有个鲜明的对比，在视觉上快速引导用户的选择，我们进一步优化了主要和次要按钮相关配置。你需要打开你的首页 md 文件，在 YAML 内添加以下代码： 
```md
actionBtn:
  text: Get Started
  link: /guide/
  type: primary
  ghost: false
  size: large
preactionBtn:
  text: Playground
  link: /guide/
  type: primary
  ghost: true
  size: large
```
其中，相关字段说明如下：
- `actionBtn`：主要按钮。<a-tag color="blue">可选</a-tag>
  - `text`：按钮文字，默认值 `ActionBtn`。<a-tag color="blue">可选</a-tag>
  - `link`：点击按钮后导航链接，默认值 `/`，可以是文档内部链接也可以是外部链接。<a-tag color="blue">可选</a-tag>
  - `type`：按钮类型，默认值 `primary` ，可选值有：`primary`、`dashed`、`danger`、`link`，效果可参考：[按钮类型](https://1x.antdv.com/components/button-cn/#components-button-demo-type) <a-tag color="blue">可选</a-tag>
  - `ghost`：镂空按钮，默认值 `false`，可选值有：`true` 和 `false`。<a-tag color="blue">可选</a-tag>
  - `size`：指定按钮大小，默认值 `large`，可选值有：`large`、`default`、`small`，效果可参考：[按钮尺寸](https://1x.antdv.com/components/button-cn/#components-button-demo-size) <a-tag color="blue">可选</a-tag>
  - `shape`：按钮形状，默认值 `null`，可选值有：`circle`、`round` 和 `null`。<a-tag color="blue">可选</a-tag>

<p></p>

- `preactionBtn`：次要按钮。<a-tag color="blue">可选</a-tag>
  - `text`：同上，默认值 `PreActionBtn`。<a-tag color="blue">可选</a-tag>
  - `link`：同上。<a-tag color="blue">可选</a-tag>
  - `type`：同上。<a-tag color="blue">可选</a-tag>
  - `ghost`：同上。<a-tag color="blue">可选</a-tag>
  - `size`：同上。<a-tag color="blue">可选</a-tag>
  - `shape`：同上。<a-tag color="blue">可选</a-tag>


如果您使用的 1.2.2 版本，您应该参考以下配置：  
考虑到有些用户需要使用首页次级按钮来引导读者，所以我们在新版本中多添了一个次级按钮。打开你的首页 md 文件，在 YAML 内添加以下代码开启次级按钮：   
```md
preactionText: 次级按钮
preactionLink: /guide/
```

## 移动端侧边栏按钮 <a-tag color="red">已修复</a-tag>
~~当你的页面没有侧边栏时，应该在页面 YAML 部分添加以下配置来关闭移动端的侧边栏按钮：~~
```sh
---
toggleBtn: 0
---
```
<a-alert type="warning" showIcon>
  <span slot="message">
    该特性在 1.3.2 版本 ( 或者更高 ) 已丢弃并修复了相关BUG，若您还在使用 1.2.2 或者更低版本，建议您升级后去掉该特性的相关配置。
  </span>
</a-alert> 