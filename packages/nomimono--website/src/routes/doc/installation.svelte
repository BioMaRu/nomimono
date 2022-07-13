<script lang="ts">
	import dedent from 'ts-dedent'
	import { onMount } from "svelte"

	let Prism

	onMount(async () => {
		Prism = (await import("$components/Prism.svelte")).default
	})
</script>

<h1 class="_fs-9">Installation</h1>
<br>
<br>

<section>
	<hr class="_mgt-9 _mgbt-8">
	<h5 id="install">Install package</h5>
	<br>
	<p class="_cl-content _cl-opacity-70 _fs-3">
		Open a terminal at the root of your project workspace and run the following yarn or npm command:
	</p>
	{#if typeof window !== "undefined"}
		<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _fs-2 _mgt-6 _cl-secondary">
			<svelte:component this={Prism} language="css" isStandalone>
				{
					dedent`
					yarn add @nomimono/nomimono-css @nomimono/nomimono-theme
					npm install @nomimono/nomimono-css @nomimono/nomimono-theme`
				}
			</svelte:component>
		</div>
	{/if}
	<br>
	<p class="_cl-content _cl-opacity-70 _fs-3">
		The command will install all packages in the node_modules folder of your application.
	</p>
</section>

<section>
	<hr class="_mgt-9 _mgbt-8">
	<h5 id="import">Import CSS file</h5>
	<br>
	<p class="_cl-content _cl-opacity-70 _fs-3">
		Import CSS files into your project. You can import what you need.
		<br>
		<br>
		For theme, it is not required if you want to create your own design systems, But it can be helpful to import and use it as a base for your systems.
	</p>
	{#if typeof window !== "undefined"}
		<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _fs-2 _mgt-6 _cl-secondary">
			<svelte:component this={Prism} language="css" isStandalone>
				{
					dedent`
					@import '@nomimono/nomimono-css/reset.css';
					@import '@nomimono/nomimono-css/atomic.css';
					@import '@nomimono/nomimono-css/component.css';
					@import '@nomimono/nomimono-css/layout.css';
					@import '@nomimono/nomimono-css/utility.css';
					@import '@nomimono/nomimono-theme/light.css';
					`
				}
			</svelte:component>
		</div>
	{/if}
	<br>
	<p class="_cl-content _cl-opacity-70 _fs-3">
		An now you're ready to go.
	</p>
</section>
