# 以下流程学完之后 不够的   参考链接
https://blog.csdn.net/weixin_41829196/article/details/81201001

### 安装VuePress 到全局 
npm install -g vuepress

### 克隆VuePress仓库克隆到你的电脑

git clone git@github.com:docschina/vuepress.git

### 编译依赖


### 启动方式 
cd docs
vuepress dev

### 打包
Vuepress build

### 结构 
├─.vuepress

│ ├─components

│ └─public

│ └─icons

│ └─config.js // 配置文件

├─config // Vuepress文档的配置参考内容

├─default-theme-config // Vuepress文档的默认主题配置内容

├─guide // Vuepress文档的指南内容

└─zh // 中文文档目录

 ├─config

 ├─default-theme-config

 └─guide

└─README.md // 首页配置文件


## 导航 
nav: [

 {

 text: 'Guide',

 link: '/guide/',

 },

 {

 text: 'Config Reference',

 link: '/config/'

 },

 {

 text: 'Default Theme Config',

 link: '/default-theme-config/'

 }

]
