const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			inject: "head",
			scriptLoading: "defer",
		}),
	],
};
