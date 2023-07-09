<script lang="ts">
	export let size: 'small' | 'medium' | 'large' = 'medium'
</script>

<button
	{...$$restProps}
	on:click
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	class:small={size === 'small'}
>
	<slot />
</button>

<style lang="scss">
	button {
		position: relative;
		z-index: 0;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		min-height: var(--button-medium-height);
		padding: 0 18px;
		border: none;
		border-radius: var(--button-border-radius);
		background: hsl(var(--hsl-primary));
		color: hsl(var(--hsl-primary-content));
		outline: none;
		font-weight: var(--button-font-weight);
		font-size: var(--button-medium-font-size);
		font-family: var(--button-font-family);
		line-height: 100%;
		cursor: pointer;
		user-select: none;
		transition: all 0.16s ease-in-out;

		& > div {
			z-index: 1;
		}

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			z-index: -1;
			pointer-events: none;
			transition: all 0.16s ease-in-out;
		}

		&:hover,
		&:focus {
			background: hsl(var(--hsl-primary-active) / 100%);
		}

		&:not(.is-no-focus-ring):focus {
			box-shadow: 0 0 0 0.175rem hsl(var(--hsl-primary) / 30%);
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
			padding: 0 16px;
			font-size: var(--button-small-font-size);
		}

		&.is-size-medium {
			min-height: var(--button-medium-height);
			padding: 0 18px;
			font-size: var(--button-medium-font-size);
		}

		&.is-size-large {
			min-height: var(--button-large-height);
			padding: 0 20px;
			font-size: var(--button-large-font-size);
		}

		&.is-variant-accent {
			background: hsl(var(--hsl-accent));
			color: hsl(var(--hsl-accent-content));

			&:hover,
			&:focus {
				background: hsl(var(--hsl-accent-active));
			}

			&:not(.is-no-focus-ring):focus {
				box-shadow: 0 0 0 0.175rem hsl(var(--hsl-accent) / 30%);
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

			&:hover,
			&:focus {
				background: hsl(var(--hsl-negative) / 85%);
			}

			&:not(.is-no-focus-ring):focus {
				box-shadow: 0 0 0 0.175rem hsl(var(--hsl-negative) / 30%);
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

			&:hover,
			&:focus {
				background: hsl(var(--hsl-positive) / 85%);
			}

			&:not(.is-no-focus-ring):focus {
				box-shadow: 0 0 0 0.175rem hsl(var(--hsl-positive) / 30%);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-positive-content));
					border-right-color: hsl(var(--hsl-positive-content));
				}
			}
		}

		&.is-variant-secondary {
			border: 1px solid hsl(var(--hsl-content) / 15%);
			background: transparent;
			color: hsl(var(--hsl-content));

			&:hover {
				border: 1px solid hsl(var(--hsl-content) / 20%);
				background: hsl(var(--hsl-content) / 5%);

				&::before {
					background: var(--color-shade-100);
				}
			}

			&:not(.is-no-focus-ring):focus {
				box-shadow: 0 0 0 0.175rem hsl(var(--hsl-primary) / 30%);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-primary));
					border-right-color: hsl(var(--hsl-primary));
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

			&:not(.is-no-focus-ring):focus {
				box-shadow: 0 0 0 0.175rem hsl(var(--hsl-primary) / 30%);
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

			&:not(.is-no-focus-ring):focus {
				box-shadow: 0 0 0 0.175rem hsl(var(--hsl-primary) / 30%);
			}

			&.is-loading {
				color: transparent;

				&::after {
					border-top-color: hsl(var(--hsl-content) / 100%);
					border-right-color: hsl(var(--hsl-content) / 100%);
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

		&.is-pill {
			border-radius: 999px;
		}

		&.is-icon-button {
			padding: 0;
			aspect-ratio: 1 / 1;
		}

		&.is-icon-left,
		&.is-icon-right {
			display: flex;
			gap: 8px;
			align-items: center;
		}

		&.is-icon-left {
			padding-left: 12px;
		}

		&.is-icon-right {
			padding-right: 12px;
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
