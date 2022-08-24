<script>
	export let prevTitle
	export let prevPath
	export let nextTitle
	export let nextPath
</script>

<hr class="_mgt-8" />

<div class="_dp-f _jtfct-spbtw _mgt-8">
	{#if prevPath}
		<a class="nm-button is-variant-secondary _mgr-at" href={prevPath}>
			<i class="fa-solid fa-arrow-left _mgr-6" />
			{prevTitle}
		</a>
	{/if}
	{#if nextPath}
		<a class="nm-button is-variant-secondary _mgl-at" href={nextPath}>
			{nextTitle} <i class="fa-solid fa-arrow-right _mgl-6" />
		</a>
	{/if}
</div>
