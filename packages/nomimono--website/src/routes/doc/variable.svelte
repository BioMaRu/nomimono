<script lang="ts">
	import dedent from 'ts-dedent'
	import { onMount } from 'svelte'

	let Prism

	onMount(async () => {
		Prism = (await import('$components/Prism.svelte')).default
	})

	const COLORS = [
		{ value: 'primary', description: 'For primary color text and background' },
		{ value: 'primary-active', description: '' },
		{ value: 'primary-content', description: '' },
		{ value: 'secondary', description: '' },
		{ value: 'secondary-active', description: '' },
		{ value: 'secondary-content', description: '' },
		{ value: 'base-100', description: '' },
		{ value: 'base-200', description: '' },
		{ value: 'base-300', description: '' },
		{ value: 'base-400', description: '' },
		{ value: 'line', description: '' },
		{ value: 'content', description: '' },
		{ value: 'content-inv', description: '' },
		{ value: 'positive', description: '' },
		{ value: 'positive-content', description: '' },
		{ value: 'negative', description: '' },
		{ value: 'negative-content', description: '' },
		{ value: 'warning', description: '' },
		{ value: 'warning-content', description: '' },
		{ value: 'info', description: '' },
		{ value: 'info-content', description: '' },
		{ value: 'black', description: '' },
		{ value: 'white', description: '' },
	]

	const TYPOGRAPHYS = [
		{
			value: '--ffml-primary',
			default:
				"-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
			description: 'Default font-family',
		},
		{
			value: '--ffml-secondary',
			default:
				"-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
			description: 'Can be use in element that need different font, eg. label, header',
		},
		{ value: '--fs-1', default: '0.75rem', note: '(12px)' },
		{ value: '--fs-2', default: '0.875rem', note: '(14px)' },
		{ value: '--fs-3', default: '0.9375rem', note: '(15px)' },
		{ value: '--fs-4', default: '1rem', note: '(16px)' },
		{ value: '--fs-5', default: '1.125rem', note: '(18px)' },
		{ value: '--fs-6', default: '1.25rem', note: '(20px)' },
		{ value: '--fs-7', default: '1.5rem', note: '(24px)' },
		{ value: '--fs-8', default: '1.75rem', note: '(28px)' },
		{ value: '--fs-9', default: '2rem', note: '(32px)' },
		{ value: '--fs-10', default: '2.25rem', note: '(36px)' },
		{ value: '--fs-11', default: '2.5rem', note: '(40px)' },
		{ value: '--fs-12', default: '3rem', note: '(48px)' },
		{ value: '--fs-13', default: '3.5rem', note: '(56px)' },
		{ value: '--fs-14', default: '4.5rem', note: '(72px)' },
	]

	const SPACING = [
		{ value: '--spc-0', default: '0rem', note: '(0px)' },
		{ value: '--spc-1', default: '0.0625rem', note: '(1px)' },
		{ value: '--spc-2', default: '0.125rem', note: '(2px)' },
		{ value: '--spc-3', default: '0.25rem', note: '(4px)' },
		{ value: '--spc-4', default: '0.5rem', note: '(8px)' },
		{ value: '--spc-5', default: '0.75rem', note: '(12px)' },
		{ value: '--spc-6', default: '1rem', note: '(16px)' },
		{ value: '--spc-7', default: '1.5rem', note: '(24px)' },
		{ value: '--spc-8', default: '2rem', note: '(32px)' },
		{ value: '--spc-9', default: '2.5rem', note: '(40px)' },
		{ value: '--spc-10', default: '3rem', note: '(48px)' },
		{ value: '--spc-11', default: '4rem', note: '(64px)' },
		{ value: '--spc-12', default: '6rem', note: '(96px)' },
		{ value: '--spc-13', default: '8rem', note: '(128px)' },
	]
</script>

<h1 class="_fs-8">Theme variable</h1>
<br />
<p class="_cl-content _cl-opacity-70 _fs-3">
	Theme variable is essential when you need to customize or create your theme or design systems.
</p>
<br />
<p class="_cl-content _cl-opacity-70 _fs-3">
	Nomimono uses most CSS custom properties. You don't need any build setup. You can change the CSS
	custom properties in the CSS file or the runtime.
	<br />
	<br />
	<a class="nm-link _tdcrt-udl" href="/doc/customization">Learn more about customization</a>.
</p>

