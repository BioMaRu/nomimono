<script lang="ts">
	import { Button } from '$lib/index'

	function toggle() {
		const theme = document.body.dataset.theme
		if (theme === 'light') {
			document.body.dataset.theme = 'dark'
		} else {
			document.body.dataset.theme = 'light'
		}
	}
</script>

<Button on:click={toggle}>Light/Dark</Button>

<svelte:head>
	<title>Nomimono Svelte</title>
</svelte:head>

<div class="_pd-8 _mnh-100vh">
	<div class="_dp-f _g-5 _pd-8">
		<Button>Button</Button>
		<Button variant="secondary">Button</Button>
		<Button variant="tertiary">Button</Button>
		<Button variant="outline">Button</Button>
		<Button variant="ghost">Button</Button>
		<Button variant="accent">Button</Button>
		<Button variant="positive">Button</Button>
		<Button variant="negative">Button</Button>
		<Button variant="white">Button</Button>
	</div>

	<div class="_dp-f _g-5 _pd-8">
		<Button ripple>Ripple</Button>
	</div>

	<div class="_dp-f _g-5 _pd-8">
		<Button disabled>Button</Button>
		<Button disabled variant="secondary">Button</Button>
		<Button disabled variant="tertiary">Button</Button>
		<Button disabled variant="outline">Button</Button>
		<Button disabled variant="ghost">Button</Button>
		<Button disabled variant="accent">Button</Button>
		<Button disabled variant="positive">Button</Button>
		<Button disabled variant="negative">Button</Button>
		<Button disabled variant="white">Button</Button>
	</div>

	<div class="_dp-f _g-5 _pd-8">
		<Button state="loading">Button</Button>
		<Button state="loading" variant="secondary">Button</Button>
		<Button state="loading" variant="tertiary">Button</Button>
		<Button state="loading" variant="outline">Button</Button>
		<Button state="loading" variant="ghost">Button</Button>
		<Button state="loading" variant="accent">Button</Button>
		<Button state="loading" variant="positive">Button</Button>
		<Button state="loading" variant="negative">Button</Button>
		<Button state="loading" variant="white">Button</Button>
	</div>

	<div class="_dp-f _g-5 _pd-8 _alit-ct _fw-w">
		<Button state="loading" size="small">Button</Button>
		<Button>Button</Button>
		<Button size="large">Button</Button>

		<Button state="loading" variant="secondary" size="small">Button</Button>
		<Button variant="secondary">Button</Button>
		<Button variant="secondary" size="large">Button</Button>
	</div>
	<div class="_dp-f _g-5 _pd-8 _alit-ct _fw-w">
		<Button fluid ripple>Button</Button>
	</div>

	<div class="_dp-f _g-5 _pd-8 _alit-ct _fw-w">
		<Button compact size="small">Button</Button>
		<Button compact>Button</Button>
		<Button compact size="large">Button</Button>
	</div>

	<div class="_dp-f _g-5 _pd-8 _alit-ct _fw-w">
		<Button pill>Button</Button>
		<Button pill compact>Button</Button>
	</div>

	<div class="_dp-f _g-5 _pd-8 _alit-ct _fw-w">
		<Button pill>Button</Button>
		<Button square compact>
			<i class="fas fa-trash" />
		</Button>
		<Button square compact state="loading">
			<i class="fas fa-trash" />
		</Button>
		<Button variant="tertiary" square compact state="loading">
			<i class="fas fa-trash" />
		</Button>
	</div>

	<div class="_dp-f _g-5 _pd-8 _alit-ct _fw-w">
		<Button variant="negative">
			<i class="fas fa-trash" />Button
		</Button>
		<Button variant="positive">
			Button <i class="fas fa-check" />
		</Button>
	</div>
</div>
