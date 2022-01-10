### 以下流程学完之后 不够的 参考链接

```javascript
    https://blog.csdn.net/weixin_41829196/article/details/81201001
```

##### 安装 VuePress 到全局 (稳定版)

```javascript
    npm install -g yarn
    yarn config set registry https://registry.npm.taobao.org -g
    yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
    yarn global add vuepress
```

##### 克隆 VuePress 仓库克隆到你的电脑

```javascript
    git clone git@github.com:docschina/vuepress.git
```

##### 编译依赖

```javascript
    yarn install
```

##### 启动方式

```javascript
    cd docs
    vuepress dev 或  yarn run docs:dev
```

##### 打包

```javascript
    cd docs
    Vuepress build 或 yarn run docs:build
```

##### 切换环境仓库

```javascript
    cd 根目录  // 如  cd ..
    ./local.sh
```

##### 上传

```javascript
    cd 根目录  // 如  cd ..
    ./build.sh
```
##### 重点文件
```javascript
    /.vuepress/config.js // 配置文件
    /.vuepress/public/sitemap*.html // SEO
    /.vuepress/dist/* // 打包后目录
```
##### 结构

```javascript
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
```

##### 导航

```javascript
nav: [
    {
        text: "Guide",
        link: "/guide/",
    },
    {
        text: "Config Reference",
        link: "/config/",
    },
    {
        text: "Default Theme Config",
        link: "/default-theme-config/",
    },
];
```
