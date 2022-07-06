<script lang="ts">
	let suffix = ''
</script>

<h1 class="_fs-8">Align content</h1>

<section class="nm-table-container _mgt-8">
	<table class="nm-table is-variant-compact">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
		</tr>
		</thead>
		<tbody>
			<tr><td><code>{`_alct-ct${suffix}`}</code></td><td>align-content: center</td></tr>
			<tr><td><code>{`_alct-st${suffix}`}</code></td><td>align-content: start</td></tr>
			<tr><td><code>{`_alct-e${suffix}`}</code></td><td>align-content: end</td></tr>
			<tr><td><code>{`_alct-fst${suffix}`}</code></td><td>align-content: flex-start</td></tr>
			<tr><td><code>{`_alct-fe${suffix}`}</code></td><td>align-content: flex-end</td></tr>
			<tr><td><code>{`_alct-nm${suffix}`}</code></td><td>align-content: normal</td></tr>
			<tr><td><code>{`_alct-bl${suffix}`}</code></td><td>align-content: baseline</td></tr>
			<tr><td><code>{`_alct-spbtw${suffix}`}</code></td><td>align-content: space-between</td></tr>
			<tr><td><code>{`_alct-spar${suffix}`}</code></td><td>align-content: space-around</td></tr>
			<tr><td><code>{`_alct-spevl${suffix}`}</code></td><td>align-content: space-evenly</td></tr>
			<tr><td><code>{`_alct-str${suffix}`}</code></td><td>align-content: stretch</td></tr>
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
