<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Radio</h1>
<p>A radio represents an item in a single selection list.</p>
<br />
<Story>
	<div class="lo-12 _g-6">
		<div class="nm-radio">
			<input id="radio1" name="radio" type="radio" />
			<label for="radio1">Radio 1</label>
		</div>
		<div class="nm-radio">
			<input id="radio2" name="radio" type="radio" />
			<label for="radio2">Radio 2</label>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-radio">
				<input id="radio1" name="radio" type="radio" />
				<label for="radio1">Radio 1</label>
			</div>
			<div class="nm-radio">
				<input id="radio2" name="radio" type="radio" />
				<label for="radio2">Radio 2</label>
			</div>`}
	</div>
</Story>
