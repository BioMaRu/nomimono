<script>
	import dedent from 'ts-dedent'
	import Story from '../../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Textarea</h1>
<p>For display field of textarea. Usually use with <code class="_cl-accent">field</code></p>
<br />
<Story>
	<div class="nm-field">
		<label for="textarea">Description</label>
		<div class="nm-textarea">
			<textarea id="textarea" placeholder="Enter description" rows="3" />
		</div>
		<div class="info">This is information</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field">
				<label for="textarea">Description</label>
				<div class="nm-textarea">
					<textarea id="textarea" placeholder="Enter description" rows="3" />
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
		<div class="nm-field is-variant-positive">
			<label for="textarea-p">Description</label>
			<div class="nm-textarea">
				<textarea id="textarea-p" placeholder="Enter description" rows="3" />
			</div>
			<div class="info">This is information</div>
		</div>

		<div class="nm-field is-variant-negative">
			<label for="textarea-n">Description</label>
			<div class="nm-textarea">
				<textarea id="textarea-n" placeholder="Enter description" rows="3" />
			</div>
			<div class="info">This is information</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field is-variant-positive">
				<label for="textarea-p">Description</label>
				<div class="nm-textarea">
					<textarea id="textarea-p" placeholder="Enter description" rows="3" />
				</div>
				<div class="info">This is information</div>
			</div>

			<div class="nm-field is-variant-negative">
				<label for="textarea-n">Description</label>
				<div class="nm-textarea">
					<textarea id="textarea-n" placeholder="Enter description" rows="3" />
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
			<label for="textarea-s">Description</label>
			<div class="nm-textarea">
				<textarea id="textarea-s" placeholder="Enter description" rows="3" />
			</div>
			<div class="info">This is information</div>
		</div>

		<div class="nm-field">
			<label for="textarea-m">Description</label>
			<div class="nm-textarea">
				<textarea id="textarea-m" placeholder="Enter description" rows="3" />
			</div>
			<div class="info">This is information</div>
		</div>

		<div class="nm-field is-size-large">
			<label for="textarea-l">Description</label>
			<div class="nm-textarea">
				<textarea id="textarea-l" placeholder="Enter description" rows="3" />
			</div>
			<div class="info">This is information</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field is-size-small">
				<label for="textarea-s">Description</label>
				<div class="nm-textarea">
					<textarea id="textarea-s" placeholder="Enter description" rows="3" />
				</div>
				<div class="info">This is information</div>
			</div>

			<div class="nm-field">
				<label for="textarea-m">Description</label>
				<div class="nm-textarea">
					<textarea id="textarea-m" placeholder="Enter description" rows="3" />
				</div>
				<div class="info">This is information</div>
			</div>

			<div class="nm-field is-size-large">
				<label for="textarea-l">Description</label>
				<div class="nm-textarea">
					<textarea id="textarea-l" placeholder="Enter description" rows="3" />
				</div>
				<div class="info">This is information</div>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Readonly</h2>
<br />
<Story>
	<div class="nm-field">
		<label for="textarea-r">Description</label>
		<div class="nm-textarea">
			<textarea id="textarea-r" readonly rows="3">Hello World!</textarea>
		</div>
		<div class="info">This is information</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field">
				<label for="textarea-r">Description</label>
				<div class="nm-textarea">
					<textarea id="textarea-r" readonly rows="3">Hello World!</textarea>
				</div>
				<div class="info">This is information</div>
			</div>`}
	</div>
</Story>

<h2 class="_fs-7 _mgt-10">Disabled</h2>
<br />
<Story>
	<div class="nm-field">
		<label for="textarea-d">Description</label>
		<div class="nm-textarea">
			<textarea disabled id="textarea-d" rows="3">Hello World!</textarea>
		</div>
		<div class="info">This is information</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-field">
				<label for="textarea-d">Description</label>
				<div class="nm-textarea">
					<textarea id="textarea-d" disabled rows="3">Hello World!</textarea>
				</div>
				<div class="info">This is information</div>
			</div>`}
	</div>
</Story>
