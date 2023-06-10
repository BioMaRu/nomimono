<script>
	import dedent from 'ts-dedent'
	import Story from '../../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Message</h1>
<p>Represents a message of varying severity levels</p>
<br />
<Story>
	<div class="nm-message">
		<p>The quick brown fox jumps over the lazy dog</p>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-message">
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Variant</h2>
<br />
<Story>
	<div class="lo-12 _g-6">
		<div class="nm-message is-variant-positive">
			<p>The quick brown fox jumps over the lazy dog</p>
		</div>

		<div class="nm-message is-variant-negative">
			<p>The quick brown fox jumps over the lazy dog</p>
		</div>

		<div class="nm-message is-variant-warning">
			<p>The quick brown fox jumps over the lazy dog</p>
		</div>

		<div class="nm-message is-variant-info">
			<p>The quick brown fox jumps over the lazy dog</p>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-message is-variant-positive">
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>

			<div class="nm-message is-variant-negative">
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>

			<div class="nm-message is-variant-warning">
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>

			<div class="nm-message is-variant-info">
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Show close</h2>
<br />
<Story>
	<div class="lo-12 _g-6">
		<div class="nm-message is-show-close">
			<p>The quick brown fox jumps over the lazy dog</p>
			<span class="close" />
		</div>

		<div class="nm-message is-variant-positive is-show-close">
			<p>The quick brown fox jumps over the lazy dog</p>
			<span class="close" />
		</div>

		<div class="nm-message is-variant-negative is-show-close">
			<p>The quick brown fox jumps over the lazy dog</p>
			<span class="close" />
		</div>

		<div class="nm-message is-variant-warning is-show-close">
			<p>The quick brown fox jumps over the lazy dog</p>
			<span class="close" />
		</div>

		<div class="nm-message is-variant-info is-show-close">
			<p>The quick brown fox jumps over the lazy dog</p>
			<span class="close" />
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-message is-show-close">
				<p>The quick brown fox jumps over the lazy dog</p>
				<span class="close" />
			</div>

			<div class="nm-message is-variant-positive is-show-close">
				<p>The quick brown fox jumps over the lazy dog</p>
				<span class="close" />
			</div>

			<div class="nm-message is-variant-negative is-show-close">
				<p>The quick brown fox jumps over the lazy dog</p>
				<span class="close" />
			</div>

			<div class="nm-message is-variant-warning is-show-close">
				<p>The quick brown fox jumps over the lazy dog</p>
				<span class="close" />
			</div>

			<div class="nm-message is-variant-info is-show-close">
				<p>The quick brown fox jumps over the lazy dog</p>
				<span class="close" />
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Show icon</h2>
<br />
<Story>
	<div class="lo-12 _g-6">
		<div class="nm-message is-show-icon">
			<span class="icon"><i class="fas fa-alien" /></span>
			<p>The quick brown fox jumps over the lazy dog</p>
		</div>

		<div class="nm-message is-variant-positive is-show-icon">
			<span class="icon"><i class="fas fa-alien" /></span>
			<p>The quick brown fox jumps over the lazy dog</p>
		</div>

		<div class="nm-message is-variant-negative is-show-icon">
			<span class="icon"><i class="fas fa-alien" /></span>
			<p>The quick brown fox jumps over the lazy dog</p>
		</div>

		<div class="nm-message is-variant-warning is-show-icon">
			<span class="icon"><i class="fas fa-alien" /></span>
			<p>The quick brown fox jumps over the lazy dog</p>
		</div>

		<div class="nm-message is-variant-info is-show-icon">
			<span class="icon"><i class="fas fa-alien" /></span>
			<p>The quick brown fox jumps over the lazy dog</p>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-message is-show-icon">
				<span class="icon"><i class="fas fa-alien" /></span>
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>

			<div class="nm-message is-variant-positive is-show-icon">
				<span class="icon"><i class="fas fa-alien" /></span>
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>

			<div class="nm-message is-variant-negative is-show-icon">
				<span class="icon"><i class="fas fa-alien" /></span>
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>

			<div class="nm-message is-variant-warning is-show-icon">
				<span class="icon"><i class="fas fa-alien" /></span>
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>

			<div class="nm-message is-variant-info is-show-icon">
				<span class="icon"><i class="fas fa-alien" /></span>
				<p>The quick brown fox jumps over the lazy dog</p>
			</div>`}
	</div>
</Story>
