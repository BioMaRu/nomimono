<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'
	import { asValue } from '../../helpers'

	let suffix = ''

	const COLORS = [
		'primary',
		'primary-active',
		'primary-content',
		'accent',
		'accent-active',
		'accent-content',
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
		'crcl',
		'tpr',
		'ihr',
		'us',
	]
	const NOT_COLOR = ['crcl', 'tpr', 'ihr', 'us']
</script>

<h1 class="_fs-8">Border color</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The border-color CSS property sets the border color of an element.
</p>

<section
	class="nm-table-container is-scroll-padding u-scrollbar _ovfy-sc _mgt-8"
	id="color-table"
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
					<td><code class="_cl-accent">{`_bdcl-${color}${suffix}`}</code></td>
					<td>
						{#if !NOT_COLOR.includes(color)}
							<div>{`border-color: hsl(var(--hsl-${color}))`}</div>
						{:else}
							<div>{`border-color: ${asValue(color, 'hsl')}`}</div>
						{/if}
						<div class="_mgt-3 _cl-opacity-60 _cl-content">
							{#if !NOT_COLOR.includes(color)}
								hsl <span>{asValue(color, 'hsl')}</span>
							{/if}
						</div>
					</td>
					<td>
						<div class="u-flex-middle">
							{#if !NOT_COLOR.includes(color)}
								<div class={`_bdrd-4 _w-9 _h-9 _bgcl-${color}`} />
							{/if}
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector isIncludeHover on:change={v => (suffix = v.detail.value)} />

<hr class="_mgt-9" />

<h5 class="_mgt-8">Border color opacity</h5>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	Use with <code class="_cl-accent">_bdcl-*</code> class to set the opacity of that color. <br />
	for example class="<code class="_cl-accent">_bdcl-primary _bdcl-opacity-50</code>"
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
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-0`}</code></td><td>0</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-5`}</code></td><td>5%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-10`}</code></td><td>10%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-15`}</code></td><td>15%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-20`}</code></td><td>20%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-25`}</code></td><td>25%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-30`}</code></td><td>30%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-35`}</code></td><td>35%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-40`}</code></td><td>40%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-45`}</code></td><td>45%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-50`}</code></td><td>50%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-55`}</code></td><td>55%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-60`}</code></td><td>60%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-65`}</code></td><td>65%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-70`}</code></td><td>70%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-75`}</code></td><td>75%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-80`}</code></td><td>80%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-85`}</code></td><td>85%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-90`}</code></td><td>90%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-95`}</code></td><td>95%</td></tr>
			<tr><td><code class="_cl-accent">{`_bdcl-opacity-100`}</code></td><td>100%</td></tr>
		</tbody>
	</table>
</section>
