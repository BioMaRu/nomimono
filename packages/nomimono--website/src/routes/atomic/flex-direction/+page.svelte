<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''

	const ITEMS = [
		{ atomic: '_fdrt-r', classes: ['flex-direction: row'] },
		{ atomic: '_fdrt-cl', classes: ['flex-direction: column'] },
		{ atomic: '_fdrt-rrv', classes: ['flex-direction: row-reverse'] },
		{ atomic: '_fdrt-clrv', classes: ['flex-direction: column-reverse'] },
	]
</script>

<h1 class="_fs-8">Flex direction</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The flex-direction CSS property sets how flex items are placed in the flex container defining
	the main axis and the direction (normal or reversed).
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
