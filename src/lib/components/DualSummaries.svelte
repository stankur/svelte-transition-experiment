<script lang="ts">
	import type { RefLeveledSummary } from "$lib/utils/RefLeveledSummary";
	import SingleSummaries from "./SingleSummaries.svelte";
    export let refLeveledSummaries: RefLeveledSummary[];
</script>

{#each refLeveledSummaries as {key, content, ref, source} (key)}
    <div class="flex gap-3">
        <div class="w-[20vw] min-w-[20vw]">
            <div class="w-[20vw] min-w-[20vw] sticky self-start top-0 text-xs" bind:this={ref} data-flip-id={key}>
                {content}
            </div>
        </div>
        <SingleSummaries refLeveledSummaries={source} />
    </div>
{/each}
