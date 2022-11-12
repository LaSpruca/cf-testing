<script lang="ts">
	import trpcClient from '$lib/trpcClient';

	const dateReq = trpcClient.query('time');
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await dateReq then { date }}
	<h1>The date is {date.toString()}</h1>
{/await}
