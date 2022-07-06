import './Table.scss'
import React, { ReactNode, ReactElement, FC } from 'react'
import classNames from 'classnames'
import { ITable, ITableData, ITableHead, ITableRow } from './type'

export const TABLE = {
	variant: {
		default: 'default',
		primary: 'primary',
	},
} as ITable

export const TABLE_ROW = {
	variant: {
		compact: 'compact',
	},
} as ITableRow

export const TABLE_HEAD = {
	align: {
		left: 'left',
		right: 'right',
		center: 'center',
	},
} as ITableHead

export const TABLE_DATA = {
	align: {
		left: 'left',
		right: 'right',
		center: 'center',
	},
} as ITableData

export interface TableRowProps extends React.BaseHTMLAttributes<HTMLTableRowElement> {
	variant?: keyof ITableRow['variant']
	children?: ReactNode
}

export interface TableHeadProps extends React.BaseHTMLAttributes<HTMLElement> {
	align?: keyof ITableHead['align']
	width?: string | number
	isCollapse?: boolean
	children?: ReactNode
}

export interface TableDataProps extends React.BaseHTMLAttributes<HTMLElement> {
	align?: keyof ITableData['align']
	colSpan?: number
	rowSpan?: number
	children?: ReactNode
}

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
	variant?: keyof ITable['variant']
	children?: ReactNode
}

type TableRowElement = ReactElement<TableRowProps & { __TYPE: string }>
type TableHeadElement = ReactElement<TableHeadProps & { __TYPE: string }>
type TableDataElement = ReactElement<TableDataProps & { __TYPE: string }>

export const Table: FC<TableProps> & {
	Head: FC<TableHeadProps>
	Row: FC<TableRowProps>
	Data: FC<TableDataProps>
} = (props: TableProps) => {
	const { children, ...rest } = props

	const arr = React.Children.toArray(children) as ReactElement<{ __TYPE: string }>[]
	const th = arr.filter(it => it?.props?.__TYPE === 'TableHead') as TableHeadElement[]
	const tr = arr
		.filter(it => it?.props?.__TYPE === 'TableRow')
		.map((r: TableRowElement) => {
			const c = React.Children.toArray(r.props?.children) as TableDataElement[]
			return {
				...r,
				props: {
					...r.props,
					children: c?.filter(it3 => it3.props.__TYPE === 'TableData'),
				},
			}
		})

	return (
		<div className={'nm-table-container'}>
			<table
				{...rest}
				className={classNames('nm-table', props?.className, {
					'is-variant-primary': props.variant === TABLE.variant.primary,
				})}
			>
				<thead>
					<tr>{th}</tr>
				</thead>
				<tbody>
					{tr.map((it, idx) => {
						const { children, className, variant, __TYPE, ...rest } =
							props as TableRowProps & {
								__TYPE: string
							}

						return (
							<tr
								{...rest}
								className={classNames(props?.className, {
									'is-variant-compact':
										it.props.variant === TABLE_ROW.variant.compact,
								})}
								key={idx}
							>
								{it.props?.children}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export const TableRow: FC<TableRowProps> = props => {
	const { children, className, variant, __TYPE, ...rest } = props as TableRowProps & {
		__TYPE: string
	}
	console.log('props')
	return (
		<tr
			{...rest}
			className={classNames(props?.className, {
				'is-variant-compact': props.variant === TABLE_ROW.variant.compact,
			})}
		>
			{props.children}
		</tr>
	)
}
export const TableHead: FC<TableHeadProps> = props => {
	const { className, children, style, isCollapse, __TYPE, ...rest } = props as TableHeadProps & {
		__TYPE: string
	}

	return (
		<th
			{...rest}
			style={{
				width: props.width,
				minWidth: props.width,
				maxWidth: props.width,
				...style,
			}}
			className={classNames(props?.className, {
				'is-align-left': props.align === TABLE_HEAD.align.left,
				'is-align-right': props.align === TABLE_HEAD.align.right,
				'is-align-center': props.align === TABLE_HEAD.align.center,
				'is-collapse': props.isCollapse,
			})}
		>
			{props.children}
		</th>
	)
}

export const TableData: FC<TableDataProps> = props => {
	const { align, className, children, __TYPE, ...rest } = props as TableDataProps & {
		__TYPE: string
	}

	return (
		<td
			{...rest}
			className={classNames(props?.className, {
				'is-align-left': props.align === TABLE_DATA.align.left,
				'is-align-right': props.align === TABLE_DATA.align.right,
				'is-align-center': props.align === TABLE_DATA.align.center,
			})}
		>
			{props.children}
		</td>
	)
}
;(TableRow as any).defaultProps = {
	__TYPE: 'TableRow',
}
;(TableHead as any).defaultProps = {
	__TYPE: 'TableHead',
}
;(TableData as any).defaultProps = {
	__TYPE: 'TableData',
}

Table.Row = TableRow
Table.Head = TableHead
Table.Data = TableData

export default Table
