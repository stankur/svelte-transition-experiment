<script lang="ts">
	import type { DualDataWithRef } from "$lib/data"
	export let data: DualDataWithRef[];
</script>


<div class="container">
	{#each data as {content, key, ref, sub} (key)}
		<div class="sub-container">
			<div class="floating-sub">
                <p data-flip-id={key} bind:this={ref}>
				{content}
                </p>
			</div>
			<div class="subcontent-container">
				{#each sub as {content, key} (key)}
					<p>
						{content}
					</p>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.sub-container {
		display: flex
	}

	.floating-sub {
		align-self: flex-start;
		position: sticky;
		top: 0;
		font-size: 10px;
		width: 30vw;
		min-width: 30vw;
	}
	
</style>
