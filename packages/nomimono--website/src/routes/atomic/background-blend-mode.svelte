<script lang="ts">
	import ModifierSelector from "$components/ModifierSelector.svelte"

	let suffix = ''
</script>

<h1 class="_fs-8">Background blend mode</h1>

<br>

<p class="_cl-content _cl-opacity-70 _fs-3">
	The background-blend-mode CSS property sets how an element's background images should blend with each other and with the element's background color.
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
			<tr><td><code class="_cl-secondary">{`_bgbm-nm${suffix}`}</code></td><td>background-blend-mode: normal</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgbm-mtp${suffix}`}</code></td><td>background-blend-mode: multiply</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgbm-sc${suffix}`}</code></td><td>background-blend-mode: screen</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgbm-ovl${suffix}`}</code></td><td>background-blend-mode: overlay</td></tr>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={(v) => suffix = v.detail.value } />
