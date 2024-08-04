<script lang="ts">
	import type { DualDataWithRef } from "$lib/data"
	export let data: DualDataWithRef[];
</script>


<div class="container">
	{#each data as {content, key, ref} (key)}
		<div bind:this={ref} data-flip-id={key}>
			{content}
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
