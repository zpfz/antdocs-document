---
title: 侧边栏
---

# 侧边栏

这里仅介绍默认主题所没有的功能，如需了解侧边栏的其他配置请看：[侧边栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#侧边栏)

<a-divider />

## 广告栏
为了保证项目维护与发展，我们给主题添加了广告栏功能，用户可以给左侧边栏自定义广告，通过获取额外的资金来鼓励自己写作的积极性，这对开发者是极有帮助的。
目前，广告位支持两种风格以及一种招待状态。打开 `.vuepress/config.js` 文件，在  `themeConfig` 下添加 `ads` 字段，如下所示：
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    ads:{
      // 广告位配置
    },
  }, 
}
```

### 广告风格一
最基本的广告风格就是 `图片+文字描述`，你可以通过以下的配置来使用这个功能：
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    ads:{
      style: 1, 
      image: 'https://s1.ax1x.com/2020/03/22/84PzLD.png',
      text: 'Limited time offer: Get 10 free Adobe Stock images.',
      link: 'https://vuepress.vuejs.org/',
    },
  }, 
}
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
// .vuepress/config.js
module.exports = {
  themeConfig: {
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
  }, 
}
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
// .vuepress/config.js
module.exports = {
  themeConfig: {
    ads:{
      style: 3, 
      title: '赞助商', 
      btnText: '成为赞助商',
      msgTitle: '成为赞助商',
      msgText: '如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在 AndDocs 文档侧边栏等页面。',
      msgOkText: '确定',
    },
  }, 
}
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



## 右侧边栏 <Badge text="v1.4.0" type="tip"/>
我们在 `1.4.0` 版本加入了右侧边栏的特性，你可以通过以下方式来启用它：

### config.js
打开 `.vuepress/config.js`，在  `themeConfig` 下添加 `pageAnchor` 字段，如下所示：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    pageAnchor:{
      isDisabled: false,
      anchorDepth: 2
    },
  }, 
}
```

其中，可选属性有 `isDisabled`、`anchorDepth`，相关配置说明如下：   
- `isDisabled` 是否关闭右侧边栏，默认值 `false`。
- `anchorDepth` 设置右侧边栏深度，最大支持为二级，默认值 `2`。

### YAML
你也可以在某个 markdown 文件的 `YAML front matter` 中配置右侧边栏：
```js
---
pageAnchor:
  isDisabled: false
  anchorDepth: 2
---
``` 
`pageAnchor` 属性在 markdown 文件 `YAML front matter` 的权重大于 `.vuepress/config.js`，因此你可以指定某个 markdown 文件是否关闭右侧边栏或深度。