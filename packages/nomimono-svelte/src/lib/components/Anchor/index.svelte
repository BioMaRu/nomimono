<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements'

	interface $$Props extends HTMLAnchorAttributes {
		href: string | null | undefined
		variant?: 'underline' | 'underline-dot' | undefined
		external?: boolean
	}

	interface $$Slots {
		default: any
	}

	export let href: $$Props['href']
	export let variant: $$Props['variant'] = undefined
	export let external: $$Props['external'] = false
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noreferrer noopener' : undefined}
	class:is-variant-underline={variant === 'underline'}
	class:is-variant-underline-dot={variant === 'underline-dot'}
	{...$$restProps}
>
	<slot />
</a>

<style lang="scss">
	a {
		color: hsl(var(--hsl-primary));
		text-decoration: none;
		cursor: pointer;

		&:hover {
			color: hsl(var(--hsl-primary-active));
			text-decoration: underline;
		}

		&.is-variant-underline {
			text-decoration: underline;
		}

		&.is-variant-underline-dot {
			border-bottom: 1px dotted hsl(var(--hsl-primary));

			&:hover {
				text-decoration: none;
			}
		}
	}
</style>
