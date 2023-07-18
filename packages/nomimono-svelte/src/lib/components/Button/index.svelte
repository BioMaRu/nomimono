<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { cubicInOut } from 'svelte/easing'
	import type { HTMLButtonAttributes } from 'svelte/elements'
	import { tweened } from 'svelte/motion'

	interface $$Props extends HTMLButtonAttributes {
		size?: 'small' | 'medium' | 'large'
		variant?:
			| 'primary'
			| 'secondary'
			| 'tertiary'
			| 'outline'
			| 'ghost'
			| 'accent'
			| 'negative'
			| 'positive'
			| 'white'
		state?: 'loading' | undefined
		fluid?: boolean
		compact?: boolean
		pill?: boolean
		square?: boolean
		ripple?: boolean
	}

	interface $$Slots {
		default: any
	}

	export let size: $$Props['size'] = 'medium'
	export let variant: $$Props['variant'] = 'primary'
	export let state: $$Props['state'] = undefined
	export let fluid: $$Props['fluid'] = false
	export let compact: $$Props['compact'] = false
	export let pill: $$Props['pill'] = false
	export let square: $$Props['square'] = false
	export let ripple: $$Props['ripple'] = false

	let buttonEl: HTMLButtonElement
	let rippleEl: HTMLDivElement
	let rippleData = {
		x: -1,
		y: -1,
		opacity: 1,
	}

	let rippleScale = tweened(1, {
		duration: 500,
		easing: cubicInOut,
	})

	async function doRipple(event: MouseEvent) {
		if (!ripple) {
			return
		}

		rippleScale.set(1, { duration: 0 })
		rippleEl.style.transition = 'none'
		rippleEl.style.transform = 'none'

		rippleData.x = event.offsetX
		rippleData.y = event.offsetY
		rippleData.opacity = 1
		rippleEl.style.transition = 'opacity 0.17s ease-in-out'

		requestAnimationFrame(() => {
			rippleScale.set(200).then(() => {
				rippleData.opacity = 0
				rippleScale.set(1)
			})
		})
	}

	onMount(() => {
		if (ripple && buttonEl) {
			buttonEl.addEventListener('mousedown', doRipple)
		}
	})

	onDestroy(() => {
		if (ripple && buttonEl) {
			buttonEl.removeEventListener('mousedown', doRipple)
		}
	})
</script>

<button
	bind:this={buttonEl}
	{...$$restProps}
	on:click
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	class:is-variant-primary={variant === 'primary'}
	class:is-variant-secondary={variant === 'secondary'}
	class:is-variant-tertiary={variant === 'tertiary'}
	class:is-variant-outline={variant === 'outline'}
	class:is-variant-ghost={variant === 'ghost'}
	class:is-variant-accent={variant === 'accent'}
	class:is-variant-negative={variant === 'negative'}
	class:is-variant-positive={variant === 'positive'}
	class:is-variant-white={variant === 'white'}
	class:is-size-small={size === 'small'}
	class:is-size-large={size === 'large'}
	class:is-loading={state === 'loading'}
	class:is-fluid={fluid}
	class:is-compact={compact}
	class:is-pill={pill}
	class:is-square={square}
