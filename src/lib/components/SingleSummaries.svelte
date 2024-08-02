<script lang="ts">
	import type { RefLeveledSummary } from "$lib/utils/RefLeveledSummary";
    export let refLeveledSummaries: RefLeveledSummary[];
</script>

<div class="flex flex-col gap-5">
    {#each refLeveledSummaries as {content, ref, key} (key)}
        <p>
            <span bind:this={ref} data-flip-id={key}>
            {content}
            </span>
        </p>
    {/each}
</div>
