<script>
	import dedent from 'ts-dedent'
	import Story from '../../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Panel</h1>
<p>All-around component for contain and display data.</p>
<br />
<Story>
	<div class="lo-12 _g-6">
		<div class="nm-panel">The quick brown fox jumps over the lazy dog</div>
		<div class="nm-panel is-level-200">The quick brown fox jumps over the lazy dog</div>
		<div class="nm-panel is-level-300">The quick brown fox jumps over the lazy dog</div>
		<div class="nm-panel is-level-400">The quick brown fox jumps over the lazy dog</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-panel">The quick brown fox jumps over the lazy dog</div>
			<div class="nm-panel is-level-200">The quick brown fox jumps over the lazy dog</div>
			<div class="nm-panel is-level-300">The quick brown fox jumps over the lazy dog</div>
			<div class="nm-panel is-level-400">The quick brown fox jumps over the lazy dog</div>`}
	</div>
</Story>
