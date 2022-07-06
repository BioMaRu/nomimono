<script lang="ts">
	let suffix = ''
</script>

<h1 class="_fs-8">Align self</h1>

<section class="nm-table-container _mgt-8">
	<table class="nm-table is-variant-compact">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
		</tr>
		</thead>
		<tbody>
			<tr><td><code>{`_als-nm${suffix}`}</code></td><td>align-self: normal</td></tr>
			<tr><td><code>{`_als-at${suffix}`}</code></td><td>align-self: auto</td></tr>
			<tr><td><code>{`_als-ct${suffix}`}</code></td><td>align-self: center</td></tr>
			<tr><td><code>{`_als-st${suffix}`}</code></td><td>align-self: start</td></tr>
			<tr><td><code>{`_als-e${suffix}`}</code></td><td>align-self: end</td></tr>
			<tr><td><code>{`_als-fst${suffix}`}</code></td><td>align-self: flex-start</td></tr>
			<tr><td><code>{`_als-fe${suffix}`}</code></td><td>align-self: flex-end</td></tr>
			<tr><td><code>{`_als-str${suffix}`}</code></td><td>align-self: stretch</td></tr>
			<tr><td><code>{`_als-bl${suffix}`}</code></td><td>align-self: baseline</td></tr>
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
