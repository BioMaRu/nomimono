import { Story, Meta } from '@storybook/react'
import { Select, SelectProps } from './Select'
import dedent from 'ts-dedent'

export default {
	component: Select,
	title: 'Form/Select',
	parameters: {
		docs: {
			description: {
				component: dedent`
						<div
							class="_bdrd-8px _pdh-32px _dp-f _alit-ct _bgs-cv _bgpst-tl"
							style="height: 100px; background-image: url(/images/header-bg.png);"
						>
							<h1 class="_fs-1000 _fw-600 _mg-0px">Select</h1>
						</div>
						<h2 class="_fs-600 _fw-600 _mgt-32px">Overview</h2>
						<p class="_lh-165pct" style="font-size: 16px;">
							<code>&lt;Select /&gt;</code> for select element
						</p>
					`,
			},
		},
		actions: { argTypesRegex: '^on' },
		cssprops: {
			'form-element-small-height': { value: '28px' },
			'form-element-small-font-size': { value: '12px' },
			'form-element-medium-height': { value: '40px' },
			'form-element-medium-font-size': { value: '14px' },
			'form-element-large-height': { value: '48px' },
			'form-element-large-font-size': { value: '16px' },
			'form-element-border-radius': { value: '6px' },
			'form-element-label-font-size': { value: '14px' },
			'form-element-label-font-family': {
				value: 'var(--font-family-secondary)',
				control: 'text',
			},
			'form-element-label-font-weight': { value: '600' },
			'select-font-weight': { value: '400' },
		},
	},
} as Meta

const TemplateOverview: Story<SelectProps> = args => <Select {...args}>{args.children}</Select>

export const _1Overview = TemplateOverview.bind({})
_1Overview.storyName = 'Overview'
_1Overview.args = {
	id: 'my-select',
	label: 'Please select',
	info: 'This is select info',
	defaultValue: 'value_b',
	children: [
		<option value="value_a">Select Option A</option>,
		<option value="value_b">Select Option B</option>,
		<option value="value_c">Select Option C</option>,
	],
}
