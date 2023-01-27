<script lang="ts">
	import ThemeDropdown from './ThemeDropdown.svelte'
</script>

<nav class="navbar _bgcl-base-100 _dp-f _alit-ct _pdh-7 _pst-f _t-0 _w-100pct _zid-2">
	<a class="_cs-pt" href="/">
		<img alt="SvelteKit" height="40" src="/logo-symbol.svg" />
	</a>

	<div class="_dp-f _g-5 _mgl-9">
		<div class="nm-dropdown is-hover-open">
			<div tabindex="0">
				<span class="nm-button is-variant-ghost">Getting Start</span>
			</div>
			<ul class="nm-menu _bsd-100 _bdw-1 _bdcl-content _bdcl-opacity-15 _bdrd-4">
				<li>
					<a href="/doc/introduction">Introduction</a>
				</li>
				<li>
					<a href="/doc/installation">Installation</a>
				</li>
			</ul>
		</div>

		<a href="/doc/introduction">
			<span class="nm-button is-variant-ghost">Document</span>
		</a>
		<!-- <div class="nm-dropdown is-hover-open">
			<div tabindex="0">
				<span class="nm-button is-variant-ghost">Document</span>
			</div>
			<ul class="nm-menu _bsd-100 _bdw-1 _bdcl-content _bdcl-opacity-15">
				<li>
					<a href="/component/badge">Components</a>
				</li>
			</ul>
		</div> -->

		<!-- <div class="nm-dropdown is-hover-open">
			<div tabindex="0">
				<span class="nm-button is-variant-ghost">Framework</span>
			</div>
			<ul class="nm-menu _bsd-100 _bdw-1 _bdcl-content _bdcl-opacity-15">
				<li>
					<a href="/">React component</a>
				</li>
			</ul>
		</div> -->
	</div>

	<div class="_mgl-at">
		<ThemeDropdown />
	</div>
</nav>

<style lang="scss">
	.navbar {
		height: var(--navbar-height);
	}
</style>
