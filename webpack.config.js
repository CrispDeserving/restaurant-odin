import { resolve } from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
    filename: 'main.js',
    path: resolve(__dirname, 'dist'),
	plugins: [
		new HTMLWebpackPlugin({
			template: "src/index.html",
		}),
	],
};
