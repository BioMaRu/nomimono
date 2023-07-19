<script lang="ts">
	import { Button, Field, Input } from '$lib/index'
	let r = false
</script>

<div class="lo-12 _g-6 _pd-10">
	<div class="_dp-f _g-5">
		<Input placeholder="Enter username" />
		<Button on:click={() => (r = !r)}>Submit</Button>
	</div>

	<Input placeholder="Enter username" disabled />

	<Field label="Username">
		<Input id="test1" placeholder="Enter username" />
	</Field>

	<Field label="First Name" state="negative">
		<Input id="username" placeholder="Enter username" required />
	</Field>
</div>
