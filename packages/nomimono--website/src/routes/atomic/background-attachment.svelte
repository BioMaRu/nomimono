<script lang="ts">
	import ModifierSelector from "$components/ModifierSelector.svelte"

	let suffix = ''
</script>

<h1 class="_fs-8">Background attachment</h1>

<br>

<p class="_cl-content _cl-opacity-70 _fs-3">
	The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
</p>

<section class="nm-table-container _mgt-8">
	<table class="nm-table is-variant-compact">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
		</tr>
		</thead>
		<tbody>
			<tr><td><code class="_cl-secondary">{`_bgatm-sc${suffix}`}</code></td><td>background-attachment: scroll</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgatm-f${suffix}`}</code></td><td>background-attachment: fixed</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgatm-lc${suffix}`}</code></td><td>background-attachment: local</td></tr>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={(v) => suffix = v.detail.value } />
