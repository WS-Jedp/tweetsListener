require('@babel/register')({
	presets: [
		'@babel/preset-env', '@babel/preset-react'
	],
	plugins: [
		'@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'
	]
})

require('asset-require-hook')({
	extensions: ['jpg', 'png', 'gif'],
	name: '/assets/[hash].[ext]'
})

require('./server')
