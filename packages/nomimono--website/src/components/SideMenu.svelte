<script lang="ts">
	import { page } from '$app/stores'

	$: pathname = $page.url.pathname

	const DOCS = [
		{ label: 'Introduction', path: 'introduction' },
		{ label: 'Installation', path: 'installation' },
		{ label: 'Class name', path: 'class-name' },
		{ label: 'CSS variable', path: 'variable' },
		{ label: 'Customization', path: 'customization' },
	] as const

	const INTERACTION = [
		{ label: 'Button', path: 'button' },
		{ label: 'Dropdown', path: 'dropdown' },
	] as const

	const FORM = [
		{ label: 'Input', path: 'input' },
		{ label: 'Checkbox', path: 'checkbox' },
		{ label: 'Radio', path: 'radio' },
		{ label: 'Select', path: 'select' },
		{ label: 'Switch', path: 'switch' },
		{ label: 'Textarea', path: 'textarea' },
	] as const

	const NAVIGATION = [
		{ label: 'Breadcrumb', path: 'breadcrumb' },
		{ label: 'Link', path: 'link' },
		{ label: 'Tabs', path: 'tabs' },
		{ label: 'Menu', path: 'menu' },
	] as const

	const DISPLAY_DATA = [
		{ label: 'Badge', path: 'badge' },
		{ label: 'Card', path: 'card' },
		{ label: 'Message', path: 'message' },
		{ label: 'Panel', path: 'panel' },
		{ label: 'Table', path: 'table' },
		{ label: 'Modal', path: 'modal' },
	] as const

	const ATOMICS = [
		'align-content',
		'align-items',
		'align-self',
		'aspect-ratio',
		'backface-visibility',
		'background-attachment',
		'background-blend-mode',
		'background-color',
		'background-position',
		'background-repeat',
		'background-size',
		'border-color',
		'border-radius',
		'border-width',
		// 'display',
	] as const
</script>

<ul class="nm-menu is-variant-inset is-active-variant-simple is-compact _w-100pct">
	{#each DOCS as doc}
		<li class:is-active={pathname === `/doc/${doc.path}`}>
			<a href={`/doc/${doc.path}`}>{doc.label}</a>
		</li>
	{/each}
</ul>

<div class="_pdh-7 _mgbt-4">
	<hr />
</div>

<ul class="nm-menu is-variant-inset is-active-variant-simple is-compact _w-100pct">
	<li class="group-label">Interaction</li>
	{#each INTERACTION as it}
		<li class:is-active={pathname === `/component/${it.path}`}>
			<a href={`/component/${it.path}`}>{`${it.label}`}</a>
		</li>
	{/each}
</ul>

<ul class="nm-menu is-variant-inset is-active-variant-simple is-compact _w-100pct">
	<li class="group-label">Form</li>
	{#each FORM as it}
		<li class:is-active={pathname === `/component/${it.path}`}>
			<a href={`/component/${it.path}`}>{`${it.label}`}</a>
		</li>
	{/each}
</ul>

<ul class="nm-menu is-variant-inset is-active-variant-simple is-compact _w-100pct">
	<li class="group-label">Navigation</li>
	{#each NAVIGATION as it}
		<li class:is-active={pathname === `/component/${it.path}`}>
			<a href={`/component/${it.path}`}>{`${it.label}`}</a>
		</li>
	{/each}
</ul>

<ul class="nm-menu is-variant-inset is-active-variant-simple is-compact _w-100pct">
	<li class="group-label">Display Data</li>
	{#each DISPLAY_DATA as it}
		<li class:is-active={pathname === `/component/${it.path}`}>
			<a href={`/component/${it.path}`}>{`${it.label}`}</a>
		</li>
	{/each}
</ul>

<div class="_pdh-7 _mgbt-4">
	<hr />
</div>

<ul class="nm-menu is-variant-inset is-active-variant-simple is-compact _w-100pct">
	<li class="group-label">Atomic</li>
	{#each ATOMICS as it}
		<li class:is-active={pathname === `/atomic/${it}`}>
			<a href={`/atomic/${it}`}>{`${it}`}</a>
		</li>
	{/each}
</ul>

<br />
<br />
<br />
<br />
<br />
<br />

<style lang="scss">
	.nm-menu {
		--menu-background: transparent;
		--menu-background\:hover: var(--color-neutral-200);
		--menu-border-radius: 0;
		--menu-item-min-height: 2.25rem;
		--menu-item-font-size: 0.8125rem;
	}
</style>
