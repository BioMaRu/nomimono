<script lang="ts">
	import dedent from 'ts-dedent'
	import { onMount } from 'svelte'
	import FootNavigate from '$components/FootNavigate.svelte'

	let Prism

	onMount(async () => {
		Prism = (await import('$components/Prism.svelte')).default
	})
</script>

<h1 class="_fs-9">Customization</h1>

<section>WIP</section>

<FootNavigate
	Introduction
	nextPath="/doc/customization"
	nextTitle="Customization"
	prevPath="/doc/variable"
	prevTitle="Variable"
/>
