<script>
	import { page } from '$app/stores'

	$: pathname = $page.url.pathname
</script>

<ul class="nomi-menu is-variant-inset is-active-variant-simple is-compact _w-100pct">
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

<div class="_pdh-7 _mgbt-4">
	<hr>
</div>

<ul class="nomi-menu is-variant-inset is-active-variant-simple is-compact _w-100pct">
	<li class="group-label">
		Component
	</li>
	<li class:is-active="{pathname === '/component/badge'}">
		<a href="/component/badge">Badge</a>
	</li>
</ul>

<div class="_pdh-7 _mgbt-4">
	<hr>
</div>

<ul class="nomi-menu is-variant-inset is-active-variant-simple is-compact _w-100pct">
	<li class="group-label">
		Atomic
	</li>
	<li class:is-active="{pathname === '/atomic/display'}">
		<a href="/atomic/display">Display</a>
	</li>
</ul>

<style lang="scss">
	.nomi-menu {
		--menu-background: transparent;
		--menu-background-hover: var(--color-neutral-200);
		--menu-border-radius: 0;
	}
</style>
