import { Story, Meta } from '@storybook/react'
import { SelectButton, SelectButtonProps } from './SelectButton'
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
						class="_bdrd-8px _pdh-32px _dp-f _alit-ct _bgs-cv _bgpst-tl"
						style="height: 100px; background-image: url(/images/header-bg.png);"
					>
						<h1 class="_fs-1000 _fw-600 _mg-0px">SelectButton</h1>
					</div>
					<h2 class="_fs-600 _fw-600 _mgt-32px">Overview</h2>
					<p class="_lh-165pct" style="font-size: 16px;">
						<code>&lt;SelectButton /&gt;</code> allow users to select the option. <br>
						All <code>ButtonHTMLAttributes</code> can be used as a Props too (eg. title, type).
					</p>
				`,
			},
		},
		actions: { argTypesRegex: '^on' },
		cssprops: {
			'select-button-font-weight': { value: '400' },
			'select-button-font-family': { value: `var(--ffml-primary)`, control: 'text' },

			'select-button-small-height': { value: '28px' },
			'select-button-small-font-size': { value: '12px' },
			'select-button-medium-height': { value: '32px' },
			'select-button-medium-font-size': { value: '14px' },
			'select-button-large-height': { value: '42px' },
			'select-button-large-font-size': { value: '18px' },
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
