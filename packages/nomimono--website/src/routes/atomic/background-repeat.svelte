<script lang="ts">
	import ModifierSelector from "$components/ModifierSelector.svelte"

	let suffix = ''
</script>

<h1 class="_fs-8">Background repeat</h1>

<br>

<p class="_cl-content _cl-opacity-70 _fs-3">
	The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
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
			<tr><td><code class="_cl-secondary">{`_bgrp-rp${suffix}`}</code></td><td>background-repeat: repeat</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgrp-rpx${suffix}`}</code></td><td>background-repeat: repeat-x</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgrp-rpy${suffix}`}</code></td><td>background-repeat: repeat-y</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgrp-nrp${suffix}`}</code></td><td>background-repeat: no-repeat</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgrp-sp${suffix}`}</code></td><td>background-repeat: space</td></tr>
			<tr><td><code class="_cl-secondary">{`_bgrp-r${suffix}`}</code></td><td>background-repeat: round</td></tr>
		</tbody>
	</table>
</section>

<h6 class="_mgt-7 _mgbt-5">Modifier</h6>
<ModifierSelector on:change={(v) => suffix = v.detail.value } />
