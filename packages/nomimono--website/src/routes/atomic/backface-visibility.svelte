<script lang="ts">
	import ModifierSelector from "$components/ModifierSelector.svelte"

	let suffix = ''
</script>

<h1 class="_fs-8">Backface visibility</h1>

<br>

<p class="_cl-content _cl-opacity-70 _fs-3">
	The backface-visibility CSS property sets whether the back face of an element is visible when turned towards the user.
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
			<tr><td><code class="_cl-secondary">{`_bfvsblt-hd${suffix}`}</code></td><td>backface-visibility: hidden</td></tr>
			<tr><td><code class="_cl-secondary">{`_bfvsblt-vsb${suffix}`}</code></td><td>backface-visibility: visible</td></tr>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={(v) => suffix = v.detail.value } />
