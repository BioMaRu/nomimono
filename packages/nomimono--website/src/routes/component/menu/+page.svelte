<script>
	import dedent from 'ts-dedent'

	import Story from '../../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Menu</h1>
<p>A menu is a navigable contextual list of items that can be selected.</p>
<br />
<Story>
	<ul class="nm-menu">
		<li>
			<span>Menu 1</span>
		</li>
		<li>
			<span>Menu 2</span>
		</li>
		<li>
			<span>Menu 3</span>
		</li>
	</ul>

	<div slot="code">
		{dedent`
			<ul class="nm-menu">
				<li>
					<span>Menu 1</span>
				</li>
				<li>
					<span>Menu 2</span>
				</li>
				<li>
					<span>Menu 3</span>
				</li>
			</ul>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Variant and styles</h2>
<br />

<Story>
	<div class="_dp-f _alit-fst _g-6">
		<ul class="nm-menu is-card">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-compact">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-card is-variant-inset">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-card is-compact is-variant-inset">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>
	</div>

	<div class="_dp-f _alit-fst _g-6 _mgt-6">
		<ul class="nm-menu is-card is-round-border">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-compact is-round-border">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-card is-round-border is-variant-inset">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-card is-compact is-round-border is-variant-inset">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>
	</div>

	<div slot="code">
		{dedent`
		<ul class="nm-menu is-card">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-compact">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-card is-variant-inset">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-card is-compact is-variant-inset">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-card is-round-border">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-compact is-round-border">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-card is-round-border is-variant-inset">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>

		<ul class="nm-menu is-card is-compact is-round-border is-variant-inset">
			<li><span>Menu 1</span></li>
			<li><span>Menu 2</span></li>
			<li><span>Menu 3</span></li>
		</ul>`}
	</div>
</Story>
