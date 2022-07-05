<script lang="ts">
	let suffix = ''
</script>

<h1 class="_fs-8">Background attachment</h1>

<section class="nomi-table-container _mgt-8">
	<table class="nomi-table is-variant-compact">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
		</tr>
		</thead>
		<tbody>
			<tr><td><code>{`_bgatm-sc${suffix}`}</code></td><td>background-attachment: scroll</td></tr>
			<tr><td><code>{`_bgatm-f${suffix}`}</code></td><td>background-attachment: fixed</td></tr>
			<tr><td><code>{`_bgatm-lc${suffix}`}</code></td><td>background-attachment: local</td></tr>
		</tbody>
	</table>
</section>

<section class="lo-12 _g-4 _mgt-8">
	<div class="nomi-radio">
		<input checked id="b" name="suffix" on:change={() => suffix = ''} type="radio">
		<label for="b">Default</label>
	</div>
	<div class="nomi-radio">
		<input id="sm" name="suffix" on:change={() => suffix = ':sm'} type="radio">
		<label for="sm">min-width: 768px; small</label>
	</div>
	<div class="nomi-radio">
		<input id="md" name="suffix" on:change={() => suffix = ':md'} type="radio">
		<label for="md">min-width: 1024px; medium</label>
	</div>
	<div class="nomi-radio">
		<input id="lg" name="suffix" on:change={() => suffix = ':lg'} type="radio">
		<label for="lg">min-width: 1280px; large</label>
	</div>
</section>
