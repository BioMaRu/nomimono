<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''

	const ITEMS = [
		{ atomic: '_islt-at', classes: ['isolation: auto'] },
		{ atomic: '_islt-isl', classes: ['isolation: isolate'] },
		{ atomic: '_islt-us', classes: ['isolation: unset'] },
	]
</script>

<h1 class="_fs-8">Isolation</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The isolation CSS property determines whether an element must create a new stacking context.
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
