<script>
	function changeTheme(themeName) {
		document.querySelector('html').dataset['theme'] = themeName
	}
</script>

<nav class="navbar _bgcl-base-100 _dp-f _alit-ct _pdh-7 _pst-f _t-0 _w-100pct _zid-2">
	<a class="_cs-pt" href="/">
		<img alt="SvelteKit" height="40" src="/logo-symbol.svg" />
	</a>

	<div class="_dp-f _g-5 _mgl-9">
		<div class="nomi-dropdown is-hover-open">
			<div tabindex="0">
				<span class="nomi-button is-variant-ghost">Getting Start</span>
			</div>
			<ul class="nomi-menu _bsd-100 _bdw-1 _bdcl-content _bdcl-opacity-20">
				<li>
					<a href="/doc/introduction" sveltekit:prefetch>Introduction</a>
				</li>
				<li>
					<a href="/doc/installation" sveltekit:prefetch>Installation</a>
				</li>
			</ul>
		</div>
		<div class="nomi-dropdown is-hover-open">
			<div tabindex="0">
				<span class="nomi-button is-variant-ghost">Document</span>
			</div>
			<div>
				<ul class="nomi-menu _bsd-100 _bdw-1 _bdcl-content _bdcl-opacity-20">
					<li>
						<a href="/component/badge" sveltekit:prefetch>Components</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="nomi-dropdown is-hover-open">
			<div tabindex="0">
				<span class="nomi-button is-variant-ghost">Framework</span>
			</div>
			<ul class="nomi-menu _bsd-100 _bdw-1 _bdcl-content _bdcl-opacity-20">
				<li>
					<a href="/" sveltekit:prefetch>React component</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="_mgl-at">
		<div class="nomi-dropdown is-position-bottom-right">
			<div tabindex="0">
				<div class="nomi-button is-variant-secondary">
					<div class="start-icon _fs-6">
						<i class="far fa-palette"></i>
					</div>
					<span>Theme</span>
					<div class="end-icon _fs-4">
						<i class="far fa-chevron-down _cl-content-300"></i>
					</div>
				</div>
			</div>

			<ul class="nomi-menu _bsd-100 _bdw-1 _bdcl-content _bdcl-opacity-20" tabindex="0">
				<li><div on:click={() => changeTheme('light')}>Light</div></li>
				<li><div on:click={() => changeTheme('dark')}>Dark</div></li>
			</ul>
		</div>
	</div>
</nav>

<style lang="scss">
	.navbar {
		height: var(--navbar-height);
	}
</style>
