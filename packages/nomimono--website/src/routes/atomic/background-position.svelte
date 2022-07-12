<script lang="ts">
	import ModifierSelector from "$components/ModifierSelector.svelte"

	let suffix = ''
</script>

<h1 class="_fs-8">Background position</h1>

<br>

<p class="_cl-content _cl-opacity-70">
	The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.
</p>

<section class="nm-table-container _mgt-8">
	<table class="nm-table is-variant-compact is-header-sticky">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
		</tr>
		</thead>
		<tbody>
			<tr><td><code class="_cl-secondary">{`_bgpst-t${suffix}`}</code></td><td>background-position: top</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgpst-tr${suffix}`}</code></td><td>background-position: top right</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgpst-tl${suffix}`}</code></td><td>background-position: top left</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgpst-bt${suffix}`}</code></td><td>background-position: bottom</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgpst-btr${suffix}`}</code></td><td>background-position: bottom right</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgpst-btl${suffix}`}</code></td><td>background-position: bottom left</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgpst-ct${suffix}`}</code></td><td>background-position: center</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgpst-ctr${suffix}`}</code></td><td>background-position: center right</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgpst-ctl${suffix}`}</code></td><td>background-position: center left</td></tr>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={(v) => suffix = v.detail.value } />
