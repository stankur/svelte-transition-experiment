<script lang="ts">
	import type { LeveledSummary } from "$lib";
	import SingleSummaries from "./SingleSummaries.svelte";

    export let leveledSummaries: LeveledSummary[];
</script>

{#each leveledSummaries as summ (summ.key)}
    <div class="flex gap-2">
        <div class="w-[20vw] sticky self-start top-0 text-xs">
            {summ.content}
        </div>
        <SingleSummaries leveledSummaries={summ.source} />
    </div>
{/each}
