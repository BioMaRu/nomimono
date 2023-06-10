<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''

	const ITEMS = [
		{ atomic: '_fw-100', classes: ['font-weight: 100'] },
		{ atomic: '_fw-200', classes: ['font-weight: 200'] },
		{ atomic: '_fw-300', classes: ['font-weight: 300'] },
		{ atomic: '_fw-400', classes: ['font-weight: 400'] },
		{ atomic: '_fw-500', classes: ['font-weight: 500'] },
		{ atomic: '_fw-600', classes: ['font-weight: 600'] },
		{ atomic: '_fw-700', classes: ['font-weight: 700'] },
		{ atomic: '_fw-800', classes: ['font-weight: 800'] },
		{ atomic: '_fw-900', classes: ['font-weight: 900'] },
	]
</script>

<h1 class="_fs-8">Font weight</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The font-weight CSS property sets the weight (or boldness) of the font. The weights available
	depend on the font-family that is currently set.
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
			{#each ITEMS as it}
				<tr>
					<td>
						<code class="_cl-accent">{`${it.atomic}${suffix}`}</code>
					</td>
					<td>
						{#each it.classes as c}
							<div>{`${c}`}</div>
						{/each}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={v => (suffix = v.detail.value)} />
