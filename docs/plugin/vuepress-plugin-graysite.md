---
title: vuepress-plugin-graysite
---

# vuepress-plugin-graysite

全站变灰插件，一般用于哀悼日。[Github](https://github.com/zpfz/vuepress-plugin-graysite)

![Version](https://img.shields.io/github/package-json/v/zpfz/vuepress-plugin-graysite?style=flat-square)
![NPM](https://img.shields.io/npm/l/vuepress-plugin-graysite?style=flat-square)


## 安装

```sh
yarn add -D vuepress-plugin-graysite
# OR npm install -D vuepress-plugin-graysite
```

## 使用

```js
module.exports = {
  plugins: ['graysite']
}
```
## 配置
```js
module.exports = {
  plugins: [
    ['graysite',{
      startDate: '2020-04-03 00:00:00',
      endDate: '2020-04-04 23:59:59'
    }]
  ]
}
```

## 选项（必选）

### startDate
设置哀悼日开始日期。  
- 类型: `date`
- 默认: `null`   


### endDate
设置哀悼日结束日期。  
- 类型: `date`
- 默认: `null`    
