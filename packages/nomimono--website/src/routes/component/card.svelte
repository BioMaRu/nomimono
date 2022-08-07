<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Card</h1>
<p>Card use for organizing content</p>
<br />
<br />
<Story>
	<div class="nm-card">Hi, mom.</div>

	<div slot="code">
		{dedent`
				<div class="nm-card">
					Hi, mom
				</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Raised</h2>
<br />
<Story>
	<div class="_dp-f _g-6">
		<div class="nm-card is-raised-100">Hi, mom.</div>
		<div class="nm-card is-raised-200">Hi, mom.</div>
		<div class="nm-card is-raised-300">Hi, mom.</div>
		<div class="nm-card is-raised-400">Hi, mom.</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-card is-raised-100">
				Hi, mom.
			</div>
			<div class="nm-card is-raised-200">
				Hi, mom.
			</div>
			<div class="nm-card is-raised-300">
				Hi, mom.
			</div>
			<div class="nm-card is-raised-400">
				Hi, mom.
			</div>`}
	</div>
</Story>
