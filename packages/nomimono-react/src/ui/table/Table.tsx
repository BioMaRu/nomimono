import './Table.scss'

/* eslint-disable-next-line */
export interface TableProps {}

export function Table(props: TableProps) {
	return (
		<div className={'nomi-table-container'}>
			<table className={'nomi-table'}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Power</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Micheal Lucifer</td>
						<td>125,200.00</td>
						<td>22/05/2024</td>
					</tr>
					<tr>
						<td>Micheal Lucifer</td>
						<td>125,200.00</td>
						<td>22/05/2024</td>
					</tr>
					<tr>
						<td>Micheal Lucifer</td>
						<td>125,200.00</td>
						<td>22/05/2024</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Table
