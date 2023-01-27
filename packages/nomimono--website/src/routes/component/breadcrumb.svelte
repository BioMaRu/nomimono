<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Breadcrumb</h1>
<p>
	Display breadcrumb. A breadcrumb in web UI is a navigation aid that shows the user's location on
	the website by a horizontal bar of links, each representing a different level of the site's
	hierarchy, making it easy for users to navigate and understand their current location.
</p>

<br />

<Story>
	<div class="nm-breadcrumb">
		<div class="nm-breadcrumb-item">
			<a class="nm-link" href="#"> Home </a>
		</div>
		<div class="nm-breadcrumb-item">
			<a class="nm-link" href="#"> Product </a>
		</div>
		<div class="nm-breadcrumb-item">
			<strong>Sunflower</strong>
		</div>
	</div>
	<br />
	<br />
	<div class="nm-breadcrumb is-variant-slash">
		<div class="nm-breadcrumb-item">
			<a class="nm-link" href="#"> Home </a>
		</div>
		<div class="nm-breadcrumb-item">
			<a class="nm-link" href="#"> Product </a>
		</div>
		<div class="nm-breadcrumb-item">
			<strong>Sunflower</strong>
		</div>
	</div>

	<div slot="code">
		{dedent`
		<div class="nm-breadcrumb">
			<div class="nm-breadcrumb-item">
				<a class="nm-link" href="#"> Home </a>
			</div>
			<div class="nm-breadcrumb-item">
				<a class="nm-link" href="#"> Product </a>
			</div>
			<div class="nm-breadcrumb-item">
				<strong>Sunflower</strong>
			</div>
		</div>

		<div class="nm-breadcrumb is-variant-slash">
			<div class="nm-breadcrumb-item">
				<a class="nm-link" href="#"> Home </a>
			</div>
			<div class="nm-breadcrumb-item">
				<a class="nm-link" href="#"> Product </a>
			</div>
			<div class="nm-breadcrumb-item">
				<strong>Sunflower</strong>
			</div>
		</div>`}
	</div>
</Story>
