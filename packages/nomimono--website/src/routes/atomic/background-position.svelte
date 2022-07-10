<script lang="ts">
	let suffix = ''
</script>

<h1 class="_fs-8">Background position</h1>

<section class="nm-table-container _mgt-8">
	<table class="nm-table is-variant-compact">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
		</tr>
		</thead>
		<tbody>
			<tr><td><code>{`_bgpst-t${suffix}`}</code></td><td>background-position: top</td></tr>
			<tr><td><code>{`_bgpst-tr${suffix}`}</code></td><td>background-position: top right</td></tr>
			<tr><td><code>{`_bgpst-tl${suffix}`}</code></td><td>background-position: top left</td></tr>
			<tr><td><code>{`_bgpst-bt${suffix}`}</code></td><td>background-position: bottom</td></tr>
			<tr><td><code>{`_bgpst-btr${suffix}`}</code></td><td>background-position: bottom right</td></tr>
			<tr><td><code>{`_bgpst-btl${suffix}`}</code></td><td>background-position: bottom left</td></tr>
			<tr><td><code>{`_bgpst-ct${suffix}`}</code></td><td>background-position: center</td></tr>
			<tr><td><code>{`_bgpst-ctr${suffix}`}</code></td><td>background-position: center right</td></tr>
			<tr><td><code>{`_bgpst-ctl${suffix}`}</code></td><td>background-position: center left</td></tr>
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
