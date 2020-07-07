---
title: vuepress-plugin-homebadge
---

# vuepress-plugin-homebadge <a-tag color="red">for AntDocs</a-tag>

首页徽标插件，目前仅适用于 AntDocs 主题。[Github](https://github.com/zpfz/vuepress-plugin-homebadge)

![Version](https://img.shields.io/github/package-json/v/zpfz/vuepress-plugin-homebadge?style=flat-square)
![NPM](https://img.shields.io/npm/l/vuepress-plugin-homebadge?style=flat-square)

## 安装

```sh
yarn add -D vuepress-plugin-homebadge
# OR npm install -D vuepress-plugin-homebadge
```

## 使用

```js
module.exports = {
  plugins: ['homebadge']
}
```
## 配置选项
```js
module.exports = {
  plugins: [
    ['homebadge',{
      selector: '.hero',
      repoLink: 'https://github.com/zpfz/vuepress-theme-antdocs',
      badgeLink: 'https://img.shields.io/github/stars/zpfz/vuepress-theme-antdocs?style=social',
      badgeGroup: [
        'https://img.shields.io/badge/build-passing-brightgreen?style=flat-square',
        'https://img.shields.io/npm/dt/vuepress-theme-antdocs?style=flat-square&color=red',
        'https://img.shields.io/github/license/zpfz/vuepress-theme-antdocs?style=flat-square&color=blue',
        'https://img.shields.io/npm/v/vuepress-theme-antdocs?style=flat-square'
      ]
    }]
  ]
}
```

## 选项

### selector
指定要注入徽标的父节点，该操作会在父节点内的最后一个元素追加徽标链接。  
- 类型：`string`
- 默认值：`.hero`  


### repoLink
指定一个 Github 库链接，当用户点击 Star 徽标时，会跳转至该链接。  
- 类型：`string`
- 默认值：`undefined`  

### badgeLink
指定 Star 徽标链接，链接可从 [shields.io](https://shields.io/category/social) 获取。  
- 类型：`string`
- 默认值：`undefined`  


### badgeGroup
指定 Star 徽标链接，链接可从 [shields.io](https://shields.io/) 获取。  
- 类型：`array`
- 默认值：`undefined`  
