<script lang="ts">
	import '../styles/main.scss'
	import SideMenu from '$components/SideMenu.svelte';
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
			<div>
				<div class="nomi-dropdown is-position-bottom-right">
					<button class="nomi-button is-variant-tertiary is-no-focus-ring _dp-f _g-12px">
						<svg class="_f-crcl" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M160 255.1C160 273.7 145.7 287.1 128 287.1C110.3 287.1 96 273.7 96 255.1C96 238.3 110.3 223.1 128 223.1C145.7 223.1 160 238.3 160 255.1zM128 159.1C128 142.3 142.3 127.1 160 127.1C177.7 127.1 192 142.3 192 159.1C192 177.7 177.7 191.1 160 191.1C142.3 191.1 128 177.7 128 159.1zM288 127.1C288 145.7 273.7 159.1 256 159.1C238.3 159.1 224 145.7 224 127.1C224 110.3 238.3 95.1 256 95.1C273.7 95.1 288 110.3 288 127.1zM320 159.1C320 142.3 334.3 127.1 352 127.1C369.7 127.1 384 142.3 384 159.1C384 177.7 369.7 191.1 352 191.1C334.3 191.1 320 177.7 320 159.1zM441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 320 441.9 320V319.1zM463.1 258.2C463.1 257.4 464 256.7 464 255.1C464 141.1 370.9 47.1 256 47.1C141.1 47.1 48 141.1 48 255.1C48 370.9 141.1 464 256 464C258.9 464 261.8 463.9 264.6 463.8C265.4 463.8 265.9 463.6 266.2 463.5C266.6 463.2 267.3 462.8 268.2 461.7C270.1 459.4 272 455.2 272 449.8C272 448.1 271.4 444.3 266.4 432.7C265.8 431.5 265.2 430.1 264.5 428.5C260.2 418.9 253.4 403.5 250.1 387.8C248.7 381.4 248 374.8 248 368C248 314.1 290.1 271.1 344 271.1H441.9C449.6 271.1 455.1 269.3 459.7 266.2C463 263.4 463.1 260.9 463.1 258.2V258.2z"/></svg>
						<svg class="_f-crcl" height="16" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432.6 209.3l-191.1 183.1C235.1 397.8 229.1 400 224 400s-11.97-2.219-16.59-6.688L15.41 209.3C5.814 200.2 5.502 184.1 14.69 175.4c9.125-9.625 24.38-9.938 33.91-.7187L224 342.8l175.4-168c9.5-9.219 24.78-8.906 33.91 .7187C442.5 184.1 442.2 200.2 432.6 209.3z"/></svg>
					</button>
					<div tabindex="0">
						<ul class="nomi-menu _bsd-100">
							<li>
								<div>
									Nom-Yen
								</div>
							</li>
							<li>
								<div>
									Dark Nom-Yen
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
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
			top: 0;
			display: flex;
			align-items: center;
			height: var(--nav-height);
			padding: 0 16px;
			border-bottom: 1px solid var(--color-neutral-200);
			backdrop-filter: blur(5px);
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
			padding: 32px 0 32px 24px;
		}
	}
</style>
