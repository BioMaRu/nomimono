<script>
	import '../style.scss'
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/4ecb2829b4.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="_pd-10 _dp-f _g-10">
	<a href="/button" class="nm-link">Button</a>
	<a href="/anchor" class="nm-link">Anchor</a>
	<a href="/input" class="nm-link">Input</a>
</div>

<slot><!-- optional fallback --></slot>
