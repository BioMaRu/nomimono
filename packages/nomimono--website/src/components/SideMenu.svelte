<script>
	import { page } from '$app/stores'

	$: pathname = $page.url.pathname
</script>


<ul class="nomi-menu is-variant-inset is-compact _w-100pct _fw-500">
	<li class:is-active="{pathname === '/doc/introduction'}">
		<a href="/doc/introduction">Introduction</a>
	</li>
	<li class:is-active="{pathname === '/doc/installation'}">
		<a href="/doc/installation">Installation</a>
	</li>
	<li class:is-active="{pathname === '/doc/usage'}">
		<a href="/doc/usage">Usage</a>
	</li>
</ul>

<hr>

<ul class="nomi-menu is-variant-inset is-compact _w-100pct _fw-500">
	<li class="group-label">
		Badge
	</li>
	<li class:is-active="{pathname === '/component/badge'}">
		<a href="/component/badge">Badge</a>
	</li>
</ul>

<hr>

<ul class="nomi-menu is-variant-inset is-compact _w-100pct _fw-500">
	<li class="group-label">
		Atomic
	</li>
	<li class:is-active="{pathname === '/atomic/display'}">
		<a href="/atomic/display">display</a>
	</li>
</ul>

<style lang="scss">
	.nomi-menu {
		--menu-background: var(--color-neutral-100);
		--menu-background-hover: var(--color-neutral-200);
		--menu-border-radius: 0;
	}
</style>
