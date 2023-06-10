<script>
	import dedent from 'ts-dedent'
	import Story from '../../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Table</h1>
<p>Display table.</p>
<br />
<Story>
	<div class="nm-table-container">
		<table class="nm-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Power</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Peter</td>
					<td>300</td>
				</tr>
				<tr>
					<td>Mary</td>
					<td>Over 9,000</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-table-container">
				<table class="nm-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Power</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Peter</td>
							<td>300</td>
						</tr>
						<tr>
							<td>Mary</td>
							<td>Over 9,000</td>
						</tr>
					</tbody>
				</table>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Compact table row</h2>
<br />
<Story>
	<div class="nm-table-container">
		<table class="nm-table is-variant-compact">
			<thead>
				<tr>
					<th>Name</th>
					<th>Power</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Peter</td>
					<td>300</td>
				</tr>
				<tr>
					<td>Mary</td>
					<td>Over 9,000</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div slot="code">
		{dedent`
		<table class="nm-table is-variant-compact">
			<thead>
				<tr>
					<th>Name</th>
					<th>Power</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Peter</td>
					<td>300</td>
				</tr>
				<tr>
					<td>Mary</td>
					<td>Over 9,000</td>
				</tr>
			</tbody>
		</table>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Sticky header</h2>
<br />
<Story>
	<div class="nm-table-container" style="max-height: 220px;">
		<table class="nm-table is-header-sticky">
			<thead>
				<tr>
					<th>Name</th>
					<th>Power</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Peter</td>
					<td>300</td>
				</tr>
				<tr>
					<td>Mary 1</td>
					<td>Over 9,000</td>
				</tr>
				<tr>
					<td>Mary 2</td>
					<td>Over 9,000</td>
				</tr>
				<tr>
					<td>Mary 3</td>
					<td>Over 9,000</td>
				</tr>
				<tr>
					<td>Mary 4</td>
					<td>Over 9,000</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div slot="code">
		{dedent`
		<div class="nm-table-container" style="max-height: 220px;">
			<table class="nm-table is-header-sticky">
				<thead>
					<tr>
						<th>Name</th>
						<th>Power</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Peter</td>
						<td>300</td>
					</tr>
					<tr>
						<td>Mary 1</td>
						<td>Over 9,000</td>
					</tr>
					<tr>
						<td>Mary 2</td>
						<td>Over 9,000</td>
					</tr>
					<tr>
						<td>Mary 3</td>
						<td>Over 9,000</td>
					</tr>
					<tr>
						<td>Mary 4</td>
						<td>Over 9,000</td>
					</tr>
				</tbody>
			</table>
		</div>`}
	</div>
</Story>
