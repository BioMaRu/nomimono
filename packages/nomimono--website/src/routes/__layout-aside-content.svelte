<script lang="ts">
	import '../styles/main.scss'
	import "prismjs/plugins/line-numbers/prism-line-numbers.css";
	import "prismjs/plugins/command-line/prism-command-line.css";
	import "prismjs/plugins/line-highlight/prism-line-highlight.css";
	import '../styles/prism-theme.scss'

	import SideMenu from '$components/SideMenu.svelte';
	import ThemeDropdown from "$components/ThemeDropdown.svelte";

</script>

<svelte:head>
	<title>Document – NomiMono</title>
	<meta content="NomiMono UI framework" name="description">
</svelte:head>

<div class="lo-page-aside-content">
	<aside>
		<div class="aside-top" style="height: var(--nav-height);">
			<a href="/">
				<img alt="nomimono" height="40" src="/logo-symbol.svg">
			</a>
		</div>

		<div class="menu">
			<SideMenu />
		</div>
	</aside>

	<main>
		<div class="main-top" style="height: var(--nav-height);">
			<ThemeDropdown />
		</div>

		<div class="content">
			<div style="max-width: 800px;">
				<slot />
			</div>
		</div>
	</main>
</div>

<style lang="scss">
	.lo-page-aside-content {
		--nav-height: 70px;

		:where(.menu, .content) {
			margin-top: var(--nav-height);
		}

		:where(.aside-top, .main-top) {
			position: fixed;
			z-index: 2;
			top: 0;
			display: flex;
			align-items: center;
			height: var(--nav-height);
			padding: 0 24px;
			border-bottom: 1px solid var(--color-neutral-200);
			//backdrop-filter: blur(2px);
		}

		.aside-top {
			width: calc(var(--lo-page-aside-content--aside-width) - 1px);
		}

		.main-top {
			right: 0;
			left: var(--lo-page-aside-content--aside-width);
			display: flex;
			justify-content: end;
		}

		.content {
			padding: 32px 32px 128px 32px;
		}
	}

	aside {
		border-right: 1px solid hsl(var(--hsl-base-200));
		background-color: hsl(var(--hsl-base-200));
	}
</style>
