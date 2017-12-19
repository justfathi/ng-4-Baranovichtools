var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
module.exports = {
	navigateFallback: '/index.html',
	navigateFallbackWhitelist: [/^(?!\/__)/], // Firebase OAuth
	stripPrefix: 'dist',
	root: 'dist/',
	plugins: [
		new SWPrecacheWebpackPlugin({
			cacheId: 'baranovichytools',
			filename: 'service-worker.js',
			minify: true,
			staticFileGlobs: [
				'dist/index.html',
				'dist/**.js',
				'dist/**.css'
			],
			stripPrefix: 'dist/assets/',
			mergeStaticsConfig: true
		})
	]
};