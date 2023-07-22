<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	import { current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/common/helpers'

	type $$Props = HTMLInputAttributes

	const forwardEvents = forwardEventsBuilder(current_component)

	export let value: string | null = null
</script>

<div class="input">
	<input bind:value {...$$restProps} use:forwardEvents />
</div>

<style lang="scss">
	.input {
		position: relative;
		display: block;
		flex-direction: column;
		gap: 0.5em;
		min-height: var(--form-element-medium-height);
		border-radius: var(--form-element-border-radius);
		font-weight: 400;
		font-size: var(--form-element-medium-font-size);

		input {
			vertical-align: top;
			width: 100%;
			height: 100%;
			padding: 0 1em;
			border: 1px solid hsl(var(--hsl-content) / 15%);
			border-radius: inherit;
			background-color: hsl(var(--hsl-black) / 5%);
			color: hsl(var(--hsl-content));
			outline: none;
			transition: all 0.16s ease-in-out;
			appearance: none;

			&:hover {
				border-color: hsl(var(--hsl-content) / 25%);
			}

			&:focus,
			:active {
				border-color: hsl(var(--hsl-primary));
				box-shadow: 0 0 0 0.175rem hsl(var(--hsl-primary) / 30%);
			}
		}

		input[readonly] {
			background: hsl(var(--hsl-content) / 5%);
		}

		input[disabled] {
			background: hsl(var(--hsl-content) / 5%);
			cursor: not-allowed;
		}
	}

	.field {
		// display: flex;
		// flex-direction: column;
		// gap: 0.25rem;

		// label {
		// 	display: flex;
		// 	gap: 0.25rem;
		// 	align-items: baseline;
		// 	font-weight: var(--form-element-label-font-weight);
		// 	font-size: var(--form-element-label-font-size);
		// 	font-family: var(--form-element-label-font-family);
		// }

		// .info {
		// 	color: hsl(var(--hsl-content) / 70%);
		// 	font-size: toRem(12);
		// }

		// size
		// @each $s in $SIZES {

		// 	&.is-size-#{$s} {
		// 		font-size: var(--form-element-#{$s}-font-size);

		// 		.#{$prefix}input,
		// 		.#{$prefix}select {
		// 			height: var(--form-element-#{$s}-height);
		// 		}

		// 		.#{$prefix}input,
		// 		.#{$prefix}select,
		// 		.#{$prefix}textarea {
		// 			font-size: var(--form-element-#{$s}-font-size);
		// 		}
		// 	}
		// }

		// &.is-variant-negative {
		// 	.#{$prefix}input input,
		// 	.#{$prefix}select select,
		// 	.#{$prefix}textarea textarea {
		// 		color: hsl(var(--hsl-negative));
		// 		border-color: hsl(var(--hsl-negative));

		// 		&:hover {
		// 			border-color: hsl(var(--hsl-negative));
		// 		}

		// 		&:focus {
		// 			box-shadow: 0 0 0 .175em hsl(var(--hsl-negative) / 0.3);
		// 		}
		// 	}

		// 	.info {
		// 		color: hsl(var(--hsl-negative));
		// 	}
		// }

		// &.is-variant-positive {
		// 	.#{$prefix}input input,
		// 	.#{$prefix}select select,
		// 	.#{$prefix}textarea textarea {
		// 		color: hsl(var(--hsl-positive));
		// 		border-color: hsl(var(--hsl-positive));

		// 		&:hover {
		// 			border-color: hsl(var(--hsl-positive));
		// 		}

		// 		&:focus {
		// 			box-shadow: 0 0 0 .175em hsl(var(--hsl-positive) / 0.3);
		// 		}
		// 	}

		// 	.info {
		// 		color: hsl(var(--hsl-positive));
		// 	}
		// }
	}
</style>
