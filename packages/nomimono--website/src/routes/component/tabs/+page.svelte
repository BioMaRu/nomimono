<script>
	import dedent from 'ts-dedent'
	import Story from '../../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Tabs</h1>
<p>
	Tabs are used for switching between different views, functional aspects or categorized data
	sets.
</p>
<br />
<Story>
	<div class="lo-12 _jtfit-st _g-8">
		<div class="nm-tabs">
			<div class="tab-button is-active">Home</div>
			<div class="tab-button">Information</div>
			<div class="tab-button">Note</div>
		</div>

		<div class="nm-tabs is-variant-underline">
			<div class="tab-button is-active">Home</div>
			<div class="tab-button">Information</div>
			<div class="tab-button">Note</div>
		</div>

		<div class="nm-tabs is-variant-button">
			<div class="tab-button is-active">Home</div>
			<div class="tab-button">Information</div>
			<div class="tab-button">Note</div>
		</div>

		<div class="nm-tabs is-variant-bordered">
			<div class="tab-button is-active">Home</div>
			<div class="tab-button">Information</div>
			<div class="tab-button">Note</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-tabs">
				<div class="tab-button is-active">Home</div>
				<div class="tab-button">Information</div>
				<div class="tab-button">Note</div>
			</div>

			<div class="nm-tabs is-variant-underline">
				<div class="tab-button is-active">Home</div>
				<div class="tab-button">Information</div>
				<div class="tab-button">Note</div>
			</div>

			<div class="nm-tabs is-variant-button">
				<div class="tab-button is-active">Home</div>
				<div class="tab-button">Information</div>
				<div class="tab-button">Note</div>
			</div>

			<div class="nm-tabs is-variant-bordered">
				<div class="tab-button is-active">Home</div>
				<div class="tab-button">Information</div>
				<div class="tab-button">Note</div>
			</div>`}
	</div>
</Story>
