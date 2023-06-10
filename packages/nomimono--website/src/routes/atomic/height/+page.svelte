<script lang="ts">
	import { onMount } from 'svelte'
	import ModifierSelector from '$components/ModifierSelector.svelte'
	import { asValue, asProperty } from '../../../helpers'
	let suffix = ''
	let isClient = false

	const CLASSES = [
		{ atomic: '_h-', classes: ['height'] },
		{ atomic: '_mnh-', classes: ['min-height'] },
		{ atomic: '_mxh-', classes: ['max-height'] },
	]
	const PROPERTIES = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		'50pct',
		'100pct',
		'at',
		'ihr',
		'us',
		'100vw',
		'100vh',
	]
	const CUSTOM_PROPERTY = 'spc'

	onMount(() => {
		isClient = true
	})
</script>

<h1 class="_fs-8">Height</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The height CSS property specifies the height of an element.
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
						{#each CLASSES as c}
							<code class="_cl-accent">{`${c.atomic}{value}`}</code> <br />
						{/each}
					</p>
				</td>
			</tr>

			{#each PROPERTIES as it}
				<tr>
					<td>
						<code class="_cl-accent">{it}</code>
					</td>
					<td>{asProperty(it, CUSTOM_PROPERTY)}</td>
					<td class="_tal-r">
						{#if isClient}
							<div>
								{asValue(it, CUSTOM_PROPERTY)}
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
				{#each PROPERTIES as it}
					<tr>
						<td>
							<code class="_cl-accent">{`${c.atomic}${it}${suffix}`}</code>
						</td>
						<td>
							{#each c.classes as cls}
								<div>{`${cls}`}: {asProperty(it, CUSTOM_PROPERTY)};</div>
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
