<script lang="ts">
	let suffix = ''
</script>

<h1 class="_fs-8">Display</h1>

<section class="nm-table-container _mgt-8">
	<table class="nm-table is-variant-compact">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
		</tr>
		</thead>
		<tbody class="_fs-4">
			<tr><td><code>{`_dp-b${suffix}`}</code></td><td>display: block</td></tr>
			<tr><td><code>{`_dp-f${suffix}`}</code></td><td>display: flex</td></tr>
			<tr><td><code>{`_dp-g${suffix}`}</code></td><td>display: grid</td></tr>
			<tr><td><code>{`_dp-il${suffix}`}</code></td><td>display: inline</td></tr>
			<tr><td><code>{`_dp-ilb${suffix}`}</code></td><td>display: inline-block</td></tr>
			<tr><td><code>{`_dp-ilf${suffix}`}</code></td><td>display: inline-flex</td></tr>
			<tr><td><code>{`_dp-ilg${suffix}`}</code></td><td>display: inline-grid</td></tr>
			<tr><td><code>{`_dp-n${suffix}`}</code></td><td>display: none</td></tr>
		</tbody>
	</table>
</section>

<section class="lo-12 _g-4 _mgt-8">
	<div class="nm-radio">
		<input checked id="b" name="suffix" on:change={() => suffix = ''} type="radio">
		<label for="b">Default</label>
	</div>
	<div class="nm-radio">
		<input id="sm" name="suffix" on:change={() => suffix = ':sm'} type="radio">
		<label for="sm">min-width: 768px; small</label>
	</div>
	<div class="nm-radio">
		<input id="md" name="suffix" on:change={() => suffix = ':md'} type="radio">
		<label for="md">min-width: 1024px; medium</label>
	</div>
	<div class="nm-radio">
		<input id="lg" name="suffix" on:change={() => suffix = ':lg'} type="radio">
		<label for="lg">min-width: 1280px; large</label>
	</div>
</section>
