<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''
</script>

<h1 class="_fs-8">Aspect ratio</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The aspect-ratio CSS property sets a preferred aspect ratio for the box, which will be used in
	the calculation of auto sizes and some other layout functions.
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
			<tr>
				<td>
					<code class="_cl-accent">{`_asprt-1/1${suffix}`}</code>
				</td>
				<td>aspect-ratio: 1 / 1</td>
			</tr>
			<tr>
				<td>
					<code class="_cl-accent">{`_asprt-3/2${suffix}`}</code>
				</td>
				<td>aspect-ratio: 3 / 2</td>
			</tr>
			<tr>
				<td>
					<code class="_cl-accent">{`_asprt-4/3${suffix}`}</code>
				</td>
				<td>aspect-ratio: 4 / 3</td>
			</tr>
			<tr>
				<td>
					<code class="_cl-accent">{`_asprt-16/9${suffix}`}</code>
				</td>
				<td>aspect-ratio: 16 / 9</td>
			</tr>
			<tr>
				<td>
					<code class="_cl-accent">{`_asprt-16/10${suffix}`}</code>
				</td>
				<td>aspect-ratio: 16 / 10</td>
			</tr>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={v => (suffix = v.detail.value)} />
