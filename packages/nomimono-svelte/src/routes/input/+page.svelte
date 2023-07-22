<script lang="ts">
	import { Button, Field, Input } from '$lib/index'

	let form = {
		test1: 'Value from binding',
	}
</script>

<div class="lo-12 _g-7 _pd-10">
	<div class="_dp-f _g-5">
		<Input placeholder="Enter username" />
		<Button on:click={() => alert('click')}>Submit</Button>
	</div>

	<Input placeholder="Disabled" disabled value="I am disabled" />
	<Input placeholder="Readonly" readonly value="I am readonly" />

	<Field label="Username" description="Description" info="this is info in default state">
		<Input id="test1" placeholder="Placeholder text" />
	</Field>

	<Field
		label="Label"
		description="Description"
		info="This is info in negative field state"
		state="negative"
	>
		<Input id="test1" placeholder="Placeholder text" value="This is incorrect" />
	</Field>

	<Field label="Label" state="negative">
		<Input
			id="test1"
			placeholder="Placeholder text"
			value="This is incorrect but disabled"
			disabled
		/>
	</Field>

	<Field label={form.test1}>
		<Input
			id="test1"
			placeholder="Placeholder text"
			bind:value={form.test1}
			on:focus={() => console.log('focus')}
			on:blur={() => console.log('blur')}
		/>
	</Field>
</div>
