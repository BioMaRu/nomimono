<script lang="ts">
	let suffix = ''
</script>

<h1 class="_fs-8">Align items</h1>

<section class="nomi-table-container _mgt-8">
	<table class="nomi-table is-variant-compact">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
		</tr>
		</thead>
		<tbody>
			<tr><td><code>{`_alit-nm${suffix}`}</code></td><td>align-items: normal</td></tr>
			<tr><td><code>{`_alit-str${suffix}`}</code></td><td>align-items: stretch</td></tr>
			<tr><td><code>{`_alit-ct${suffix}`}</code></td><td>align-items: center</td></tr>
			<tr><td><code>{`_alit-st${suffix}`}</code></td><td>align-items: start</td></tr>
			<tr><td><code>{`_alit-e${suffix}`}</code></td><td>align-items: end</td></tr>
			<tr><td><code>{`_alit-fst${suffix}`}</code></td><td>align-items: flex-start</td></tr>
			<tr><td><code>{`_alit-fe${suffix}`}</code></td><td>align-items: flex-end</td></tr>
			<tr><td><code>{`_alit-bl${suffix}`}</code></td><td>align-items: baseline</td></tr>
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
