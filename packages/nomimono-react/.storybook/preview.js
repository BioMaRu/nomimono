import '!style-loader!css-loader!sass-loader!./scss-loader.scss'

export const parameters = {
	options: {
		storySort: {
			method: 'configure',
			order: [
				'Welcome',
				'Getting start',
				'Buttons',
				['Button', 'SelectButton'],
				'Display Data',
				'Widgets',
				['Footer'],
			],
			includeName: true,
		},
	},
	viewMode: 'docs',
	previewTabs: {
		'storybook/docs/panel': { index: -1 },
	},
}
