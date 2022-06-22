import { Story, Meta } from '@storybook/react'
import { Input, InputProps } from './Input'
import dedent from 'ts-dedent'

export default {
	component: Input,
	title: 'Form/Input',
	parameters: {
		docs: {
			description: {
				component: dedent`
						<div
							class="_bdrd-8px _pdh-32px _dp-f _alit-ct _bgs-cv _bgpst-tl"
							style="height: 100px; background-image: url(/images/header-bg.png);"
						>
							<h1 class="_fs-1000 _fw-600 _mg-0px">Input</h1>
						</div>
						<h2 class="_fs-600 _fw-600 _mgt-32px">Overview</h2>
						<p class="_lh-165pct" style="font-size: 16px;">
							<code>&lt;Input /&gt;</code> for input element
						</p>
					`,
			},
		},
		actions: { argTypesRegex: '^on' },
		cssprops: {},
	},
} as Meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Overview'
Primary.args = {
	id: 'input_id',
	label: 'Label',
	info: 'Small info about input',
	type: 'number',
}
