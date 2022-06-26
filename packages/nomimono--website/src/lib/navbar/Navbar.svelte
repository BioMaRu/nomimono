<script>
	import logo from './nomimono-full.svg';
</script>

<nav class="navbar _dp-f _alit-ct _pdh-16px _pst-asl _t-0px _w-100pct">
	<a class="_cs-pt" href="/">
		<img alt="SvelteKit" height="46" src={logo} />
	</a>

	<div class="_dp-f _gg-8px _mgl-48px">
		<div class="nomi-dropdown is-hover-open">
			<label tabindex="0">
				<span class="nomi-button is-variant-ghost">Getting Start</span>
			</label>
			<div class="nomi-dropdown-content" tabindex="0">
				<ul class="nomi-menu _bsd-200 _bdw-1px _bdcl-neutral-300 _fs-300">
					<li>
						<a class="nomi-link is-variant-none" href="#">Introduction</a>
					</li>
					<li><a class="nomi-link is-variant-none" href="#">Installation</a></li>
					<li><a class="nomi-link is-variant-none" href="#">Theme</a></li>
				</ul>
			</div>
		</div>
		<div class="nomi-dropdown is-hover-open">
			<label tabindex="0">
				<span class="nomi-button is-variant-ghost">Document</span>
			</label>
			<div class="nomi-dropdown-content" tabindex="0">
				<ul class="nomi-menu _bsd-200 _bdw-1px _bdcl-neutral-300 _fs-300">
					<li><a class="nomi-link is-variant-none" href="#">Components</a></li>
					<li><a class="nomi-link is-variant-none" href="#">Utility class</a></li>
					<li><a class="nomi-link is-variant-none" href="#">Configuration</a></li>
				</ul>
			</div>
		</div>

		<div class="nomi-dropdown is-hover-open">
			<label tabindex="0">
				<span class="nomi-button is-variant-ghost">Framework</span>
			</label>
			<div class="nomi-dropdown-content" tabindex="0">
				<ul class="nomi-menu _bsd-200 _bdw-1px _bdcl-neutral-300 _fs-300">
					<li><a class="nomi-link is-variant-none" href="#">React component</a></li>
				</ul>
			</div>
		</div>
	</div>
</nav>

<style lang="scss">
	.navbar {
		height: var(--navbar-height);

	}
</style>
