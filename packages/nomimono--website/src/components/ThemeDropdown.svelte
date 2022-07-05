<script>
	function changeTheme(themeName) {
		document.querySelector('html').dataset['theme'] = themeName
		localStorage.setItem('nomi-theme', themeName)
	}
</script>

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

	<ul class="nomi-menu _bsd-100 _bdw-1 _bdcl-content _bdcl-opacity-15" tabindex="0">
		<li><div on:click={() => changeTheme('light')}>Light</div></li>
		<li><div on:click={() => changeTheme('dark')}>Dark</div></li>
	</ul>
</div>
