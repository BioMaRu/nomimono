import { Story, Meta } from '@storybook/react'
import { Table, TableProps } from './Table'

export default {
	component: Table,
	title: 'Display Data/Table',
} as Meta

const Template: Story<TableProps> = args => <Table {...args} />

export const _0Overview = Template.bind({})
_0Overview.storyName = 'Overview'
_0Overview.args = {}
