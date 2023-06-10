import { Story, Meta } from '@storybook/react'
import { Table, TableProps } from './Table'
import dedent from 'ts-dedent'

Table.Row.displayName = 'Table.Row'
Table.Head.displayName = 'Table.Head'
Table.Data.displayName = 'Table.Data'

export default {
	component: Table,
	title: 'Display Data/Table',
	subcomponents: {
		'Table.Row': Table.Row,
		'Table.Head': Table.Head,
		'Table.Data': Table.Data,
	},
	parameters: {
		docs: {
			description: {
				component: dedent`
						<div
							class="_bdrd-8px _pdh-32px _dp-f _alit-ct _bgs-cv _bgpst-tl"
							style="height: 100px; background-image: url(/images/header-bg.png);"
						>
							<h1 class="_fs-1000 _fw-600 _mg-0px">Table</h1>
						</div>
						<h2 class="_fs-600 _fw-600 _mgt-32px">Overview</h2>
						<p class="_lh-165pct" style="font-size: 16px;">
							<code>&lt;Table /&gt;</code> for display table of data
						</p>
					`,
			},
		},
		actions: { argTypesRegex: '^on' },
		cssprops: {
			'table-border-width': { value: '1px' },
			'table-border-radius': { value: '8px' },

			'table-head-font-weight': { value: '500' },
			'table-head-font-size': { value: '14px' },
			'table-head-font-family': { value: `var(--ffml-secondary)`, control: 'text' },
			'table-head-vertical-padding': { value: '12px' },

			'table-data-vertical-padding': { value: '16px' },
			'table-data-font-size': { value: '14px' },

			'table-gutter': { value: '24px' },
			'table-side-padding': { value: '16px' },
		},
	},
} as Meta

const Template: Story<TableProps> = args => (
	<Table {...args}>
		<Table.Head>Name</Table.Head>
		<Table.Head align={'right'} width={150}>
			Join at
		</Table.Head>
		<Table.Head align={'right'}>Power</Table.Head>
		<Table.Head isCollapse></Table.Head>

		{[1, 2, 3].map(it => (
			<Table.Row key={it}>
				<Table.Data>BioMaRu</Table.Data>
				<Table.Data align={'right'}>31/12/2022</Table.Data>
				<Table.Data align={'right'}>155,000</Table.Data>
				<Table.Data>✍️</Table.Data>
			</Table.Row>
		))}

		<Table.Row variant={'compact'}>
			<Table.Data colSpan={4} align={'right'}>
				Total: 3
			</Table.Data>
		</Table.Row>
	</Table>
)

export const _1Overview = Template.bind({})
_1Overview.storyName = 'Overview'
_1Overview.parameters = {
	docs: {
		description: {
			story: dedent`
				---
			`,
		},
		source: {
			state: 'close',
			code: dedent`
			<Table>
			  <Table.Head>Name</Table.Head>
			  <Table.Head align={'right'} width={150}>Join at</Table.Head>
			  <Table.Head align={'right'}>Power</Table.Head>
			  <Table.Head isCollapse></Table.Head>

			  {[1, 2, 3].map(it => (
			    <Table.Row key={it}>
			      <Table.Data>BioMaRu</Table.Data>
			      <Table.Data align={'right'}>31/12/2022</Table.Data>
			      <Table.Data align={'right'}>155,000</Table.Data>
			      <Table.Data>✍️</Table.Data>
			    </Table.Row>
			  ))}

			  <Table.Row variant={'compact'}>
			    <Table.Data colSpan={4} align={'right'}>
			      Total: 3
			    </Table.Data>
			  </Table.Row>
			</Table>
		  `,
		},
	},
}
