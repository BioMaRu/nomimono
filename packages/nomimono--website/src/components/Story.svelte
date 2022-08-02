<script lang="ts">
	import { onMount } from "svelte"

	let showCode = false
	let Prism

	onMount(async () => {
		Prism = (await import("$components/Prism.svelte")).default
	})
</script>

<div class="nm-card _pdbt-10 _pst-rlt _bgcl-base-100 _bdw-1" class:active={showCode}>
	<div>
		<slot></slot>
	</div>
	<div class="_pst-asl _r-0 _bt-0 _dp-f _jtfct-fe">
		<div class="nm-button is-variant-secondary is-size-small _bdbtlrd-0 _bdtrrd-0" on:click={() => showCode = !showCode} tabindex="0">
			{#if !showCode}<span>Show code</span>{/if}
			{#if showCode}<span>Hide code</span>{/if}
		</div>
	</div>
</div>

{#if onMount && showCode}
	<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _bdtlrd-0 _bdtrrd-0 _bdw-0">
		<svelte:component this={Prism} language="html">
			<slot name="code"></slot>
		</svelte:component>
	</div>
{/if}

<style>
	.active {
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
</style>
