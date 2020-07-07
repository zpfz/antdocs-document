---
title: medium-zoom
---

# @vuepress/plugin-medium-zoom

## 安装
```sh
yarn add -D @vuepress/plugin-medium-zoom
# OR npm install -D @vuepress/plugin-medium-zoom
```

## 使用
在 AntDocs 主题上使用：
```js {4}
module.exports = {
  plugins: {
    '@vuepress/medium-zoom': {
      selector: '.theme-antdocs-content :not(a) > img',
      options: {
        margin: 16
      }
    }
  }
}
```

