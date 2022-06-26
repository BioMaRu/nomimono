<script lang="ts">
	import '../styles/main.scss'
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<Navbar />

<main class="layout">
	<slot />
</main>

<footer>

</footer>

<style lang="scss">
	:root {
		--navbar-height: 70px;
	}

	.layout {
		padding-top: var(--navbar-height);
	}
</style>
