import { Story, Meta } from '@storybook/react'
import { Message, MessageProps } from './Message'
import dedent from 'ts-dedent'

export default {
	component: Message,
	title: 'Display Data/Message',
	argTypes: {
		iconClass: {
			description: 'try: <i>"fal fa-info-circle"</i>',
		},
	},
	parameters: {
		docs: {
			description: {
				component: dedent`
					<div
						class="_bdrd-8px _pdh-32px _dp-f _alit-ct _bgs-cv _bgpst-tl"
						style="height: 100px; background-image: url(/images/header-bg.png);"
					>
						<h1 class="_fs-1000 _fw-600 _mg-0px">Message</h1>
					</div>
					<h2 class="_fs-600 _fw-600 _mgt-32px">Overview</h2>
					<p class="_lh-165pct" style="font-size: 16px;">
						<code>&lt;Message /&gt;</code> for display system message
					</p>
				`,
			},
		},
		actions: { argTypesRegex: '^on' },
		cssprops: {
			'message-font-size': { value: '15px' },
			'message-icon-font-size': { value: '22px' },
		},
	},
} as Meta

const TemplateOverview: Story<MessageProps> = args => <Message {...args}>{args.children}</Message>

export const _1Overview = TemplateOverview.bind({})
_1Overview.storyName = 'Overview'
_1Overview.args = {
	children:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}
