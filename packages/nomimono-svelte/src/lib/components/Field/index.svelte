<script lang="ts">
	import { afterUpdate } from 'svelte'
	import type { HTMLBaseAttributes } from 'svelte/elements'
	interface $$Props extends HTMLBaseAttributes {
		label?: string | undefined
		description?: string | undefined
		info?: string | undefined
		state?: 'negative' | 'positive' | undefined
		required?: boolean
	}

	interface $$Slots {
		default: any
	}

	export let label: $$Props['label'] = undefined
	export let description: $$Props['description'] = undefined
	export let info: $$Props['info'] = undefined
	export let state: $$Props['state'] = undefined
	export let required: $$Props['required'] = false

	let inputId: string
	let fieldEl: HTMLDivElement

	$: required, handleRequiredField()

	afterUpdate(() => {
		const inputEl = fieldEl?.querySelector<HTMLInputElement>('input')
		if (inputEl) {
			inputId = inputEl?.id
		}
	})

	function handleRequiredField() {
		// const labelEl = fieldEl?.querySelector('label')
		// console.log(labelEl)
		// if (!labelEl) {
		// 	return
		// }
		// if (required) {
		// 	labelEl.appendChild = '<span>RRRR<span>'
		// } else {
		// }
	}
</script>

<div bind:this={fieldEl} class="field" class:is-variant-negative={state === 'negative'}>
	{#if label}
		<label for={inputId}>{label}</label>
	{/if}

	{#if description}
		<div class="description">{description}</div>
	{/if}

	<slot><!-- optional fallback --></slot>

	{#if info}
		<div class="info">{info}</div>
	{/if}
</div>

<style lang="scss">
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		label {
			display: flex;
			gap: 0.25rem;
			align-items: baseline;
			margin-bottom: 0.125rem;
			font-weight: var(--form-element-label-font-weight);
			font-size: var(--form-element-label-font-size);
			font-family: var(--form-element-label-font-family);
		}

		.description {
			margin-bottom: 0.25rem;
			color: hsl(var(--hsl-content) / 70%);
			font-size: 0.875rem;
		}

		.info {
			margin-top: 0.125rem;
			color: hsl(var(--hsl-content) / 70%);
			font-size: 0.875rem;
		}

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

		&.is-variant-negative :global(.input input) {
			border-color: hsl(var(--hsl-negative));
			color: hsl(var(--hsl-negative));

			&:hover {
				border-color: hsl(var(--hsl-negative));
			}

			&:focus {
				border-color: hsl(var(--hsl-negative));
				box-shadow: 0 0 0 0.175em hsl(var(--hsl-negative) / 30%);
			}
		}

		&.is-variant-negative {
			.info {
				color: hsl(var(--hsl-negative));
			}
		}

		// &.is-variant-positive {
		// 	.#{$prefix}input input,
		// 	.#{$prefix}select select,
		// 	.#{$prefix}textarea textarea {
		// 		border-color: hsl(var(--hsl-positive));
		// 		color: hsl(var(--hsl-positive));

		// 		&:hover {
		// 			border-color: hsl(var(--hsl-positive));
		// 		}

		// 		&:focus {
		// 			box-shadow: 0 0 0 0.175em hsl(var(--hsl-positive) / 30%);
		// 		}
		// 	}

		// 	.info {
		// 		color: hsl(var(--hsl-positive));
		// 	}
		// }
	}
</style>
