var path = require('path');
var webpack = require('webpack');
var extractWebpackPlugin = require('extract-text-webpack-plugin');

const extractPage = new extractWebpackPlugin('page.css');

// 开发环境
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.join(__dirname, 'dist'),	// 输出目录绝对路径
		publicPath: '/vue-github/dist/',
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			// 处理.vue文件
			test: /\.vue$/,
			use: [{
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: extractWebpackPlugin.extract({
							use: 'css-loader!sass-loader',
							fallback: 'vue-style-loader'
						}),
						js: 'babel-loader'
					}
				}
			}]
		}, {
			// 处理scss文件
			test: /\.scss$/,
			use: extractWebpackPlugin.extract({
				use: 'css-loader!sass-loader',
				fallback: 'vue-style-loader'
			})
		}, {
			// 处理图片
			test: /\.(png|gif|jpg|jpeg)$/,
			use: 'file-loader'
		}, {
			// 处理字体图标
			test: /\.(ttf|svg)$/,
			use: 'file-loader'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		extractPage
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
};