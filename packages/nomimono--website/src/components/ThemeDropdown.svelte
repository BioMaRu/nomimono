<script lang="ts">
	function changeTheme(themeName: string) {
		const htmlEl = document.querySelector('html')

		if (htmlEl) {
			htmlEl.dataset['theme'] = themeName
			localStorage.setItem('nm-theme', themeName)
		}
	}
</script>

<div class="nm-dropdown is-position-bottom-right">
	<div tabindex="0">
		<div class="nm-button is-variant-secondary is-icon-left is-icon-right">
			<i class="far fa-palette _fs-6" />

			<span>Theme</span>

			<i class="far fa-chevron-down _fs-4" />
		</div>
	</div>

	<ul class="nm-menu _bsd-100 _bdw-1 _bdcl-content _bdcl-opacity-15 _bdrd-4" tabindex="0">
		<li><div on:click={() => changeTheme('light')}>Light</div></li>
		<li><div on:click={() => changeTheme('dark')}>Dark</div></li>
	</ul>
</div>
