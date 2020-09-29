const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode: "development",
	output: {
		filename: 'bundle-[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	plugins: [
		new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
			filename: path.resolve(__dirname, "dist/index.html"),
			inject: true,
		})
	],
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		extensions: ['.tsx', '.ts', '.js', '.json'],
		'alias': {
			'@src': path.resolve(__dirname, 'src')
			, '@service': path.resolve(__dirname, 'src/service')
			, '@view': path.resolve(__dirname, 'src/view')
			, '@resource': path.resolve(__dirname, 'src/resource')
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
			}
			,{
				test: /\.html$/,
				loader: 'html-loader',
			}
		],
	},
};