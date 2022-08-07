<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Dropdown</h1>
<p>Toggle contextual overlays for displaying contents.</p>
<p>For non-focusable content you can use <code class="_cl-accent">tabindex="0"</code></p>
<br />
<Story>
	<div class="nm-dropdown">
		<span tabindex="0">Click me</span>
		<div tabindex="0">Hi mum</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-dropdown">
				<span tabindex="0">Click me</span>
				<div tabindex="0">Hi mum</div>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Hover to open</h2>
<br />
<Story>
	<div class="nm-dropdown is-hover-open">
		<span>Hover me</span>
		<div tabindex="0">Hi, mom</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-dropdown is-hover-open">
				<span>Hover me</span>
				<div tabindex="0">
					Hi, mom
				</div>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Using <a href="/component/menu">nm-menu</a> for content</h2>
<br />
<Story>
	<div class="nm-dropdown">
		<button class="nm-button">Open Dropdown</button>

		<ul class="nm-menu is-card" tabindex="0">
			<li>
				<span>Menu 1</span>
			</li>
			<li>
				<span>Menu 2</span>
			</li>
		</ul>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-dropdown">
				<button class="nm-button" tabindex="0">Open Dropdown</button>

				<ul tabindex="0" class="nm-menu is-card">
					<li>
						<span>Menu 1</span>
					</li>
					<li>
						<span>Menu 2</span>
					</li>
				</ul>
			</div>`}
	</div>
</Story>
