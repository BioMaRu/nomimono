<script lang="ts">
	import ModifierSelector from '$components/ModifierSelector.svelte'

	let suffix = ''
</script>

<h1 class="_fs-8">Align items</h1>

<br />

<p class="_cl-content _cl-opacity-70 _fs-3">
	The CSS align-items property sets the align-self value on all direct children as a group. In
	Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the
	alignment of items on the Block Axis within their grid area.
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
				><td><code class="_cl-accent">{`_alit-nm${suffix}`}</code></td><td
					>align-items: normal</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_alit-str${suffix}`}</code></td><td
					>align-items: stretch</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_alit-ct${suffix}`}</code></td><td
					>align-items: center</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_alit-st${suffix}`}</code></td><td
					>align-items: start</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_alit-e${suffix}`}</code></td><td
					>align-items: end</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_alit-fst${suffix}`}</code></td><td
					>align-items: flex-start</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_alit-fe${suffix}`}</code></td><td
					>align-items: flex-end</td
				></tr
			>
			<tr
				><td><code class="_cl-accent">{`_alit-bl${suffix}`}</code></td><td
					>align-items: baseline</td
				></tr
			>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={v => (suffix = v.detail.value)} />
