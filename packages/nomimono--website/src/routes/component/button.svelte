<script context="module">
	// import _prism from "svelte-prism/src/import"
	// export const prism = _prism
	// export const highlight = _prism.highlightElement
	// export const globalConfig = { transform: (x) => x }
</script>

<script>
	import dedent from 'ts-dedent'
	import { onMount } from "svelte"
	let Prism

	let showCode1 = false

	onMount(async () => {
		Prism = (await import("$components/Prism.svelte")).default
	})
</script>

<h1 class="_fs-8">Button</h1>

<div class="nm-card _pst-rlt _bgcl-base-200 _mgt-8 _bdw-0" class:active={showCode1}>
	<div>
		<button class="nm-button">Button</button>
	</div>
	<div class="_pst-asl _r-0 _bt-0 _dp-f _jtfct-fe">
		<div class="nm-button is-variant-secondary is-size-small _bdbtlrd-0 _bdtrrd-0" on:click={() => showCode1 = !showCode1} tabindex="0">
			{#if !showCode1}<span>Show code</span>{/if}
			{#if showCode1}<span>Hide code</span>{/if}
		</div>
	</div>
</div>

{#if onMount && showCode1}
	<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _bdtlrd-0 _bdtrrd-0 _bdw-0">
		<Prism language="html">
			{
				dedent`
				<button class="nm-button">Button</button>`
			}
		</Prism>
	</div>
{/if}

<style>
	.active {
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
</style>
