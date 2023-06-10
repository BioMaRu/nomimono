<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''
</script>

<h1 class="_fs-8">Align self</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it
	aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
</p>

<section class="nm-table-container _mgt-8">
	<table class="nm-table is-variant-compact">
		<thead>
			<tr>
				<th>Class name</th>
				<th>Properties</th>
			</tr>
		</thead>
		<tbody>
			<tr
				><td><code class="_cl-accent">{`_als-nm${suffix}`}</code></td><td
					>align-self: normal</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_als-at${suffix}`}</code></td><td
					>align-self: auto</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_als-ct${suffix}`}</code></td><td
					>align-self: center</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_als-st${suffix}`}</code></td><td
					>align-self: start</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_als-e${suffix}`}</code></td><td>align-self: end</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_als-fst${suffix}`}</code></td><td
					>align-self: flex-start</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_als-fe${suffix}`}</code></td><td
					>align-self: flex-end</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_als-str${suffix}`}</code></td><td
					>align-self: stretch</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_als-bl${suffix}`}</code></td><td
					>align-self: baseline</td
				></tr
			>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={v => (suffix = v.detail.value)} />
