const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup')
const postcss = require('rollup-plugin-postcss')
const terser = require('rollup-plugin-terser')

module.exports = config => {
	const nxConfig = nrwlConfig(config)
	const nxConfigPlugin = nxConfig.plugins.filter(it => it.name !== 'postcss')

	return {
		...nxConfig,
		plugins: [
			...nxConfigPlugin,
			terser.terser(),
			postcss({
				extract: 'style.css',
				minimize: true,
			}),
			// { minimize: true, extract: true, modules: true, sourceMap: true, ...postcssConfig },
		],
	}
}
