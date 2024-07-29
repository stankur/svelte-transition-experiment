<script lang="ts">
    import {Checkbox} from "flowbite-svelte";
    import {example, getLevel} from "$lib/index"
	import SingleSummaries from "$lib/components/SingleSummaries.svelte";
	import DualSummaries from "$lib/components/DualSummaries.svelte";

    let checked1 = true
    let checked2 = true
</script>

<div class="flex">
    <Checkbox bind:checked={checked1}>1</Checkbox>
    <Checkbox bind:checked={checked2}>2</Checkbox>
</div>

<div class="w-[50vw]">
{#if checked1 && checked2}
    <DualSummaries leveledSummaries={example} />
{/if}

{#if !checked1 && checked2}
    <SingleSummaries leveledSummaries={getLevel(2)} />
{/if}

{#if checked1 && !checked2}
    <SingleSummaries leveledSummaries={getLevel(1)} />
{/if}

{#if !checked1 && !checked2}
    <p>none</p>
{/if}
</div>


