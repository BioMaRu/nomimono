<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''

	const ITEMS = [
		{ atomic: '_f-l', classes: ['float: left'] },
		{ atomic: '_f-r', classes: ['float: right'] },
		{ atomic: '_f-n', classes: ['float: none'] },
		{ atomic: '_f-ilst', classes: ['float: inline-start'] },
		{ atomic: '_f-ile', classes: ['float: inline-end'] },
		{ atomic: '_f-us', classes: ['float: unset'] },
	]
</script>

<h1 class="_fs-8">Float</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The float CSS property places an element on the left or right side of its container, allowing
	text and inline elements to wrap around it. The element is removed from the normal flow of the
	page, though still remaining a part of the flow (in contrast to absolute positioning).
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
