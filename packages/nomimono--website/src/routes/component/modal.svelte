<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Modal</h1>
<p>
	A modal displays content that temporarily blocks interactions with the main view of a site. For
	active either
</p>
<ul class="lo-12 _g-3 _mgt-5">
	<li>Use label and checkbox technic hold active state</li>
	<li>Use <code class="_cl-accent">.nm-modal.is-active</code></li>
</ul>
<br />
<Story>
	<label class="nm-button" for="test-modal1">Open Modal</label>
	<input class="nm-modal-state" id="test-modal1" type="checkbox" />
	<div class="nm-modal">
		<div class="nm-modal-panel">
			<label class="nm-modal-close" for="test-modal1">✕</label>
			<h3>Hi, mom</h3>
			<div>
				<label class="nm-button" for="test-modal1">Close modal</label>
			</div>
		</div>
	</div>

	<div slot="code">
		{dedent`
			<label class="nm-button" for="test-modal1">Open Modal</label>
			<input class="nm-modal-state" id="test-modal1" type="checkbox" />
			<div class="nm-modal">
				<div class="nm-modal-panel">
					<label class="nm-modal-close" for="test-modal1">✕</label>
					<h3>Hi, mom</h3>
					<div>
						<label class="nm-button" for="test-modal1">Close modal</label>
					</div>
				</div>
			</div>
		`}
	</div>
</Story>
