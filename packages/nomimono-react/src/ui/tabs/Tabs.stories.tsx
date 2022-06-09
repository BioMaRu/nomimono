import { Story, Meta } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'

Tabs.Item.displayName = 'Tabs.Item'

export default {
	component: Tabs,
	title: 'Navigation/Tabs',
	subcomponents: { 'Tabs.Item': Tabs.Item },
	actions: { handles: 'click .tabs-button' },
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
