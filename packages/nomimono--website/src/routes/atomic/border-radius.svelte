<script lang="ts">
	import ModifierSelector from "$components/ModifierSelector.svelte"

	let suffix = ''
</script>

<h1 class="_fs-8">Border radius</h1>

<br>

<p class="_cl-content _cl-opacity-70">
	The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
</p>

<section class="nm-table-container is-scroll-padding _mgt-8" style="max-height: 400px;">
	<table class="nm-table is-variant-compact is-header-sticky">
		<thead>
		<tr>
			<th>Base class</th>
			<th>Class value (*)</th>
			<th>Property value</th>
			<th class="_tal-r is-collapse">default</th>
		</tr>
		</thead>
		<tbody>
			<tr>
				<td class="_vtcal-t _bdbtw-0 _bdrw-1 _bdcl-line _bdcl-opacity-50" rowspan="20">
					<p>
						<code class="_cl-secondary">{`_bdrd-*`}</code> <br>
						<code class="_cl-secondary">{`_bdtrrd-*`}</code> <br>
						<code class="_cl-secondary">{`_bdtlrd-*`}</code> <br>
						<code class="_cl-secondary">{`_bdbtrrd-*`}</code> <br>
						<code class="_cl-secondary">{`_bdbtlrd-*`}</code>
					</p>
				</td>
				<td><code class="_cl-secondary">1</code></td>
				<td>var(--spc-1)</td><td class="_tal-r">0rem</td>
			</tr>
			<tr><td><code class="_cl-secondary">2</code></td><td>var(--spc-2)</td><td class="_tal-r">0.0625rem</td></tr>
			<tr><td><code class="_cl-secondary">3</code></td><td>var(--spc-3)</td><td class="_tal-r">0.125rem</td></tr>
			<tr><td><code class="_cl-secondary">4</code></td><td>var(--spc-4)</td><td class="_tal-r">0.25rem</td></tr>
			<tr><td><code class="_cl-secondary">5</code></td><td>var(--spc-5)</td><td class="_tal-r">0.5rem</td></tr>
			<tr><td><code class="_cl-secondary">6</code></td><td>var(--spc-6)</td><td class="_tal-r">0.75rem</td></tr>
			<tr><td><code class="_cl-secondary">7</code></td><td>var(--spc-7)</td><td class="_tal-r">1rem</td></tr>
			<tr><td><code class="_cl-secondary">8</code></td><td>var(--spc-8)</td><td class="_tal-r">1.5rem</td></tr>
			<tr><td><code class="_cl-secondary">9</code></td><td>var(--spc-9)</td><td class="_tal-r">2rem</td></tr>
			<tr><td><code class="_cl-secondary">10</code></td><td>var(--spc-10)</td><td class="_tal-r">2.5rem</td></tr>
			<tr><td><code class="_cl-secondary">11</code></td><td>var(--spc-11)</td><td class="_tal-r">3rem</td></tr>
			<tr><td><code class="_cl-secondary">12</code></td><td>var(--spc-12)</td><td class="_tal-r">4rem</td></tr>
			<tr><td><code class="_cl-secondary">13</code></td><td>var(--spc-13)</td><td class="_tal-r">6rem</td></tr>
			<tr><td><code class="_cl-secondary">max</code></td><td>9999px</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">50pct</code></td><td>50%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">100pct</code></td><td>100%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">at</code></td><td>auto</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">us</code></td><td>unset</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">ihr</code></td><td>inherit</td><td class="_tal-r"></td></tr>
		</tbody>
	</table>
</section>

