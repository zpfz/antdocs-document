---
title: 调色板
---

# 调色板

vuepress-theme-antdocs 的结构样式大部分和 VuePress 默认主题类似，你可以参考 [VuePress](https://vuepress.vuejs.org/zh/config/#palette-styl) 的默认预设进行配置。

AntDocs 支持一定程度的样式定制，以满足文档多样化的视觉需求，包括但不限于主色、文字等部分组件的视觉定制。

## AntDocs of VuePress 的样式变量

由于 antd 的样式使用了 Less 作为开发语言，为了统一预处理器，本主题已将 Stylus 样式转变为 Less，你可以直接在 Less 文件上进行编写样式。本主题根据原主题定义了一系列的样式变量，你可以根据需求进行相应调整。

以下是一些最常用的通用变量，所有样式变量可以在 [这里](https://github.com/zpfz/vuepress-theme-antdocs/blob/master/styles/palette.less) 找到。

```less
// 色彩
@accentColor: #3eaf7c; // 全局主色
@textColor: #2a2a2a; // 文字颜色
@borderColor: #eaecef; // 边框颜色
@codeBgColor: #282c34; // 代码块背景颜色
@arrowBgColor: #ccc; // 箭头背景颜色
@badgeTipColor: #19be6b; // 提示徽标背景颜色
@badgeWarningColor: #ff9900; // 警告标背景颜色
@badgeErrorColor: #ed4014; // 危险徽标背景颜色

// 布局
@navbarHeight: 4.125rem; // 导航栏高度
@sidebarWidth: 20rem; // 侧边栏宽度
@contentWidth: unset; // 内容区域宽度
@homePageWidth: 960px; // 主页宽度
```
如果以上变量不能满足你的定制需求，可以给我们提 issue。

## 定制方式

### palette.less

如果要对默认预设的样式进行简单的替换，或者定义一些变量供以后使用，你可以创建一个 `.vuepress/styles/palette.less` 文件。比如修改主题的主体颜色：
```less
@accentColor: #1890ff; 
```

<a-alert type="warning" showIcon>
  <span slot="message">
    你只能在这个文件中定义变量。因为 palette.less 将在根的 Less 配置文件的末尾引入，作为配置，它将被多个文件使用，所以一旦你在这里写了样式，你的样式就会被多次复制。
  </span>
</a-alert>

### style.less
为了能使用 Less 来覆盖或者添加额外样式，我们保留了 style.less 样式文件供你编写。你可以创建一个 `.vuepress/styles/style.less` 文件，然后向其写入样式内容。
```less
.content {
  font-size: 30px;
}
```

### 使用CSS
如果你还想使用 css 样式文件，我们推荐你使用头部注入 css 样式的方法，在 `.vuepress/config.js` 的 head 字段里配置好 css 的引用，比如：
```js
module.exports = {
  ...
  head: [
    ['link', { rel: 'stylesheet', href: '/css/style.css' }]
  ],
  ...
}
```
然后在 `.vuepress/public/` 文件夹下创建一个名为 `css` 的文件夹，其文件夹下还需创建 `style.css` 样式文件，接着你就可以直接往里面写你所要的样式。