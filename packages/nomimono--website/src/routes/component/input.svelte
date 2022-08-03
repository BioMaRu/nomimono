<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Input</h1>
<p>For display field of input</p>
<br />
<Story>
	<div class="nm-field">
		<label for="input">Your name</label>
		<div class="nm-input">
			<input id="input" placeholder="John Doe" type="text" />
		</div>
		<div class="info">This is information</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field">
				<label for="input">Your name</label>
				<div class="nm-input">
					<input id="input" placeholder="John Doe" type="text" />
				</div>
				<div class="info">This is information</div>
			</div>
		`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Variant</h2>
<br />
<Story>
	<div class="lo-12 _g-7">
		<div class="nm-field is-variant-negative">
			<label for="input">Your name</label>
			<div class="nm-input">
				<input id="input2" placeholder="John Doe" type="text" />
			</div>
			<div class="info">This is information</div>
		</div>

		<div class="nm-field is-variant-positive">
			<label for="input">Your name</label>
			<div class="nm-input">
				<input id="input3" placeholder="John Doe" type="text" />
			</div>
			<div class="info">This is information</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field is-variant-negative">
				<label for="input4">Your name</label>
				<div class="nm-input">
					<input id="input4" placeholder="John Doe" type="text" />
				</div>
				<div class="info">This is information</div>
			</div>

			<div class="nm-field is-variant-positive">
				<label for="input4">Your name</label>
				<div class="nm-input">
					<input id="input4" placeholder="John Doe" type="text" />
				</div>
				<div class="info">This is information</div>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Size</h2>
<br />
<Story>
	<div class="lo-12 _g-7">
		<div class="nm-field is-size-small">
			<label for="small">Your name</label>
			<div class="nm-input">
				<input id="small" placeholder="John Doe" type="text" />
			</div>
			<div class="info">This is information</div>
		</div>

		<div class="nm-field">
			<label for="medium">Your name</label>
			<div class="nm-input">
				<input id="medium" placeholder="John Doe" type="text" />
			</div>
			<div class="info">This is information</div>
		</div>

		<div class="nm-field is-size-large">
			<label for="large">Your name</label>
			<div class="nm-input">
				<input id="large" placeholder="John Doe" type="text" />
			</div>
			<div class="info">This is information</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field is-size-small">
				<label for="small">Your name</label>
				<div class="nm-input">
					<input id="small" placeholder="John Doe" type="text" />
				</div>
				<div class="info">This is information</div>
			</div>

			<div class="nm-field">
				<label for="medium">Your name</label>
				<div class="nm-input">
					<input id="medium" placeholder="John Doe" type="text" />
				</div>
				<div class="info">This is information</div>
			</div>

			<div class="nm-field is-size-large">
				<label for="large">Your name</label>
				<div class="nm-input">
					<input id="large" placeholder="John Doe" type="text" />
				</div>
				<div class="info">This is information</div>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Disabled</h2>
<br />
<Story>
	<div class="lo-12 _g-7">
		<div class="nm-field is-disabled">
			<label for="small">Your name</label>
			<div class="nm-input">
				<input disabled id="disabled" placeholder="John Doe" type="text" />
			</div>
			<div class="info">This is information</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field is-disabled">
				<label for="small">Your name</label>
				<div class="nm-input">
					<input id="small" placeholder="John Doe" type="text" disabled />
				</div>
				<div class="info">This is information</div>
			</div>`}
	</div>
</Story>
