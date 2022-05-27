import { Story, Meta } from '@storybook/react'
import { SelectButton, SelectButtonProps, SELECT_BUTTON } from './SelectButton'
import React from 'react'
import dedent from 'ts-dedent'

/** =====================
 *  Component Overview
 ===================== */
export default {
	component: SelectButton,
	title: 'Buttons/SelectButton',
	parameters: {
		docs: {
			description: {
				component: dedent`
					<div
						class="_bdrd-8px _pdh-32px _pdt-32px _bgs-cv _bgpst-tl" 
						style="height: 80px; background-image: url(/images/story-bg.png);"
					> 
						<h1 class="_fs-900 _fw-600">SelectButton</h1>
					</div>
					<h2 class="_fs-600 _fw-600 _mgt-32px">Overview</h2>
					<p class="_lh-165pct" style="font-size: 16px;">
						<code>SelectButton</code> allow users to select the option. <br> 
						All <code>ButtonHTMLAttributes</code> can be used as a Props too (eg. title, type).
					</p>
				`,
			},
		},
	},
} as Meta

const TemplateOverview: Story<SelectButtonProps> = args => (
	<SelectButton {...args}>{args.children}</SelectButton>
)
export const _1Overview = TemplateOverview.bind({})
_1Overview.storyName = 'Overview'
_1Overview.args = {
	children: 'Select button',
}