<div>
	<hr class="_mgt-9 _mgbt-8" />
	<h5 id="color">Color</h5>
	<br />
	<p class="_cl-content _cl-opacity-70 _fs-3">
		For regular use cases, color is the only CSS custom property you need to change/override to
		create your theme.
		<a class="nm-link _tdcrt-udl" href="/doc/customization#color"
			>Learn more about color customization</a
		>.
	</p>
	<section
		class="nm-table-container is-scroll-padding u-scrollbar _ovfy-sc _mgt-8"
		style="max-height: 480px;"
	>
		<table class="nm-table is-variant-compact is-header-sticky">
			<thead>
				<tr>
					<th>Custom property</th>
					<th>Default value</th>
					<th class="is-collapse" />
				</tr>
			</thead>
			<tbody>
				{#each COLORS as color}
					<tr>
						<td><code class="_cl-accent">{`--hsl-${color.value}`}</code></td>
						<td>
							<div>{`background-color: hsl(var(--hsl-${color.value}))`}</div>
							<div class="_mgt-3 _cl-opacity-60 _cl-content">
								{color.description}
							</div>
						</td>
						<td>
							<div class="u-flex-middle">
								<div class={`_bdrd-4 _w-9 _h-9 _bgcl-${color.value}`} />
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
</div>

<div>
	<hr class="_mgt-9 _mgbt-8" />
	<h5 id="typography">Typography</h5>
	<br />
	<p class="_cl-content _cl-opacity-70 _fs-3">
		These are the CSS custom properties related to design systems' typography (font family, font
		size). Usually, you may want to change the font family for your website.
	</p>
	<section
		class="nm-table-container is-scroll-padding u-scrollbar _ovfy-sc _mgt-8"
		style="max-height: 480px;"
	>
		<table class="nm-table is-variant-compact is-header-sticky">
			<thead>
				<tr>
					<th>Custom property</th>
					<th>Default value</th>
				</tr>
			</thead>
			<tbody>
				{#each TYPOGRAPHYS as it}
					<tr>
						<td><code class="_cl-accent">{`${it.value}`}</code></td>
						<td>
							<div class="_wsp-nm _wb-bw">
								{it.default}
								{#if it.note}
									<span class="_cl-opacity-60 _cl-content">{it.note}</span>
								{/if}
							</div>
							{#if it.description}
								<div class="_mgt-3 _cl-opacity-60 _cl-content _wb-bw">
									{it.description}
								</div>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
</div>

<div>
	<hr class="_mgt-9 _mgbt-8" />
	<h5 id="spacing">Spacing</h5>
	<br />
	<p class="_cl-content _cl-opacity-70 _fs-3">
		These are the CSS custom properties related to design systems' spacing, specifically used
		for margin, padding, top, left, bottom, right, width and height.
	</p>
	<section
		class="nm-table-container is-scroll-padding u-scrollbar _ovfy-sc _mgt-8"
		style="max-height: 480px;"
	>
		<table class="nm-table is-variant-compact is-header-sticky">
			<thead>
				<tr>
					<th>Custom property</th>
					<th>Default value</th>
				</tr>
			</thead>
			<tbody>
				{#each SPACING as it}
					<tr>
						<td><code class="_cl-accent">{`${it.value}`}</code></td>
						<td>
							<div class="_wsp-nm _wb-bw">
								{it.default}
								{#if it.note}
									<span class="_cl-opacity-60 _cl-content">{it.note}</span>
								{/if}
							</div>
							{#if it.description}
								<div class="_mgt-3 _cl-opacity-60 _cl-content _wb-bw">
									{it.description}
								</div>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
</div>

<div>
	<hr class="_mgt-9 _mgbt-8" />
	<h5 id="other">Other Custom properties</h5>
	<br />
	<p class="_cl-content _cl-opacity-70 _fs-3">
		[WIP] but it not that important for the systems, you can ignore it.
	</p>
</div>

<!--{#if typeof window !== "undefined"}-->
<!--	<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _fs-2 _mgt-6">-->
<!--		<svelte:component this={Prism} language="css" isStandalone>-->
<!--			{-->
<!--				dedent`-->
<!--				[data-theme="THEME_NAME"] {-->
<!--					&#45;&#45;hsl-primary: 222 33% 33%;-->
<!--					&#45;&#45;hsl-primary: 222 33% 33%;-->
<!--					&#45;&#45;hsl-primary: 222 33% 33%;-->
<!--					&#45;&#45;hsl-primary: 222 33% 33%;-->
<!--				}`-->
<!--			}-->
<!--		</svelte:component>-->
<!--	</div>-->
<!--{/if}-->