>
	<slot />

	{#if ripple}
		<div
			bind:this={rippleEl}
			class="ripple"
			style:transform={`scale(${$rippleScale})`}
			style:left={`${rippleData.x}px`}
			style:top={`${rippleData.y}px`}
			style:opacity={`${rippleData.opacity}`}
		/>
	{/if}
</button>

<style lang="scss">
	.ripple {
		position: absolute;
		width: 1px;
		border-radius: 999px;
		background-color: hsl(var(--hsl-white) / 20%);
		pointer-events: none;
		aspect-ratio: 1 / 1;
	}

	button {
		position: relative;
		display: inline-flex;
		gap: 0.75em;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		min-height: var(--button-medium-height);
		padding: 0 1.25em;
		border: none;
		border-radius: var(--button-border-radius);
		background: hsl(var(--hsl-primary));
		color: hsl(var(--hsl-primary-content));
		outline: none;
		font-weight: var(--button-font-weight);
		font-size: var(--button-medium-font-size);
		font-family: var(--button-font-family);
		cursor: pointer;
		user-select: none;
		transition: all 0.16s ease-in-out;

		&:hover {
			background: color-mix(in srgb, hsl(var(--hsl-primary)) 80%, white);
		}

		&.is-loading {
			color: transparent;
			pointer-events: none;

			&::after {
				content: '';
				position: absolute;
				right: 0;
				left: 0;
				width: 1em;
				height: 1em;
				margin: auto;
				border: 2px solid;
				border-top-color: hsl(var(--hsl-primary-content));
				border-right-color: hsl(var(--hsl-primary-content));
				border-radius: 999px;
				animation: button-loading-spin 0.48s infinite linear;
			}
		}

		&.is-size-small {
			min-height: var(--button-small-height);
			padding: 0 1em;
			font-size: var(--button-small-font-size);
		}

		&.is-size-medium {
			min-height: var(--button-medium-height);
			padding: 0 1.125em;
			font-size: var(--button-medium-font-size);
		}

		&.is-size-large {
			min-height: var(--button-large-height);
			padding: 0 1.25em;
			font-size: var(--button-large-font-size);
		}

		&.is-variant-secondary {
			border: 1px solid currentcolor;
			background: transparent;
			color: hsl(var(--hsl-primary));

			&:hover {
				background: hsl(var(--hsl-content) / 8%);
			}

			&.is-loading {
				border: 1px solid hsl(var(--hsl-primary));
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-primary));
					border-right-color: hsl(var(--hsl-primary));
				}
			}
		}

		&.is-variant-outline {
			border: 1px solid hsl(var(--hsl-content) / 15%);
			background: transparent;
			color: hsl(var(--hsl-content));

			&:hover {
				background: hsl(var(--hsl-content) / 5%);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-content) / 100%);
					border-right-color: hsl(var(--hsl-content) / 100%);
				}
			}
		}

		&.is-variant-tertiary {
			border: unset;
			background: hsl(var(--hsl-content) / 8%);
			color: hsl(var(--hsl-content) / 100%);

			&:hover {
				background: hsl(var(--hsl-content) / 15%);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-content) / 100%);
					border-right-color: hsl(var(--hsl-content) / 100%);
				}
			}
		}

		&.is-variant-ghost {
			border: unset;
			background: transparent;
			color: hsl(var(--hsl-content) / 100%);

			&:hover {
				background: hsl(var(--hsl-content) / 5%);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-content) / 100%);
					border-right-color: hsl(var(--hsl-content) / 100%);
				}
			}
		}

		&.is-variant-accent {
			background: hsl(var(--hsl-accent));
			color: hsl(var(--hsl-accent-content));

			&:hover {
				background: color-mix(in srgb, hsl(var(--hsl-accent)) 80%, white);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-accent-content));
					border-right-color: hsl(var(--hsl-accent-content));
				}
			}
		}

		&.is-variant-negative {
			background: hsl(var(--hsl-negative));
			color: hsl(var(--hsl-negative-content));

			&:hover {
				background: color-mix(in srgb, hsl(var(--hsl-negative)) 80%, white);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-negative-content));
					border-right-color: hsl(var(--hsl-negative-content));
				}
			}
		}

		&.is-variant-positive {
			background: hsl(var(--hsl-positive));
			color: hsl(var(--hsl-positive-content));

			&:hover {
				background: color-mix(in srgb, hsl(var(--hsl-positive)) 80%, white);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-positive-content));
					border-right-color: hsl(var(--hsl-positive-content));
				}
			}
		}

		&.is-variant-white {
			border: 1px solid hsl(var(--hsl-content) / 15%);
			background: hsl(var(--hsl-white));
			color: hsl(var(--hsl-black));

			&:hover {
				background: color-mix(in srgb, hsl(var(--hsl-white)) 90%, black);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-black));
					border-right-color: hsl(var(--hsl-black));
				}
			}
		}

		&[disabled],
		&.is-disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}

		&.is-fluid {
			width: 100%;
		}

		&.is-compact {
			min-height: unset;
			padding: 0.375em 0.625em;
			border-radius: 0.25em;
		}

		&.is-pill {
			border-radius: 999px;
		}

		&.is-square {
			aspect-ratio: 1 / 1;
		}
	}

	@keyframes button-loading-spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(359deg);
		}
	}
</style>
