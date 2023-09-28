<script lang="ts">
	import '$style/main.scss'

	import Navbar from '$components/Navbar.svelte'
</script>

<Navbar />

<main class="layout">
	<div class="content-component">
		<slot />
	</div>
</main>

<style lang="scss">
	:root {
		--navbar-height: 70px;
	}

	.layout {
		padding-top: var(--navbar-height);
	}
</style>
