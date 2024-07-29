<script lang="ts">
	import type { LeveledSummary } from "$lib";

    export let leveledSummaries: LeveledSummary[];
</script>

<div class="flex flex-col gap-5">
    {#each leveledSummaries as summary (summary.key)}
        <p>
            {summary.content}
        </p>
    {/each}
</div>
