<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import HomePackages from "$components/page-index/HomePackages.svelte";
	import HomeFeatures from "$components/page-index/HomeFeatures.svelte";
	import HomeHero from "$components/page-index/HomeHero.svelte";
</script>

<svelte:head>
	<title>Nomimono UI Framework</title>
	<meta content="Simple yet highly customizable UI Framework" name="description" />
</svelte:head>

<HomeHero />
<HomeFeatures />

<div class="lo-container">
	<div class="u-flex-middle">
		<a class="nm-button is-size-large" href="/doc/introduction">Document</a>
	</div>
</div>

<div class="_pdv-12">

</div>

<style lang="scss">

</style>
