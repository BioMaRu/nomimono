<script lang="ts">
	import dedent from 'ts-dedent'
	import { onMount } from 'svelte'
	import FootNavigate from '$components/FootNavigate.svelte'

	let Prism

	onMount(async () => {
		Prism = (await import('$components/Prism.svelte')).default
	})
</script>

<h1 class="_fs-9">Installation</h1>

<section>
	<h5>Install package</h5>
	<p>
		Open a terminal at the root of your project workspace and run the following yarn or npm
		command:
	</p>
	{#if typeof window !== 'undefined'}
		<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _fs-2 _mgt-6">
			<svelte:component this={Prism} language="css" isStandalone class="_cl-white-100">
				{dedent`
					yarn add @nomimono/nomimono-css @nomimono/nomimono-theme
					npm install @nomimono/nomimono-css @nomimono/nomimono-theme`}
			</svelte:component>
		</div>
	{/if}

	<p>The command will install all packages in the node_modules folder of your application.</p>
</section>

<section>
	<h5 id="import">Import CSS file</h5>
	<p>Import CSS files into your project. You can import only css files you need.</p>
	<ul>
		<li>
			<a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-theme/light.css"
				rel="noreferrer"
				target="_blank">nomimono-theme/light.css</a
			> – default light theme
		</li>
		<li>
			<a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-css/reset.css"
				rel="noreferrer"
				target="_blank">nomimono-css/reset.css</a
			>
			– reset browser style for nomimono <strong>* required</strong>
		</li>
		<li>
			<a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-css/atomic.css"
				rel="noreferrer"
				target="_blank">nomimono-css/atomic.css</a
			>
			– atomic utility classes that you'll love.
		</li>
		<li>
			<a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-css/layout.css"
				rel="noreferrer"
				target="_blank">nomimono-css/layout.css</a
			>
			– classes for help creating responsive grid layout.
		</li>
		<li>
			<a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-css/component.css"
				rel="noreferrer"
				target="_blank">nomimono-css/component.css</a
			>
			– collection of UI element classes that consume theme.
		</li>
	</ul>
	<p>
		You can create your theme just by copying the base theme of your choice (light, dark),
		saving it into your project, and changing the variable's value. For advanced customization,
		see the <a class="nm-link" href="/doc/customization">customization</a>
		page.
	</p>
	{#if typeof window !== 'undefined'}
		<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _fs-2 _mgt-6">
			<svelte:component this={Prism} language="css" isStandalone>
				{dedent`
					@import '@nomimono/nomimono-theme/light.css';
					@import '@nomimono/nomimono-css/reset.css';
					@import '@nomimono/nomimono-css/atomic.css';
					@import '@nomimono/nomimono-css/layout.css';
					@import '@nomimono/nomimono-css/component.css';
					`}
			</svelte:component>
		</div>
	{/if}
</section>

<section>
	<h5>Set default theme</h5>
	<p>
		Simply add <code>data-theme="THEME_NAME"</code> to <code>>html</code> tag to load the theme variable
		to your browser.
	</p>
	<p>
		Generally, you may want to use the <code>light.css</code> theme in
		<code>@nomimono/nomimono-theme</code> for the default theme of your app.
	</p>
	<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _fs-2 _mgt-6 _cl-accent">
		<svelte:component this={Prism} isStandalone language="html">
			{dedent`<html data-theme="light">
						...
					</html>`}
		</svelte:component>
	</div>
	<p>An now you're ready to go.</p>
</section>

<FootNavigate
	Introduction
	nextPath="/doc/usage"
	nextTitle="Usage"
	prevPath="/doc/introduction"
	prevTitle="Introduction"
/>
