<script>
	import { createEventDispatcher } from 'svelte';

	export let isIncludeHover = false

	const dispatch = createEventDispatcher();

	function handleChange(v) {
		dispatch('change', {
			value: v
		});
	}
</script>

<div class="lo-12 _g-4">
	<div class="nm-radio">
		<input checked id="b" name="suffix" on:change={() => handleChange('')} type="radio">
		<label for="b">Default</label>
	</div>
	<div class="nm-radio">
		<input id="sm" name="suffix" on:change={() => handleChange(':sm')} type="radio">
		<label for="sm">min-width: 768px</label>
	</div>
	<div class="nm-radio">
		<input id="md" name="suffix" on:change={() => handleChange(':md')} type="radio">
		<label for="md">min-width: 1024px</label>
	</div>
	<div class="nm-radio">
		<input id="lg" name="suffix" on:change={() => handleChange(':lg')} type="radio">
		<label for="lg">min-width: 1280px</label>
	</div>
	{#if isIncludeHover}
		<div class="nm-radio">
			<input id="hover" name="suffix" on:change={() => handleChange(':hover')} type="radio">
			<label for="hover">hover</label>
		</div>
	{/if}
</div>
