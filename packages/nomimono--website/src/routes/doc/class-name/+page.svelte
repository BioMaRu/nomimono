<script lang="ts">
	import { onMount } from 'svelte'
	import dedent from 'ts-dedent'

	import FootNavigate from '$components/FootNavigate.svelte'

	let Prism

	onMount(async () => {
		Prism = (await import('$components/Prism.svelte')).default
	})
</script>

<h1 class="_fs-9">Class name</h1>

<div class="content">
	<section>
		<h4>Atomic class</h4>
		<p>
			Nomimono provides you the collection of classes for the property that is used often. it is
			designed to make sure that you can guess most of the class names without open the document and
			memorize too much.
		</p>
		<p>
			The atomic class can use in any situation; it will make sure that property will take effect in
			that element.
		</p>
		<p>
			You can use it to adjust nomimono's component class, use it with other CSS frameworks or
			combine multiple atomic classes to create the UI you want.
		</p>
	</section>

	<section>
		<h5>Class name anatomy</h5>
		<p>
			Look at these classes <code>_mgt-6</code>, <code>_fs-3</code>, <code>_dp-f</code>,
			<code>_pst-rst</code>. <br />Atomic class is simple. It starts with
			<code>_</code> prefix, followed by abbreviated of EVERY sound of that property name, then
			<code>-</code> and follows with property value. <code>_[name]-[value]</code>
		</p>
		<h6 class="_mgt-6">Abbreviated of EVERY sound</h6>
		<p>Pattern for <strong>keyword</strong> value.</p>
		<ul>
			<li><strong>display: flex</strong> is <code>_dp-f</code></li>
			<li><strong>cursor: pointer</strong> is <code>_cs-pt</code></li>
			<li><strong>position: absolute</strong> is <code>_pst-asl</code></li>
			<li><strong>width: unset</strong> is <code>_w-us</code></li>
			<li><strong>color: currentColor</strong> is <code>_cl-crcl</code></li>
			<li><strong>margin-left: auto</strong> is <code>_mgl-at</code></li>
			<li><strong>align-items: center</strong> is <code>_alit-ct</code></li>
			<li><strong>justify-content: flex-start</strong> is <code>_jtfct-fst</code></li>
			<li><strong>text-decoration: underline</strong> is <code>_tdcrt-udl</code></li>
		</ul>
		<p>
			Now, can you guess this
			<strong>backface-visibility: visible</strong> class name?
			<br />
			Yes, it is "<code class="_cl-base-100">_bfvsblt-vsb</code>".
		</p>
		<h6 class="_mgt-6">Theme value</h6>

		<p>
			Some classes have value from theme variables, especially color (<code
				>color, background-color, border-color etc.</code
			>) and spacing (<code>width, margin, padding, left, bottom etc.</code>)
		</p>

		<p>
			<strong>For color</strong> you can just use hsl variable name in color section of
			<a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-theme/light.css"
				rel="noreferrer"
				target="_blank">theme file</a
			>. for example <code>_cl-primary</code>, <code>_cl-positive</code>,
			<code>_cl-base-200</code>, <code>_cl-content</code>
		</p>

		<p>
			<strong>For spacing</strong> you can just use scale number in the spacing section of
			<a
				class="nm-link"
				href="https://cdn.jsdelivr.net/npm/@nomimono/nomimono-theme/light.css"
				rel="noreferrer"
				target="_blank">theme file</a
			>. for example <code>_mg-6</code>, <code>_pdbt-8</code>,
			<code>_l-0</code>, <code>_w-10</code>
		</p>

		<p>You can visit each atomic class document for more information about each class.</p>
	</section>
</div>
<FootNavigate
	nextPath="/doc/variable"
	nextTitle="Variable"
	prevPath="/doc/installation"
	prevTitle="Installation"
/>
