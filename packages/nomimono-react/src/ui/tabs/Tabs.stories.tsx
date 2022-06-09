import { Story, Meta } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'

Tabs.Item.displayName = 'Tabs.Item'

export default {
	component: Tabs,
	title: 'Tabs',
	subcomponents: { 'Tabs.Item': Tabs.Item },
} as Meta

const Template: Story<TabsProps> = args => (
	<Tabs {...args}>
		<Tabs.Item id={'tab_a'} label={'Tab 1'}>
			Content of tab 1
		</Tabs.Item>
		<Tabs.Item id={'tab_b'} label={'Tab 2'} labelIconClass={'fas fa-alien'}>
			Content of tab 2
		</Tabs.Item>
		<Tabs.Item id={'tab_c'} label={'Tab 3'}>
			Content of tab 3
		</Tabs.Item>
	</Tabs>
)

export const Primary = Template.bind({})
Primary.args = {
	defaultActiveId: 'tab_b',
}
