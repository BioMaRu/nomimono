<script>
	import dedent from 'ts-dedent'
	import Story from '../../../components/Story.svelte'
	import { onMount } from 'svelte'

	onMount(() => {
		document.getElementById('indeterminate').indeterminate = true
		document.getElementById('indeterminate-d').indeterminate = true
	})
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Checkbox</h1>
<p>A checkbox represents an item in a multiple selection list.</p>
<br />
<Story>
	<div class="lo-12 _g-6">
		<div class="nm-checkbox">
			<input id="checkbox1" type="checkbox" />
			<label for="checkbox1">Checkbox 1</label>
		</div>
		<div class="nm-checkbox">
			<input checked id="checkbox2" type="checkbox" />
			<label for="checkbox2">Checkbox checked</label>
		</div>
		<div class="nm-checkbox">
			<input id="indeterminate" type="checkbox" />
			<label for="indeterminate">Indeterminate using DOM state</label>
		</div>
		<div class="nm-checkbox is-indeterminate">
			<input id="indeterminate-c" type="checkbox" />
			<label for="indeterminate-c">Indeterminate using class</label>
		</div>
		<div class="nm-checkbox">
			<input disabled id="checkbox3" type="checkbox" />
			<label for="checkbox3">Disabled</label>
		</div>
		<div class="nm-checkbox">
			<input checked disabled id="checkbox-d" type="checkbox" />
			<label for="checkbox-d">Checkbox checked disabled</label>
		</div>
		<div class="nm-checkbox">
			<input disabled id="indeterminate-d" type="checkbox" />
			<label for="indeterminate-d">Indeterminate disabled</label>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-checkbox">
				<input id="checkbox1" type="checkbox" />
				<label for="checkbox1">Checkbox 1</label>
			</div>
			<div class="nm-checkbox">
				<input checked id="checkbox2" type="checkbox" />
				<label for="checkbox2">Checkbox checked</label>
			</div>
			<div class="nm-checkbox">
				<input id="indeterminate" type="checkbox" />
				<label for="indeterminate">Indeterminate using DOM state</label>
			</div>
			<div class="nm-checkbox is-indeterminate">
				<input id="indeterminate-c" type="checkbox" />
				<label for="indeterminate-c">Indeterminate using class</label>
			</div>
			<div class="nm-checkbox">
				<input disabled id="checkbox3" type="checkbox" />
				<label for="checkbox3">Disabled</label>
			</div>
			<div class="nm-checkbox">
				<input checked disabled id="checkbox-d" type="checkbox" />
				<label for="checkbox-d">Checkbox checked disabled</label>
			</div>
			<div class="nm-checkbox">
				<input disabled id="indeterminate-d" type="checkbox" />
				<label for="indeterminate-d">Indeterminate disabled</label>
			</div>`}
	</div>
</Story>
