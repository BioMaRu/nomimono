<script lang="ts">
	import { page } from '$app/stores'

	$: pathname = $page.url.pathname

	const DOCS = [
		{ label: 'Introduction', path: 'introduction' },
		{ label: 'Installation', path: 'installation' },
		{ label: 'Class name', path: 'class-name' },
		{ label: 'CSS variable', path: 'variable' },
		{ label: 'Customization', path: 'customization' },
	]

	const COMPONENTS = [
		{ label: 'Badge', path: 'badge' },
		{ label: 'Button', path: 'button' },
		{ label: 'Card', path: 'card' },
		{ label: 'Checkbox', path: 'checkbox' },
		{ label: 'Dropdown', path: 'dropdown' },
		{ label: 'Input', path: 'input' },
		{ label: 'Link', path: 'link' },
		{ label: 'Menu', path: 'menu' },
		{ label: 'Message', path: 'message' },
		{ label: 'Modal', path: 'modal' },
		{ label: 'Panel', path: 'panel' },
		{ label: 'Radio', path: 'radio' },
		{ label: 'Select', path: 'select' },
		{ label: 'Switch', path: 'switch' },
		{ label: 'Table', path: 'table' },
		{ label: 'Tabs', path: 'tabs' },
		{ label: 'Textarea', path: 'textarea' },
	]

	const ATOMICS = [
		'align-content',
		'align-items',
		'align-self',
		'backface-visibility',
		'background-attachment',
		'background-blend-mode',
		'background-color',
		'background-position',
		'background-repeat',
		'background-size',
		'border-color',
		'border-radius',
		// 'display',
	]
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
	<li class="group-label">Component</li>
	{#each COMPONENTS as it}
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

<style lang="scss">
	.nm-menu {
		--menu-background: transparent;
		--menu-background\:hover: var(--color-neutral-200);
		--menu-border-radius: 0;
		--menu-item-min-height: 2.25rem;
		--menu-item-font-size: 0.8125rem;
	}
</style>
