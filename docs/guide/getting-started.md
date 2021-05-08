---
title: 快速上手
---
# 快速上手

> 在开始之前，推荐先熟知 [Ant Design Vue](https://antdv.com/) 以及 [VuePress](https://vuepress.vuejs.org/zh) 的基本使用，并正确安装和配置了 Node.js v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的基本知识，并且已经完全熟知了 Ant Design Vue 的使用以及 VuePress 的正确开发方式。

## 安装主题

使用 `yarn` 安装 `AntDocs` 主题：
```bash
yarn add vuepress-theme-antdocs
```
或者使用 `npm` 安装它：
```bash
npm i vuepress-theme-antdocs
```
如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

<a-alert type="info" showIcon>
  <span slot="message">
    需要指出的是，主题已经内置 active-header-links/last-updated/nprogress/search，所以并不需要在你的项目中安装那些依赖。至于 back-to-top 插件，主题并没安装它，而是采用了 Ant Design Vue 中的组件。
  </span>
</a-alert>

## 引用主题

打开 `.vuepress/config.js` 文件，然后在合适位置引用它：

```js
module.exports = {
  ...
  theme: 'antdocs',
  ...
}
```
如果你对 VuePress 主题配置不是很了解，请点这里：[使用主题](https://vuepress.vuejs.org/zh/theme/using-a-theme.html#%E4%B8%BB%E9%A2%98%E7%9A%84%E7%BC%A9%E5%86%99)  

配置完毕后，你就可以直接 `yarn run docs:dev` 或 `npm run docs:dev` 查看效果。

<a-alert type="warning" showIcon>
  <span slot="message">
    运行前请确认你的项目已安装 VuePress 依赖，而不是直接使用全局 VuePress 依赖。（作者的项目曾因为直接使用全局 VuePress 依赖，导致 back-to-top 插件无法正常显示，然后项目里单独安装 VuePress 依赖后才得以解决。）
  </span>
</a-alert>

## 效果预览

<p style="display: flex;justify-content: center;"><img src="https://s2.ax1x.com/2020/02/28/3B3lOf.png"/></p>