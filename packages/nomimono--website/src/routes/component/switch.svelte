<script>
	import dedent from 'ts-dedent'
	import Story from '../../components/Story.svelte'
</script>

<h1 class="_fs-11 _fw-800 _mgbt-4">Switch</h1>
<p>Display switch.</p>
<br />

<Story>
	<div class="_dp-f _g-6">
		<div class="nm-switch">
			<input id="sw1" type="checkbox" />
		</div>
		<div class="nm-switch">
			<input id="sw2" type="checkbox" />
		</div>
		<div class="nm-switch">
			<input disabled id="sw3" type="checkbox" />
		</div>
	</div>

	<div slot="code">
		{dedent`
			<div class="nm-switch">
				<input id="sw1" type="checkbox" />
			</div>
			<div class="nm-switch">
				<input id="sw2" type="checkbox" />
			</div>
			<div class="nm-switch">
				<input disabled id="sw3" type="checkbox" />
			</div>`}
	</div>
</Story>
