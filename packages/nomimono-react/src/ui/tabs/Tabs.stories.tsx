import { Story, Meta } from '@storybook/react'
import { Tabs, TabsProps } from './Tabs'

export default {
	component: Tabs,
	title: 'Tabs',
	subcomponents: { 'Tabs.Item': Tabs.Item },
} as Meta

const Template: Story<TabsProps> = args => (
	<Tabs {...args}>
		<Tabs.Item id={'aaa'}>Content of tab 1</Tabs.Item>
		<Tabs.Item>Content of tab 2</Tabs.Item>
		<Tabs.Item>Content of tab 3</Tabs.Item>
	</Tabs>
)

export const Primary = Template.bind({})
Primary.args = {}
