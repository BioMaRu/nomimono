<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Badge</h1>
<p>Display badge.</p>
<br />
<Story>
	<div class="dp-f _g-6">
		<div class="nm-badge">Badge</div>
		<div class="nm-badge is-variant-accent">Badge</div>
		<div class="nm-badge is-variant-positive">Badge</div>
		<div class="nm-badge is-variant-negative">Badge</div>
		<div class="nm-badge is-variant-warning">Badge</div>
		<div class="nm-badge is-variant-info">Badge</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-badge">Badge</div>
			<div class="nm-badge is-variant-accent">Badge</div>
			<div class="nm-badge is-variant-positive">Badge</div>
			<div class="nm-badge is-variant-negative">Badge</div>
			<div class="nm-badge is-variant-warning">Badge</div>
			<div class="nm-badge is-variant-info">Badge</div>`}
	</div>
</Story>
