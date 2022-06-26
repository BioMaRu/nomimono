<script lang="ts">
	import '../styles/main.scss'
	import SideMenu from '$lib/side-menu/SideMenu.svelte';
</script>

<div class="lo-page-aside-content">
	<aside>
		<div class="aside-top" style="height: var(--nav-height);">
			<img alt="nomimono" height="40" src="/logo-symbol.svg">
		</div>
		<div class="menu">
			<SideMenu />
		</div>
	</aside>

	<main class="layout">
		<slot />
	</main>
</div>

<style lang="scss">
	.lo-page-aside-content {
		--nav-height: 70px;

		.menu {
			margin-top: var(--nav-height);
		}

		.aside-top {
			position: fixed;
			display: flex;
			align-items: center;
			width: calc(300px - 1px);
			height: var(--nav-height);
			padding: 0 16px;
			border-bottom: 1px solid var(--color-neutral-200);
			backdrop-filter: blur(5px);
		}
	}
</style>
