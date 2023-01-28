<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''

	const ITEMS = [
		{ atomic: 'fw-nw', classes: ['flex-wrap: nowrap'] },
		{ atomic: 'fw-w', classes: ['flex-wrap: wrap'] },
		{ atomic: 'fw-wrv', classes: ['flex-wrap: wrap-reverse'] },
	]
</script>

<h1 class="_fs-8">Flex wrap</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto
	multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
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
