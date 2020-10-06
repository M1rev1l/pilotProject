const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode: "production",
	output: {
		filename: 'bundle-[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
			filename: path.resolve(__dirname, "dist/index.html"),
			inject: true
		}),
		new TsconfigPathsPlugin({/* options: see below */})
	],
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		extensions: ['.tsx', '.ts', '.js'],
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
				exclude: /node_modules/,
			}
		],
	},
};