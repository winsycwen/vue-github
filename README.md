# vue-github 单页应用

初始化项目时没有使用vue-cli初始化项目

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