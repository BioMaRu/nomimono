<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''
</script>

<h1 class="_fs-8">Background size</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The background-size CSS property sets the size of the element's background image. The image can
	be left to its natural size, stretched, or constrained to fit the available space.
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
			<tr
				><td><code class="_cl-accent">{`_bgs-ct${suffix}`}</code></td><td
					>background-size: contain</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_bgs-cv${suffix}`}</code></td><td
					>background-size: cover</td
				></tr
			>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={v => (suffix = v.detail.value)} />
