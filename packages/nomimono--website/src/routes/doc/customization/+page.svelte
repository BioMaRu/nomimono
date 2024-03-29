<script lang="ts">
	import { onMount } from 'svelte'
	import dedent from 'ts-dedent'

	import FootNavigate from '$components/FootNavigate.svelte'

	let Prism

	onMount(async () => {
		Prism = (await import('$components/Prism.svelte')).default
	})
</script>

<div class="content">
	<h1 class="_fs-9">Customization</h1>

	<section>
		<h4>Basic use case</h4>
		<p>
			If overall nomimono looks good and you only need to change some colors or tweak some
			components to match your branding, here are the easy steps.
		</p>
		<p>
			After <a class="nm-link" href="/doc/installation">install nomimono packages</a>, don't include
			theme file from nomimono-theme but create your theme CSS file in your project and include that
			file instead.
		</p>
		{#if typeof window !== 'undefined'}
			<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _fs-2 _mgt-6">
				<svelte:component this={Prism} language="css" isStandalone>
					{dedent`
					@import 'path/to/your-theme.css';
					@import '@nomimono/nomimono-css/reset.css';
					@import '@nomimono/nomimono-css/atomic.css';
					@import '@nomimono/nomimono-css/layout.css';
					@import '@nomimono/nomimono-css/component.css';
					`}
				</svelte:component>
			</div>
		{/if}
		<p>
			then copy the content in <a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-theme/light.css"
				rel="noreferrer"
				target="_blank">light.css</a
			>
			or
			<a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-theme/dark.css"
				rel="noreferrer"
				target="_blank">dark.css</a
			>. Use it as a base for your theme.
		</p>
		<p>You can change the CSS properties value to match your project theme.</p>
	</section>

	<section>
		<h4>Config and extend the systems</h4>
		<p>
			If you want to add CSS variables, generate a new atomic class or change the class name prefix.
		</p>
		<p>
			To customize the atomic class, in <a
				class="nm-link"
				href="https://www.jsdelivr.com/package/npm/@nomimono/nomimono-css"
				rel="noreferrer"
				target="_blank">nomimono-css</a
			>
			, after you install the package, in the scss folder, you will find the config file of the atomic
			class
			<a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-css/scss/atomic/config.scss"
				rel="noreferrer"
				target="_blank"
			>
				(or use the CDN link here)
			</a>
		</p>
		<p>Then create your own config file and copy the content into your file.</p>
		<p>After updating your config file content, import it before importing all atomic classes.</p>
		{#if typeof window !== 'undefined'}
			<div class="nm-card _pd-0 _bgcl-black _bgcl-opacity-100 _fs-2 _mgt-6">
				<svelte:component this={Prism} language="css" isStandalone>
					{dedent`
					@import '@nomimono/nomimono-theme/light.scss';
					@import '@nomimono/nomimono-css/reset.css';
					@import '@nomimono/nomimono-css/layout.css';
					@import '@nomimono/nomimono-css/component.css';

					@import 'path/to/your/config.scss';
					@import '@nomimono/nomimono-css/scss/atomic/all.scss';
					`}
				</svelte:component>
			</div>
		{/if}
		<p>You can do the same for component or others modules as well.</p>
	</section>
</div>

<FootNavigate
	nextPath="/doc/customization"
	nextTitle="Customization"
	prevPath="/doc/variable"
	prevTitle="Variable"
/>
