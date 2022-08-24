<script>
	import FootNavigate from '$components/FootNavigate.svelte'
</script>

<h1 class="_fs-9">Nomimono 🍹</h1>
<br />
<br />
<p>
	<strong class="_cl-content">Hello and welcome!</strong>
</p>
<p>
	Welcome to the document of Nomimono (aka. 'a drink' in Japanese) UI framework. Here, you can mix
	your colorful drink 🍸 like a bartender.
</p>

<section>
	<h5 id="philosophy">Philosophy</h5>
	<p>
		Nomimono created to be simple, ready to use, and easy customize to build your own
		maintainable design systems. Nomimono help you generate atomic class and battery included
		with essential components.
	</p>
	<p>
		Nomimono is built using SCSS and uses CSS custom property for configuring theme and
		component. You can change the theme or switch dark and light modes just by swapping into the
		different theme CSS files without a rebuild.
	</p>
	<p>Nomimono also help you get start for organize your design system too.</p>
</section>

<section>
	<h5 id="overview">Overview</h5>
	<p>
		Out of the box, Nomimono provides you with a core
		<a
			class="nm-link _tdcrt-udl"
			href="https://www.npmjs.com/package/@nomimono/nomimono-css"
			target={'_blank'}>@nomimono/nomimono-css</a
		>
		and
		<a
			class="nm-link _tdcrt-udl"
			href="https://www.npmjs.com/package/@nomimono/nomimono-theme"
			target={'_blank'}>@nomimono/nomimono-theme</a
		> Which is already ready to import and use. you can use default light.css / dark.css theme or
		create you your theme.
	</p>
</section>

<FootNavigate nextPath="/doc/installation" nextTitle="Installation" />
