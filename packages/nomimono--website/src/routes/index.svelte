<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// import heroImg from '$assets/hero.svg'
</script>

<svelte:head>
	<title>Home</title>
	<meta content="Svelte demo app" name="description" />
</svelte:head>

<section class="hero _bgcl-base-200">
	<div class="lo-container _h-100pct">
		<div class="_dp-f _alit-ct _gg-7 _h-100pct _pdv-7 _pst-rlt">
			<div class="_f-1 _pst-rlt _zid-1">
				<h1 class="_fs-14 _fw-700">Nomimono</h1>
				<p class="_fs-7 _mgt-4 _cl-content _cl-opacity-70">
					Simple yet highly customizable UI Framework.
				</p>
				<div class="_dp-f _g-5 _mgt-9">
					<a class="nomi-button is-size-large" href="/atomic/display">
						Get started
					</a>
					<div class="nomi-slate">
						<code>npm i @nomimono/nomimono-css</code>
					</div>
				</div>
			</div>

			<img
				alt="Nomimono"
				class="_pst-asl _zid-0 _r-0 _t-10"
				src="hero.svg"
				style="height: 600px;"
			>
		</div>
	</div>
</section>

<section class="lo-container _pdv-12">
	<div class="lo-4 _g-10">
		<div class="lo-12 _g-6 _jtfit-ct _alct-st _tal-ct">
			<div class="_w-10 _h-10 _bdrd-max _dp-f _alit-ct _jtfct-ct _bgcl-warning _bgcl-opacity-20 _cl-warning _fs-6">
				<i class="fa-solid fa-bolt"></i>
			</div>
			<h5 class="_mgt-4">Zero Setup</h5>
			<p class="_cl-content _cl-opacity-70">Just import CSS files and you're ready to go!</p>
		</div>

		<div class="lo-12 _g-6 _jtfit-ct _alct-st _tal-ct">
			<div class="_w-10 _h-10 _bdrd-max _dp-f _alit-ct _jtfct-ct _bgcl-positive _bgcl-opacity-20 _cl-positive _fs-6">
				<i class="fa-solid fa-blender"></i>
			</div>
			<h5 class="_mgt-4">Easy Mixing</h5>
			<p class="_cl-content _cl-opacity-70">Customize your own design systems using just CSS custom properties</p>
		</div>

		<div class="lo-12 _g-6 _jtfit-ct _alct-st _tal-ct">
			<div class="_w-10 _h-10 _bdrd-max _dp-f _alit-ct _jtfct-ct _bgcl-negative _bgcl-opacity-20 _cl-negative _fs-6">
				<i class="fa-solid fa-battery-bolt"></i>
			</div>
			<h5 class="_mgt-4">Battery included</h5>
			<p class="_cl-content _cl-opacity-70">Component, atomic, useful utility class and theme switching</p>
		</div>
	</div>
</section>

<section class="lo-container _pdv-12 _bgcl-base-200">
	<div>AAA</div>
</section>

<section class="lo-container _pdv-12 _bgcl-base-400">
	<div>AAA</div>
</section>

<section class="lo-container _pdv-12 _bgcl-base-200">
	<div>AAA</div>
</section>

<section class="lo-container _pdv-12 _bgcl-base-100">
	<div>AAA</div>
</section>

<style lang="scss">
	.hero {
		height: 600px;
		background-image: radial-gradient(hsl(var(--hsl-content) / 0.25) 0.45px, transparent 0.45px);
		background-size: 11px 11px;
	}

	.nomi-slate {
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 1em;
		border: 1px solid hsl(var(--hsl-content) / 0.2);
		border-radius: 8px;
		background: hsl(var(--hsl-base-300));
	}
</style>
