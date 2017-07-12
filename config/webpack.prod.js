process.env.NODE_ENV = 'production';

var webpack = require('webpack');
var Merge = require('webpack-merge');
var commonConfig = require('./webpack.dev.js');

module.exports = Merge(commonConfig, {
	output: {
		publicPath: '/vue-github/dist/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('prod')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
});