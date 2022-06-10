import { Story, Meta } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'
import dedent from 'ts-dedent'

Tabs.Item.displayName = 'Tabs.Item'

export default {
	component: Tabs,
	title: 'Navigation/Tabs',
	subcomponents: { 'Tabs.Item': Tabs.Item },
	parameters: {
		docs: {
			description: {
				component: dedent`
						<div
							class="_bdrd-8px _pdh-32px _dp-f _alit-ct _bgs-cv _bgpst-tl"
							style="height: 100px; background-image: url(/images/header-bg.png);"
						>
							<h1 class="_fs-1000 _fw-600 _mg-0px">Tabs</h1>
						</div>
						<h2 class="_fs-600 _fw-600 _mgt-32px">Overview</h2>
						<p class="_lh-165pct" style="font-size: 16px;">
							<code>&lt;Tabs /&gt;</code> for tabs based navigation
						</p>
					`,
			},
		},
	},
} as Meta

const Template: Story<TabsProps> = args => (
	<Tabs {...args}>
		<Tabs.Item id={'tab_a'} label={'Show tab 1'}>
			<p className={'_pd-24px'}>Content of tab id `tab_a`</p>
		</Tabs.Item>
		<Tabs.Item id={'tab_b'} label={'Show tab 2'} labelIconClass={'fas fa-alien'}>
			<p className={'_pd-24px'}>Content of tab id `tab_b`</p>
		</Tabs.Item>
		<Tabs.Item id={'tab_c'} label={'Show tab 3'}>
			<p className={'_pd-24px'}>
				Content of tab id `tab_c`
				<br />
				Second line
			</p>
		</Tabs.Item>
	</Tabs>
)

export const _1Overview = Template.bind({})
_1Overview.storyName = 'Overview'
_1Overview.args = {
	// defaultItemId: 'tab_b',
}
