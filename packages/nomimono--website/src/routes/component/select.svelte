<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Select</h1>
<p>Select is used to pick a value from a list of options.</p>
<br />
<Story>
	<div class="lo-12 _g-6">
		<div class="nm-field">
			<label for="select1">Please select</label>
			<div class="nm-select">
				<select id="select1">
					<option value="">Hi, mum</option>
					<option value="">Hi, dad</option>
				</select>
			</div>
			<div class="info">This is info</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field">
				<label for="select1">Please select</label>
				<div class="nm-select">
					<select id="select1">
						<option value="">Hi, mum</option>
						<option value="">Hi, dad</option>
					</select>
				</div>
				<div class="info">This is info</div>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Variant</h2>
<br />
<Story>
	<div class="lo-12 _g-7">
		<div class="nm-field is-variant-positive">
			<label for="select2">Please select</label>
			<div class="nm-select">
				<select id="select2">
					<option value="">Hi, mum</option>
					<option value="">Hi, dad</option>
				</select>
			</div>
			<div class="info">This is info</div>
		</div>

		<div class="nm-field is-variant-negative">
			<label for="select3">Please select</label>
			<div class="nm-select">
				<select id="select3">
					<option value="">Hi, mum</option>
					<option value="">Hi, dad</option>
				</select>
			</div>
			<div class="info">This is info</div>
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
			<label for="small">Please select</label>
			<div class="nm-select">
				<select id="small">
					<option value="">Hi, mum</option>
					<option value="">Hi, dad</option>
				</select>
			</div>
			<div class="info">This is info</div>
		</div>

		<div class="nm-field is-size-medium">
			<label for="small">Please select</label>
			<div class="nm-select">
				<select id="medium">
					<option value="">Hi, mum</option>
					<option value="">Hi, dad</option>
				</select>
			</div>
			<div class="info">This is info</div>
		</div>

		<div class="nm-field is-size-large">
			<label for="large">Please select</label>
			<div class="nm-select">
				<select id="large">
					<option value="">Hi, mum</option>
					<option value="">Hi, dad</option>
				</select>
			</div>
			<div class="info">This is info</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field is-size-small">
				<label for="small">Please select</label>
				<div class="nm-select">
					<select id="small">
						<option value="">Hi, mum</option>
						<option value="">Hi, dad</option>
					</select>
				</div>
				<div class="info">This is info</div>
			</div>

			<div class="nm-field is-size-medium">
				<label for="medium">Please select</label>
				<div class="nm-select">
					<select id="medium">
						<option value="">Hi, mum</option>
						<option value="">Hi, dad</option>
					</select>
				</div>
				<div class="info">This is info</div>
			</div>

			<div class="nm-field is-size-large">
				<label for="large">Please select</label>
				<div class="nm-select">
					<select id="large">
						<option value="">Hi, mum</option>
						<option value="">Hi, dad</option>
					</select>
				</div>
				<div class="info">This is info</div>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Disabled</h2>
<br />
<Story>
	<div class="lo-12 _g-7">
		<div class="nm-field is-disabled">
			<label for="disabled">Please select</label>
			<div class="nm-select">
				<select disabled id="disabled">
					<option value="">Hi, mum</option>
					<option value="">Hi, dad</option>
				</select>
			</div>
			<div class="info">This is info</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field is-disabled">
			<label for="disabled">Please select</label>
			<div class="nm-select">
				<select id="disabled" disabled>
					<option value="">Hi, mum</option>
					<option value="">Hi, dad</option>
				</select>
			</div>
			<div class="info">This is info</div>
		</div>`}
	</div>
</Story>
