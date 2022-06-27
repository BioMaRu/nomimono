<script lang="ts">
	import '../styles/main.scss'
	import Navbar from '$components/Navbar.svelte';
</script>

<Navbar />

<main class="layout">
	<slot />
</main>

<style lang="scss">
	:root {
		--navbar-height: 70px;
	}

	.layout {
		padding-top: var(--navbar-height);
	}
</style>
