<nav class="navbar _dp-f _alit-ct _pdh-16px _pst-asl _t-0px _w-100pct">
	<a class="_cs-pt" href="/">
		<img alt="SvelteKit" height="40" src="/logo-symbol.svg" />
	</a>

	<div class="_dp-f _gg-8px _mgl-48px">
		<div class="nomi-dropdown is-hover-open">
			<div tabindex="0">
				<span class="nomi-button is-variant-ghost">Getting Start</span>
			</div>
			<div tabindex="0">
				<ul class="nomi-menu _bsd-100 _bdw-1px _bdcl-neutral-300">
					<li>
						<a href="/doc/introduction" sveltekit:prefetch>Introduction</a>
					</li>
					<li><a href="/doc/installation" sveltekit:prefetch>Installation</a></li>
<!--					<li><a href="/doc/theme">Theme</a></li>-->
				</ul>
			</div>
		</div>
		<div class="nomi-dropdown is-hover-open">
			<div tabindex="0">
				<span class="nomi-button is-variant-ghost">Document</span>
			</div>
			<div tabindex="0">
				<ul class="nomi-menu _bsd-100 _bdw-1px _bdcl-neutral-300">
					<li><a href="/component/badge" sveltekit:prefetch>Components</a></li>
<!--					<li><a href="#">Utility class</a></li>-->
<!--					<li><a href="#">Configuration</a></li>-->
				</ul>
			</div>
		</div>

		<div class="nomi-dropdown is-hover-open">
			<div tabindex="0">
				<span class="nomi-button is-variant-ghost">Framework</span>
			</div>
			<div tabindex="0">
				<ul class="nomi-menu _bsd-100 _bdw-1px _bdcl-neutral-300">
					<li><a href="#" sveltekit:prefetch>React component</a></li>
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
