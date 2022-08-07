<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	import { afterUpdate } from 'svelte'

	let suffix = ''

	afterUpdate(async () => {
		const items = document.querySelectorAll(
			'#background-color-table tbody tr td:last-child div div',
		)
		const ct = Array.from(
			document.querySelectorAll('#background-color-table tbody tr .computed'),
		)

		Array.from(items).forEach((it, idx) => {
			const a = window.getComputedStyle(it)
			ct[idx].innerText = a.backgroundColor
		})
	})

	const COLORS = [
		'primary',
		'primary-active',
		'primary-content',
		'secondary',
		'secondary-active',
		'secondary-content',
		'base-100',
		'base-200',
		'base-300',
		'base-400',
		'line',
		'content',
		'content-inv',
		'positive',
		'positive-content',
		'negative',
		'negative-content',
		'warning',
		'warning-content',
		'info',
		'info-content',
		'black',
		'white',
	]
</script>

<h1 class="_fs-8">Background color</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The background-color CSS property sets the background color of an element.
</p>

<section
	class="nm-table-container is-scroll-padding u-scrollbar _ovfy-sc _mgt-8"
	id="background-color-table"
	style="max-height: 480px;"
>
	<table class="nm-table is-variant-compact is-header-sticky">
		<thead>
			<tr>
				<th>Class name</th>
				<th>Properties</th>
				<th class="_w-12" />
			</tr>
		</thead>
		<tbody>
			{#each COLORS as color}
				<tr>
					<td><code class="_cl-accent">{`_bgcl-${color}${suffix}`}</code></td>
					<td>
						<div>{`background-color: hsl(var(--hsl-${color}))`}</div>
						<div class="_mgt-3 _cl-opacity-60 _cl-content">
							= <span class="computed" />
						</div>
					</td>
					<td>
						<div class="u-flex-middle">
							<div class={`_bdrd-4 _w-9 _h-9 _bgcl-${color}`} />
						</div>
					</td>
				</tr>
			{/each}
			<tr>
				<td><code class="_cl-accent">{`_bgcl-tpr${suffix}`}</code></td>
				<td>
					<div>background-color: transparent</div>
				</td>
				<td />
			</tr>
			<tr>
				<td><code class="_cl-accent">{`_bgcl-crcl${suffix}`}</code></td>
				<td>
					<div>background-color: currentColor</div>
				</td>
				<td />
			</tr>
			<tr>
				<td><code class="_cl-accent">{`_bgcl-ihr${suffix}`}</code></td>
				<td>
					<div>background-color: inherit</div>
				</td>
				<td />
			</tr>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector isIncludeHover on:change={v => (suffix = v.detail.value)} />

<hr class="_mgt-9" />

<h5 class="_mgt-8">Background color opacity</h5>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	Use with <code class="_cl-accent">_bgcl-*</code> class to set the opacity of that background
	color. <br />
	for example class="<code class="_cl-accent">_bgcl-primary _bgcl-opacity-50</code>"
</p>

<section
	class="nm-table-container is-scroll-padding u-scrollbar _ovfy-sc _mgt-8"
	style="max-height: 480px;"
>
	<table class="nm-table is-variant-compact is-header-sticky">
		<thead>
			<tr>
				<th>Class name</th>
				<th>Opacity</th>
			</tr>
		</thead>
		<tbody>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-0`}</code></td><td>0</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-5`}</code></td><td>5%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-10`}</code></td><td>10%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-15`}</code></td><td>15%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-20`}</code></td><td>20%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-25`}</code></td><td>25%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-30`}</code></td><td>30%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-35`}</code></td><td>35%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-40`}</code></td><td>40%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-45`}</code></td><td>45%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-50`}</code></td><td>50%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-55`}</code></td><td>55%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-60`}</code></td><td>60%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-65`}</code></td><td>65%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-70`}</code></td><td>70%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-75`}</code></td><td>75%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-80`}</code></td><td>80%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-85`}</code></td><td>85%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-90`}</code></td><td>90%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-95`}</code></td><td>95%</td></tr>
			<tr><td><code class="_cl-accent">{`_bgcl-opacity-100`}</code></td><td>100%</td></tr>
		</tbody>
	</table>
</section>
