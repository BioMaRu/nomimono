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

<section class="hero _bgcl-neutral-100">
	<div class="lo-container _h-100pct">
		<div class="_dp-f _alit-ct _gg-24px _h-100pct _pdv-24px _pst-rlt">
			<div class="_f-1 _pst-rlt _zid-1">
				<h1 class="_fw-700">Nomimono</h1>
				<p class="_fs-600 _mgt-4px">
					Simple yet highly customizable UI Framework.
				</p>
				<div class="_dp-f _gg-12px _mgt-48px">
					<a class="nomi-button is-size-large" href="#">
						Get started
					</a>
					<div class="nomi-slate">
						npm i @nomimono/nomimono-css
					</div>
				</div>
			</div>

			<img
				alt="Nomimono"
				class="_pst-asl _zid-0 _r-0px"
				src="hero.svg"
				style="height: 500px; transform: scale(1.2); transform-origin: top right;"
			>
		</div>
	</div>
</section>

<style lang="scss">
	.hero {
		height: 600px;
		background-image: radial-gradient(#ababab 0.45px, transparent 0.45px);
		background-size: 11px 11px;
	}

	.nomi-slate {
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 16px;
		border: 2px solid var(--color-neutral-500);
		border-radius: 8px;
		background: var(--color-neutral-200);

	}
</style>
