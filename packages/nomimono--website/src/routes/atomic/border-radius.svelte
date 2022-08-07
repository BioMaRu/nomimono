<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''

	const CLASSES = ['_bdrd-', '_bdtlrd-', '_bdtrrd-', '_bdbtlrd-', '_bdbtrrd-']
</script>

<h1 class="_fs-8">Border radius</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The border-radius CSS property rounds the corners of an element's outer border edge. You can set
	a single radius to make circular corners, or two radii to make elliptical corners.
</p>

<section class="nm-table-container is-scroll-padding u-scrollbar _mgt-8" style="max-height: 400px;">
	<table class="nm-table is-variant-compact is-header-sticky">
		<thead>
			<tr>
				<th>Base class</th>
				<th>{`{value}`}</th>
				<th>Property value</th>
				<th class="_tal-r is-collapse">default</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="_vtcal-t _bdbtw-0 _bdrw-1 _bdcl-line _bdcl-opacity-50" rowspan="20">
					<p class="_pst-stk _t-11">
						<code class="_cl-accent">{`_bdrd-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdtrrd-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdtlrd-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdbtrrd-{value}`}</code> <br />
						<code class="_cl-accent">{`_bdbtlrd-{value}`}</code>
					</p>
				</td>
				<td><code class="_cl-accent">1</code></td>
				<td>var(--spc-1)</td><td class="_tal-r">0rem</td>
			</tr>
			<tr
				><td><code class="_cl-accent">2</code></td><td>var(--spc-2)</td><td class="_tal-r"
					>0.0625rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">3</code></td><td>var(--spc-3)</td><td class="_tal-r"
					>0.125rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">4</code></td><td>var(--spc-4)</td><td class="_tal-r"
					>0.25rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">5</code></td><td>var(--spc-5)</td><td class="_tal-r"
					>0.5rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">6</code></td><td>var(--spc-6)</td><td class="_tal-r"
					>0.75rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">7</code></td><td>var(--spc-7)</td><td class="_tal-r"
					>1rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">8</code></td><td>var(--spc-8)</td><td class="_tal-r"
					>1.5rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">9</code></td><td>var(--spc-9)</td><td class="_tal-r"
					>2rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">10</code></td><td>var(--spc-10)</td><td class="_tal-r"
					>2.5rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">11</code></td><td>var(--spc-11)</td><td class="_tal-r"
					>3rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">12</code></td><td>var(--spc-12)</td><td class="_tal-r"
					>4rem</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">13</code></td><td>var(--spc-13)</td><td class="_tal-r"
					>6rem</td
				></tr
			>
			<tr><td><code class="_cl-accent">max</code></td><td>9999px</td><td class="_tal-r" /></tr
			>
			<tr><td><code class="_cl-accent">50pct</code></td><td>50%</td><td class="_tal-r" /></tr>
			<tr
				><td><code class="_cl-accent">100pct</code></td><td>100%</td><td
					class="_tal-r"
				/></tr
			>
			<tr><td><code class="_cl-accent">at</code></td><td>auto</td><td class="_tal-r" /></tr>
			<tr><td><code class="_cl-accent">us</code></td><td>unset</td><td class="_tal-r" /></tr>
			<tr
				><td><code class="_cl-accent">ihr</code></td><td>inherit</td><td
					class="_tal-r"
				/></tr
			>
		</tbody>
	</table>
</section>

<h2 class="_fs-6 _fw-500 _mgt-8">All classed</h2>
<section class="nm-table-container is-scroll-padding u-scrollbar _mgt-6" style="max-height: 400px;">
	<table class="nm-table is-variant-compact is-header-sticky">
		<thead>
			<tr>
				<th>Class name</th>
				<th>Properties</th>
				<th class="_tal-r is-collapse">default</th>
			</tr>
		</thead>
		<tbody>
			{#each CLASSES as c}
				<tr
					><td><code class="_cl-accent">{`${c}1${suffix}`}</code></td><td
						>border-radius: var(--spc-1)</td
					><td class="_tal-r">0rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}2${suffix}`}</code></td><td
						>border-radius: var(--spc-2)</td
					><td class="_tal-r">0.0625rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}3${suffix}`}</code></td><td
						>border-radius: var(--spc-3)</td
					><td class="_tal-r">0.125rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}4${suffix}`}</code></td><td
						>border-radius: var(--spc-4)</td
					><td class="_tal-r">0.25rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}5${suffix}`}</code></td><td
						>border-radius: var(--spc-5)</td
					><td class="_tal-r">0.5rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}6${suffix}`}</code></td><td
						>border-radius: var(--spc-6)</td
					><td class="_tal-r">0.75rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}7${suffix}`}</code></td><td
						>border-radius: var(--spc-7)</td
					><td class="_tal-r">1rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}8${suffix}`}</code></td><td
						>border-radius: var(--spc-8)</td
					><td class="_tal-r">1.5rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}9${suffix}`}</code></td><td
						>border-radius: var(--spc-9)</td
					><td class="_tal-r">2rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}10${suffix}`}</code></td><td
						>border-radius: var(--spc-10)</td
					><td class="_tal-r">2.5rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}11${suffix}`}</code></td><td
						>border-radius: var(--spc-11)</td
					><td class="_tal-r">3rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}12${suffix}`}</code></td><td
						>border-radius: var(--spc-12)</td
					><td class="_tal-r">4rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}13${suffix}`}</code></td><td
						>border-radius: var(--spc-13)</td
					><td class="_tal-r">6rem</td></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}max${suffix}`}</code></td><td
						>border-radius: 9999px</td
					><td class="_tal-r" /></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}50pct${suffix}`}</code></td><td
						>border-radius: 50%</td
					><td class="_tal-r" /></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}100pct${suffix}`}</code></td><td
						>border-radius: 100%</td
					><td class="_tal-r" /></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}at${suffix}`}</code></td><td
						>border-radius: auto</td
					><td class="_tal-r" /></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}us${suffix}`}</code></td><td
						>border-radius: unset</td
					><td class="_tal-r" /></tr
				>
				<tr
					><td><code class="_cl-accent">{`${c}ihr${suffix}`}</code></td><td
						>border-radius: inherit</td
					><td class="_tal-r" /></tr
				>
			{/each}
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={v => (suffix = v.detail.value)} />
