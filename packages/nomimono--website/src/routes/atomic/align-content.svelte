<script lang="ts">
	import ModifierSelector from "$components/ModifierSelector.svelte"

	let suffix = ''
</script>

<h1 class="_fs-8">Align content</h1>

<br>

<p class="_cl-content _cl-opacity-70">
	The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
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
			<tr><td><code class="_cl-secondary">{`_alct-ct${suffix}`}</code></td><td>align-content: center</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-st${suffix}`}</code></td><td>align-content: start</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-e${suffix}`}</code></td><td>align-content: end</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-fst${suffix}`}</code></td><td>align-content: flex-start</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-fe${suffix}`}</code></td><td>align-content: flex-end</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-nm${suffix}`}</code></td><td>align-content: normal</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-bl${suffix}`}</code></td><td>align-content: baseline</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-spbtw${suffix}`}</code></td><td>align-content: space-between</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-spar${suffix}`}</code></td><td>align-content: space-around</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-spevl${suffix}`}</code></td><td>align-content: space-evenly</td></tr>
			<tr><td><code class="_cl-secondary">{`_alct-str${suffix}`}</code></td><td>align-content: stretch</td></tr>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={(v) => suffix = v.detail.value } />
