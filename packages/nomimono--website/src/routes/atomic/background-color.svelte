<script lang="ts">
	import { onMount } from 'svelte';

	let suffix = ''

	onMount(async () => {
		const items = document.querySelectorAll('#background-color-table tbody tr td:last-child')
		const ct = Array.from(document.querySelectorAll('#background-color-table tbody tr .computed'))

		Array.from(items).forEach((it, idx) => {
			const a = window.getComputedStyle(it)
			ct[idx].innerText = a.backgroundColor
		})
	});
</script>

<h1 class="_fs-8">Background color</h1>

<section class="nm-table-container _mgt-8 _ovf-at" id="background-color-table" style="max-height: 480px;">
	<table class="nm-table is-variant-compact">
		<thead>
		<tr>
			<th>Class name</th>
			<th>Properties</th>
			<th class="_w-12"></th>
		</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>{`_bgcl-primary${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-primary))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-primary _bdbtcl-primary"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-primary-active${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-primary-active))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-primary-active _bdbtcl-primary-active"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-primary-content${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-primary-content))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-primary-content _bdbtcl-primary-content"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-base-100${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-base-100))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-base-100 _bdbtcl-base-100"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-base-200${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-base-200))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-base-200 _bdbtcl-base-200"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-base-300${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-base-300))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-base-300 _bdbtcl-base-300"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-base-400${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-base-400))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-base-400 _bdbtcl-base-400"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-content${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-content))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-content _bdbtcl-content"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-content-inv${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-content-inv))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-content-inv _bdbtcl-content-inv"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-positive${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-positive))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-positive _bdbtcl-positive"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-positive-content${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-positive-content))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-positive-content _bdbtcl-positive-content"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-negative${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-negative))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-negative _bdbtcl-negative"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-negative-content${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-negative-content))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-negative-content _bdbtcl-negative-content"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-warning${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-warning))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-warning _bdbtcl-warning"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-warning-content${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-warning-content))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-warning-content _bdbtcl-warning-content"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-info${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-info))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-info _bdbtcl-info"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-info-content${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-info-content))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-info-content _bdbtcl-info-content"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-black${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-black))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-black _bdbtcl-black"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-white${suffix}`}</code></td>
				<td>
					<div>background-color: hsl(var(--hsl-white))</div>
					<div class="_mgt-3 _cl-opacity-60 _cl-content"> = <span class="computed"></span></div>
				</td>
				<td class="_pd-0 _pst-rlt _bgcl-white _bdbtcl-white"></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-tpr${suffix}`}</code></td>
				<td>
					<div>background-color: transparent</div>
				</td>
				<td></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-crcl${suffix}`}</code></td>
				<td>
					<div>background-color: currentColor</div>
				</td>
				<td></td>
			</tr>
			<tr>
				<td><code>{`_bgcl-ihr${suffix}`}</code></td>
				<td>
					<div>background-color: inherit</div>
				</td>
				<td></td>
			</tr>
		</tbody>
	</table>
</section>

<section class="lo-12 _g-4 _mgt-8">
	<div class="nm-radio">
		<input checked id="b" name="suffix" on:change={() => suffix = ''} type="radio">
		<label for="b">Default</label>
	</div>
	<div class="nm-radio">
		<input id="sm" name="suffix" on:change={() => suffix = ':sm'} type="radio">
		<label for="sm">min-width: 768px; small</label>
	</div>
	<div class="nm-radio">
		<input id="md" name="suffix" on:change={() => suffix = ':md'} type="radio">
		<label for="md">min-width: 1024px; medium</label>
	</div>
	<div class="nm-radio">
		<input id="lg" name="suffix" on:change={() => suffix = ':lg'} type="radio">
		<label for="lg">min-width: 1280px; large</label>
	</div>
	<div class="nm-radio">
		<input id="hover" name="suffix" on:change={() => suffix = ':hover'} type="radio">
		<label for="hover">hover</label>
	</div>
</section>
