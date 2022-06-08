---
title: 导航栏
---

# 导航栏

这里仅介绍默认主题内置除外的功能，如需了解导航栏的内置功能请看：[导航栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#导航栏)

<a-divider />

## 激活标志
为了更好解决导航栏当前项激活规则，我们提供了类似 VuePress 2.x 的 `activeMatch` 属性，它支持普通路径或正则表达式：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { 
        text: 'Home', 
        link: '/',
        // 该元素将一直处于激活状态
        activeMatch: '/',
      },
      { 
        text: 'Guide', 
        link: '/guide/',
        // 该元素在当前路由路径是 /guide/ 开头时激活
        // 支持正则表达式
        activeMatch: '^/guide/',
      },
    ]
  }
}
```

## 暗黑模式切换按钮 <Badge text="实验性" type="warning"/>
由于时间和精力有限，目前仅增加暗黑模式切换按钮，其按钮功能基本完善（包括本地储存记忆），用户可以通过它自行增添暗黑样式。对于前端基础能力较弱的童鞋，我们将在后期给出更优的解决方案（因为增改样式变量太耗精力，而且 Ant Design Vue 1.x 基本没有暗黑样式）。   
打开 `.vuepress/config.js` 文件，在  `themeConfig` 下添加 `isDarkMode: true` 字段即可开启该功能，如下所示：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    isDarkMode: true
  }, 
}
```
