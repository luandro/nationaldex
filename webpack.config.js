var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname,
	entry: './src/client.js',
	output: {
		path:  path.join(__dirname, 'public'),
		filename: './js/bundle.js',
		publicPath: '/static/'
	},
	module: {
    loaders: [{
	      test: /\.js?$/,
	      loaders: ['babel'],
	      include: path.join(__dirname, 'src')
	    }]
	}
}