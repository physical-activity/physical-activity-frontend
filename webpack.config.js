const path = require('path');

const config = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [
			{
				exclude: /(node_modules)/,
				test: /\.(js|jsx)$/i,
				loader: 'babel-loader',
			},
			{ test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'] },
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [],
};

module.exports = config;
