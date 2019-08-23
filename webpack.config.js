const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'app_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: [ /.css$|.scss$/ ],
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'index.css'
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
};
