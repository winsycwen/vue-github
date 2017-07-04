var webpack = require('webpack');
var Merge = require('webpack-merge');
var commonConfig = require('./webpack.dev.js');

module.exports = Merge(commonConfig, {
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