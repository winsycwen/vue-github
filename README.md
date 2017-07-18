# vue-github 单页应用

简介：模仿github界面，实现首页、User/Organization首页、User/Organization拥有的/收藏的仓库列表页、User关注/被关注列表页、仓库首页、仓库Issue列表页；技术栈采用：vue2、vue-router、vue-resource以及webpack。

## Demo地址

[https://winsycwen.github.io/vue-github](https://winsycwen.github.io/vue-github)


![二维码](http://qr.api.cli.im/qr?data=https%3A%2F%2Fwinsycwen.github.io%2Fvue-github%2F%23%2F&level=H&transparent=0&blockpixel=12&marginblock=1&logourl=&size=260&kid=cliim&key=0ddadfb7ff087279da5268e85b33839e)

## 项目目录介绍

```
-project
	|-config			webpack配置
		|-webpack.dev.js
		|-webpack.prod.js
	|-dist				最终编译后的代码目录
	|-node_modules		package依赖
	|-src				源代码目录
		|-assets		静态资源（公用样式、字体图标样式等）
		|-common		公共函数方法
		|-components	公用组件
		|-router		路由配置
		|-views			所有页面
	|-App.vue
	|-main.js
	|-.babelrc
	|-.gitignore
	|-package.json
	|-README.md
	|-webpack.config.js	webpack配置文件
```

## 在本地运行

下载包packages
```
npm install
```

运行webpack-dev-server本地服务器
```
npm run watch
```
