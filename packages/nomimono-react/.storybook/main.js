const rootMain = require('../../../.storybook/main')

module.exports = {
	...rootMain,

	core: { ...rootMain.core, builder: 'webpack5' },

	stories: [
		...rootMain.stories,
		'../src/ui/**/*.stories.mdx',
		'../src/ui/**/*.stories.@(js|jsx|ts|tsx)',
		'../src/widget/**/*.stories.mdx',
		'../src/widget/**/*.stories.@(js|jsx|ts|tsx)',
		'../src/doc/**/*.stories.@(js|jsx|ts|tsx)',
		'../src/doc/**/*.stories.mdx',
	],
	addons: [
		// '@storybook/addon-docs',
		...rootMain.addons,
		'@nrwl/react/plugins/storybook',
	],
	webpackFinal: async (config, { configType }) => {
		// apply any global webpack configs that might have been specified in .storybook/main.js
		if (rootMain.webpackFinal) {
			config = await rootMain.webpackFinal(config, { configType })
		}

		// add your own webpack tweaks if needed

		return config
	},
}
