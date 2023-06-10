<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''

	const ITEMS = [
		{ atomic: '_cs-pt', classes: ['cursor: pointer'] },
		{ atomic: '_cs-h', classes: ['cursor: help'] },
		{ atomic: '_cs-nal', classes: ['cursor: not-allowed'] },
		{ atomic: '_cs-m', classes: ['cursor: move'] },
		{ atomic: '_cs-w', classes: ['cursor: wait'] },
		{ atomic: '_cs-at', classes: ['cursor: auto'] },
	]
</script>

<h1 class="_fs-8">Cursor</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The cursor CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an
	element.
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
