<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Link</h1>
<p>Link is an actionable text component with connection to another web pages.</p>
<br />
<Story>
	<span class="nm-link">This is link</span>

	<div slot="code">
		{dedent`
			<span class="nm-link">This is link</span>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Variant</h2>
<br />
<Story>
	<div class="_dp-f _g-6">
		<span class="nm-link is-variant-underline">This is link</span>
		<span class="nm-link is-variant-dot">This is link</span>
	</div>

	<div slot="code">
		{dedent`
			<span class="nm-link is-variant-underline">This is link</span>
			<span class="nm-link is-variant-dot">This is link</span>`}
	</div>
</Story>
