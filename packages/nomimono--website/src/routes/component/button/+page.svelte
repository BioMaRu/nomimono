<script>
	import dedent from 'ts-dedent'
	import Story from '../../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Button</h1>
<p>
	Button component allows users to initiate actions. It's visually appealing and provides clear
	feedback.
</p>
<br />
<Story>
	<button class="nm-button">Button</button>

	<div slot="code">
		{dedent`
				<button class="nm-button">Button</button>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Variant</h2>
<br />
<Story>
	<div class="_dp-f _g-5">
		<button class="nm-button">Primary</button>
		<button class="nm-button is-variant-accent">Accent</button>
		<button class="nm-button is-variant-secondary">Secondary</button>
		<button class="nm-button is-variant-tertiary">Tertiary</button>
		<button class="nm-button is-variant-ghost">Ghost</button>
		<button class="nm-button is-variant-positive">Positive</button>
		<button class="nm-button is-variant-negative">Negative</button>
	</div>

	<div slot="code">
		{dedent`
				<button class="nm-button">Primary</button>
				<button class="nm-button is-variant-accent">Accent</button>
				<button class="nm-button is-variant-secondary">Secondary</button>
				<button class="nm-button is-variant-tertiary">Tertiary</button>
				<button class="nm-button is-variant-ghost">Ghost</button>
				<button class="nm-button is-variant-positive">Positive</button>
				<button class="nm-button is-variant-negative">Negative</button>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Size</h2>
<br />
<Story>
	<div class="_dp-f _g-5 _alit-ct">
		<button class="nm-button is-size-small">Small</button>
		<button class="nm-button">Medium</button>
		<button class="nm-button is-size-large">Large</button>
	</div>

	<div slot="code">
		{dedent`
				<button class="nm-button is-size-small">Small</button>
				<button class="nm-button">Medium</button>
				<button class="nm-button is-size-large">Large</button>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Icon button</h2>
<br />
<Story>
	<div class="_dp-f _g-5 _alit-ct">
		<button class="nm-button is-icon-button is-size-small is-variant-secondary">
			<i class="fa-regular fa-rotate-right _fs-3" />
		</button>
		<button class="nm-button is-icon-button">
			<i class="fa-solid fa-thumbs-up _fs-6" />
		</button>
		<button class="nm-button is-variant-negative is-icon-button">
			<i class="fa-solid fa-times _fs-6" />
		</button>
		<button class="nm-button is-variant-positive is-icon-button">
			<i class="fa-solid fa-check _fs-6" />
		</button>
		<button class="nm-button is-variant-ghost is-icon-button">
			<i class="fa-solid fa-alien _fs-6" />
		</button>
		<button class="nm-button is-icon-button is-size-large is-variant-tertiary">
			<i class="fa-solid fa-heart _fs-7" />
		</button>
	</div>

	<div slot="code">
		{dedent`
		<button class="nm-button is-icon-button is-size-small is-variant-secondary">
			<i class="fa-regular fa-rotate-right _fs-3" />
		</button>
		<button class="nm-button is-icon-button">
			<i class="fa-solid fa-thumbs-up _fs-6" />
		</button>
		<button class="nm-button is-icon-button is-size-large is-variant-tertiary">
			<i class="fa-solid fa-heart _fs-7" />
		</button>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Icon</h2>
<br />
<Story>
	<div class="_dp-f _g-5 _alit-ct">
		<button class="nm-button is-icon-left is-size-small is-variant-secondary">
			<i class="fa-regular fa-rotate-right _fs-3" /> Reload
		</button>
		<button class="nm-button is-icon-right">
			Like <i class="fa-solid fa-thumbs-up _fs-6" />
		</button>
		<button class="nm-button is-icon-left is-size-large is-variant-tertiary">
			<i class="fa-solid fa-heart _fs-7" /> Favorite
		</button>
	</div>

	<div slot="code">
		{dedent`
		<button class="nm-button is-icon-left is-size-small is-variant-secondary">
			<i class="fa-regular fa-rotate-right _fs-3" /> Reload
		</button>
		<button class="nm-button is-icon-right">
			Like <i class="fa-solid fa-thumbs-up _fs-6" />
		</button>
		<button class="nm-button is-icon-left is-size-large is-variant-tertiary">
			<i class="fa-solid fa-heart _fs-7" /> Favorite
		</button>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Loading</h2>
<br />
<Story>
	<div class="_dp-f _g-5 _alit-ct">
		<button class="nm-button is-loading">Button</button>
		<button class="nm-button is-variant-accent is-loading">Button</button>
		<button class="nm-button is-variant-secondary is-loading">Button</button>
		<button class="nm-button is-variant-tertiary is-loading">Button</button>
		<button class="nm-button is-variant-ghost is-loading">Button</button>
		<button class="nm-button is-variant-positive is-loading">Button</button>
		<button class="nm-button is-variant-negative is-loading">Button</button>
	</div>

	<div slot="code">
		{dedent`
				<button class="nm-button is-loading">Button</button>
				<button class="nm-button is-variant-accent is-loading">Button</button>
				<button class="nm-button is-variant-secondary is-loading">Button</button>
				<button class="nm-button is-variant-tertiary is-loading">Button</button>
				<button class="nm-button is-variant-ghost is-loading">Button</button>
				<button class="nm-button is-variant-positive is-loading">Button</button>
				<button class="nm-button is-variant-negative is-loading">Button</button>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Disabled</h2>
<br />
<Story>
	<div class="_dp-f _g-5 _alit-ct">
		<button class="nm-button" disabled>Button</button>
		<button class="nm-button is-variant-accent" disabled>Button</button>
		<button class="nm-button is-variant-secondary" disabled>Button</button>
		<button class="nm-button is-variant-tertiary" disabled>Button</button>
		<button class="nm-button is-variant-ghost" disabled>Button</button>
		<button class="nm-button is-variant-positive" disabled>Button</button>
		<button class="nm-button is-variant-negative" disabled>Button</button>
	</div>

	<div slot="code">
		{dedent`
			<button class="nm-button" disabled>Button</button>
			<button class="nm-button is-variant-accent" disabled>Button</button>
			<button class="nm-button is-variant-secondary" disabled>Button</button>
			<button class="nm-button is-variant-tertiary" disabled>Button</button>
			<button class="nm-button is-variant-ghost" disabled>Button</button>
			<button class="nm-button is-variant-positive" disabled>Button</button>
			<button class="nm-button is-variant-negative" disabled>Button</button>`}
	</div>
</Story>