<h2 class="_fs-6 _fw-500 _mgt-8">All classed</h2>
<section class="nm-table-container is-scroll-padding _mgt-6" style="max-height: 400px;">
	<table class="nm-table is-variant-compact is-header-sticky">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
			<th class="_tal-r is-collapse">default</th>
		</tr>
		</thead>
		<tbody>
			<tr><td><code class="_cl-secondary">{`_bdrd-1${suffix}`}</code></td><td>border-radius: var(--spc-1)</td><td class="_tal-r">0rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-2${suffix}`}</code></td><td>border-radius: var(--spc-2)</td><td class="_tal-r">0.0625rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-3${suffix}`}</code></td><td>border-radius: var(--spc-3)</td><td class="_tal-r">0.125rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-4${suffix}`}</code></td><td>border-radius: var(--spc-4)</td><td class="_tal-r">0.25rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-5${suffix}`}</code></td><td>border-radius: var(--spc-5)</td><td class="_tal-r">0.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-6${suffix}`}</code></td><td>border-radius: var(--spc-6)</td><td class="_tal-r">0.75rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-7${suffix}`}</code></td><td>border-radius: var(--spc-7)</td><td class="_tal-r">1rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-8${suffix}`}</code></td><td>border-radius: var(--spc-8)</td><td class="_tal-r">1.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-9${suffix}`}</code></td><td>border-radius: var(--spc-9)</td><td class="_tal-r">2rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-10${suffix}`}</code></td><td>border-radius: var(--spc-10)</td><td class="_tal-r">2.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-11${suffix}`}</code></td><td>border-radius: var(--spc-11)</td><td class="_tal-r">3rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-12${suffix}`}</code></td><td>border-radius: var(--spc-12)</td><td class="_tal-r">4rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-13${suffix}`}</code></td><td>border-radius: var(--spc-13)</td><td class="_tal-r">6rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-max${suffix}`}</code></td><td>border-radius: 9999px</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-50pct${suffix}`}</code></td><td>border-radius: 50%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-100pct${suffix}`}</code></td><td>border-radius: 100%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-at${suffix}`}</code></td><td>border-radius: auto</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-us${suffix}`}</code></td><td>border-radius: unset</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdrd-ihr${suffix}`}</code></td><td>border-radius: inherit</td><td class="_tal-r"></td></tr>

			<tr><td><code class="_cl-secondary">{`_bdtlrd-1${suffix}`}</code></td><td>border-top-left-radius: var(--spc-1)</td><td class="_tal-r">0rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-2${suffix}`}</code></td><td>border-top-left-radius: var(--spc-2)</td><td class="_tal-r">0.0625rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-3${suffix}`}</code></td><td>border-top-left-radius: var(--spc-3)</td><td class="_tal-r">0.125rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-4${suffix}`}</code></td><td>border-top-left-radius: var(--spc-4)</td><td class="_tal-r">0.25rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-5${suffix}`}</code></td><td>border-top-left-radius: var(--spc-5)</td><td class="_tal-r">0.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-6${suffix}`}</code></td><td>border-top-left-radius: var(--spc-6)</td><td class="_tal-r">0.75rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-7${suffix}`}</code></td><td>border-top-left-radius: var(--spc-7)</td><td class="_tal-r">1rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-8${suffix}`}</code></td><td>border-top-left-radius: var(--spc-8)</td><td class="_tal-r">1.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-9${suffix}`}</code></td><td>border-top-left-radius: var(--spc-9)</td><td class="_tal-r">2rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-10${suffix}`}</code></td><td>border-top-left-radius: var(--spc-10)</td><td class="_tal-r">2.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-11${suffix}`}</code></td><td>border-top-left-radius: var(--spc-11)</td><td class="_tal-r">3rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-12${suffix}`}</code></td><td>border-top-left-radius: var(--spc-12)</td><td class="_tal-r">4rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-13${suffix}`}</code></td><td>border-top-left-radius: var(--spc-13)</td><td class="_tal-r">6rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-max${suffix}`}</code></td><td>border-top-left-radius: 9999px</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-50pct${suffix}`}</code></td><td>border-top-left-radius: 50%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-100pct${suffix}`}</code></td><td>border-top-left-radius: 100%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-at${suffix}`}</code></td><td>border-top-left-radius: auto</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-us${suffix}`}</code></td><td>border-top-left-radius: unset</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtlrd-ihr${suffix}`}</code></td><td>border-top-left-radius: inherit</td><td class="_tal-r"></td></tr>

			<tr><td><code class="_cl-secondary">{`_bdtrrd-1${suffix}`}</code></td><td>border-top-right-radius: var(--spc-1)</td><td class="_tal-r">0rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-2${suffix}`}</code></td><td>border-top-right-radius: var(--spc-2)</td><td class="_tal-r">0.0625rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-3${suffix}`}</code></td><td>border-top-right-radius: var(--spc-3)</td><td class="_tal-r">0.125rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-4${suffix}`}</code></td><td>border-top-right-radius: var(--spc-4)</td><td class="_tal-r">0.25rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-5${suffix}`}</code></td><td>border-top-right-radius: var(--spc-5)</td><td class="_tal-r">0.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-6${suffix}`}</code></td><td>border-top-right-radius: var(--spc-6)</td><td class="_tal-r">0.75rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-7${suffix}`}</code></td><td>border-top-right-radius: var(--spc-7)</td><td class="_tal-r">1rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-8${suffix}`}</code></td><td>border-top-right-radius: var(--spc-8)</td><td class="_tal-r">1.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-9${suffix}`}</code></td><td>border-top-right-radius: var(--spc-9)</td><td class="_tal-r">2rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-10${suffix}`}</code></td><td>border-top-right-radius: var(--spc-10)</td><td class="_tal-r">2.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-11${suffix}`}</code></td><td>border-top-right-radius: var(--spc-11)</td><td class="_tal-r">3rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-12${suffix}`}</code></td><td>border-top-right-radius: var(--spc-12)</td><td class="_tal-r">4rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-13${suffix}`}</code></td><td>border-top-right-radius: var(--spc-13)</td><td class="_tal-r">6rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-max${suffix}`}</code></td><td>border-top-right-radius: 9999px</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-50pct${suffix}`}</code></td><td>border-top-right-radius: 50%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-100pct${suffix}`}</code></td><td>border-top-right-radius: 100%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-at${suffix}`}</code></td><td>border-top-right-radius: auto</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-us${suffix}`}</code></td><td>border-top-right-radius: unset</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdtrrd-ihr${suffix}`}</code></td><td>border-top-right-radius: inherit</td><td class="_tal-r"></td></tr>

			<tr><td><code class="_cl-secondary">{`_bdbtlrd-1${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-1)</td><td class="_tal-r">0rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-2${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-2)</td><td class="_tal-r">0.0625rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-3${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-3)</td><td class="_tal-r">0.125rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-4${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-4)</td><td class="_tal-r">0.25rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-5${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-5)</td><td class="_tal-r">0.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-6${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-6)</td><td class="_tal-r">0.75rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-7${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-7)</td><td class="_tal-r">1rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-8${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-8)</td><td class="_tal-r">1.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-9${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-9)</td><td class="_tal-r">2rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-10${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-10)</td><td class="_tal-r">2.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-11${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-11)</td><td class="_tal-r">3rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-12${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-12)</td><td class="_tal-r">4rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-13${suffix}`}</code></td><td>border-bottom-left-radius: var(--spc-13)</td><td class="_tal-r">6rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-max${suffix}`}</code></td><td>border-bottom-left-radius: 9999px</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-50pct${suffix}`}</code></td><td>border-bottom-left-radius: 50%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-100pct${suffix}`}</code></td><td>border-bottom-left-radius: 100%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-at${suffix}`}</code></td><td>border-bottom-left-radius: auto</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-us${suffix}`}</code></td><td>border-bottom-left-radius: unset</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtlrd-ihr${suffix}`}</code></td><td>border-bottom-left-radius: inherit</td><td class="_tal-r"></td></tr>

			<tr><td><code class="_cl-secondary">{`_bdbtrrd-1${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-1)</td><td class="_tal-r">0rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-2${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-2)</td><td class="_tal-r">0.0625rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-3${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-3)</td><td class="_tal-r">0.125rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-4${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-4)</td><td class="_tal-r">0.25rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-5${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-5)</td><td class="_tal-r">0.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-6${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-6)</td><td class="_tal-r">0.75rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-7${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-7)</td><td class="_tal-r">1rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-8${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-8)</td><td class="_tal-r">1.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-9${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-9)</td><td class="_tal-r">2rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-10${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-10)</td><td class="_tal-r">2.5rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-11${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-11)</td><td class="_tal-r">3rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-12${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-12)</td><td class="_tal-r">4rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-13${suffix}`}</code></td><td>border-bottom-right-radius: var(--spc-13)</td><td class="_tal-r">6rem</td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-max${suffix}`}</code></td><td>border-bottom-right-radius: 9999px</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-50pct${suffix}`}</code></td><td>border-bottom-right-radius: 50%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-100pct${suffix}`}</code></td><td>border-bottom-right-radius: 100%</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-at${suffix}`}</code></td><td>border-bottom-right-radius: auto</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-us${suffix}`}</code></td><td>border-bottom-right-radius: unset</td><td class="_tal-r"></td></tr>
			<tr><td><code class="_cl-secondary">{`_bdbtrrd-ihr${suffix}`}</code></td><td>border-bottom-right-radius: inherit</td><td class="_tal-r"></td></tr>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={(v) => suffix = v.detail.value } />
