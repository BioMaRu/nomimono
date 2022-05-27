// .storybook/manager.js
import React from 'react'
import { addons } from '@storybook/addons'
import customTheme from './customTheme'
import '!style-loader!css-loader!sass-loader!./style.scss'

addons.setConfig({
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: 'bottom',
	enableShortcuts: true,
	showToolbar: true,
	theme: customTheme,
	selectedPanel: undefined,
	initialActive: 'sidebar',
	sidebar: {
		showRoots: true,
		collapsedRoots: ['other'],
		renderLabel: item => {
			if (item.isRoot) {
				return (
					<div title={item.name} className={'sb-root-custom'}>
						<div className="sb-root-custom-label">{item.name}</div>
					</div>
				)
			}
			return <div title={item.name}>{item.name}</div>
		},
	},
	toolbar: {
		docs: { hidden: false },
		title: { hidden: false },
		zoom: { hidden: false },
		eject: { hidden: false },
		copy: { hidden: false },
		fullscreen: { hidden: false },
	},
})
