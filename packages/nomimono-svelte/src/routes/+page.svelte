<script lang="ts">
	import '../style.scss'

	import { Button } from '$lib/index'

	let theme = 'light'

	function toggle() {
		console.log('Toggle', theme)
		if (theme === 'light') {
			theme = 'dark'
		} else {
			theme = 'light'
		}

		document.body.dataset.theme = theme
	}
</script>

<Button on:click={toggle}>Light/Dark</Button>

<svelte:head>
	<title>Library Project</title>
</svelte:head>

<div class="_pd-8 _mnh-100vh">
	<div class="_bgcl-content _bgcl-opacity-10 _pd-8">
		<Button>Button</Button>
	</div>
</div>
