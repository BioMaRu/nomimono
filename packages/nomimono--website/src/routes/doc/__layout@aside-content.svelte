<div class="article">
	<slot />
</div>

<style lang="scss">
	.article {
		:global(section) {
			margin-top: var(--spc-10);
		}

		:global(ul) {
			font-size: var(--fs-3);
			display: flex;
			flex-direction: column;
			margin-top: 1rem;
			padding-bottom: 0.75rem;
			padding-left: 1em;
			color: hsl(var(--hsl-content) / 0.8);
			gap: 0.5rem;
		}

		:global(p) {
			font-size: var(--fs-3);
			margin-top: 1rem;
			color: hsl(var(--hsl-content) / 0.8);
		}

		:global(h1),
		:global(h2),
		:global(h3),
		:global(h4),
		:global(h5),
		:global(h6) {
			margin-bottom: 0.5em;
		}

		:global(code:not([class^='language'])) {
			color: hsl(var(--hsl-accent));
		}

		:global([commaid-line] code) {
			color: hsl(var(--hsl-white));
		}
	}
</style>
