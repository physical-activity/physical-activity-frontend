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
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader',
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [],
	resolve: { fallback: { url: require.resolve('url/') } },
};

module.exports = config;
