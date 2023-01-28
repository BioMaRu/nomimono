<script lang="ts">
	import { onMount } from 'svelte'
	import ModifierSelector from '$components/ModifierSelector.svelte'
	import { asValue, asProperty } from '../../helpers'
	let suffix = ''
	let isClient = false
	const CLASSES = [
		{ atomic: '_bdw-', classes: ['border-width'] },
		{ atomic: '_bdlw-', classes: ['border-left-width'] },
		{ atomic: '_bdrw-', classes: ['border-right-width'] },
		{ atomic: '_bdtw-', classes: ['border-top-width'] },
		{ atomic: '_bdbtw-', classes: ['border-bottom-width'] },
		{ atomic: '_bdvw-', classes: ['border-top-width', 'border-bottom-width'] },
		{ atomic: '_bdhw-', classes: ['border-left-width', 'border-right-width'] },
	]

	onMount(() => {
		isClient = true
	})
</script>

<h1 class="_fs-8">Border width</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The border-width shorthand CSS property sets the width of an element's border.
</p>

<section class="nm-table-container is-scroll-padding u-scrollbar _mgt-8" style="max-height: 400px;">
	<table class="nm-table is-variant-compact is-header-sticky">
		<thead>
			<tr>
				<th>Base class</th>
				<th>{`{value}`}</th>
				<th>Property</th>
				<th class="_tal-r is-collapse">Property value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="_vtcal-t _bdbtw-0 _bdrw-1 _bdcl-line _bdcl-opacity-50" rowspan="20">
					<p class="_pst-stk _t-11">
						<code class="_cl-accent">{`_bdw-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdtrw-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdlw-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdbtrw-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdrw-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdvw-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdhw-{value}`}</code>
					</p>
				</td>
			</tr>

			{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'at', 'ihr', 'us'] as it}
				<tr>
					<td>
						<code class="_cl-accent">{it}</code>
					</td>
					<td>{asProperty(it, 'spc')}</td>
					<td class="_tal-r">
						{#if isClient}
							<div>
								{asValue(it, 'spc')}
							</div>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<h2 class="_fs-6 _fw-500 _mgt-8">All classes</h2>
<section class="nm-table-container is-scroll-padding u-scrollbar _mgt-6" style="max-height: 400px;">
	<table class="nm-table is-variant-compact is-header-sticky">
		<thead>
			<tr>
				<th>Class name</th>
				<th>Styles</th>
			</tr>
		</thead>
		<tbody>
			{#each CLASSES as c}
				{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 'at', 'ihr', 'us'] as it}
					<tr>
						<td>
							<code class="_cl-accent">{`${c.atomic}${it}${suffix}`}</code>
						</td>
						<td>
							{#each c.classes as cls}
								<div>{`${cls}`}: {asProperty(it, 'spc')};</div>
							{/each}
						</td>
					</tr>
				{/each}
			{/each}
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={v => (suffix = v.detail.value)} />
