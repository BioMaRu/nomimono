<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''

	const ITEMS = [
		{ atomic: '_f-1', classes: ['flex: 1'] },
		{ atomic: '_f-n', classes: ['flex: none'] },
		{ atomic: '_f-at', classes: ['flex: auto'] },
	]
</script>

<h1 class="_fs-8">Flex</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space
	available in its flex container.
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
