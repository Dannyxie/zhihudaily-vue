const path = require('path')
const vueConfig = require('./vue-loader.config')

module.exports = {
	devtool: '#source-map',
	entry: {
		app: './src/client-entry.js'
			// ,vendor: []
	},
	resolve: {
		alias: {
			'public': path.resolve(__dirname, '../public')
		}
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: '[name][chunkhash].js'

	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: vueConfig
		}
		, {
			test: /\.js$/,
			loader: 'buble-loader',
			exclude: /node_modules/,
			options: {
				objectAssign: 'Object.assign'
			}
		}
		]
	}
}