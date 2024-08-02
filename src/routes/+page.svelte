<script lang="ts">
    import {Checkbox} from "flowbite-svelte";
    import {example, getLevel, type LeveledSummary} from "$lib/index"
	import SingleSummaries from "$lib/components/SingleSummaries.svelte";
	import DualSummaries from "$lib/components/DualSummaries.svelte";
    import type{ RefLeveledSummary} from "$lib/utils/RefLeveledSummary"
    import {onMount, tick} from "svelte";
    import { gsap } from "gsap";
    import { Flip } from "gsap/dist/Flip";


    gsap.registerPlugin(Flip);


    let checked1 = false
    let checked2 = false

    let internalRef: (summ: LeveledSummary[]) =>RefLeveledSummary[] = () => []

    let refLeveledSummaries: RefLeveledSummary[] = internalRef(example)
    let document: Document | null = null


    $: {
        if (document) {
            if (checked1 && checked2) {
                refLeveledSummaries = internalRef(example)
            } else if (!checked1 && checked2) {
                refLeveledSummaries = internalRef(getLevel(2))
            } else if (checked1 && !checked2) {
                refLeveledSummaries = internalRef(getLevel(1))
            } else {
                refLeveledSummaries = []
            }

        }
    }

    onMount(async () => {
        document = window.document
        internalRef = (await import("$lib/utils/func")).ref
    })

    async function handleClick() {
        console.log("--------------------------")
        console.log(checked2)

        checked2 = !checked2;

        console.log(refLeveledSummaries)

        const initialState = Flip.getState(refLeveledSummaries.map(({ref}) => ref))

        console.log("initial: ")
        console.log(refLeveledSummaries[1].ref)

        await tick()
        console.log(refLeveledSummaries)

        Flip.from(initialState, {
            targets: refLeveledSummaries.map(({ref}) => ref),
            absolute: true,
            props: "fontSize, width, Height"
        })

        console.log("final: ")
        console.log(refLeveledSummaries[1].ref)

        console.log(checked2)
        console.log("--------------------------")
    }


</script>

<div class="flex">
    <Checkbox bind:checked={checked1}>1</Checkbox>
    <Checkbox bind:checked={checked2} on:click={handleClick}>2</Checkbox>
</div>

<div class="w-[50vw]">
{#if checked1 && checked2}
    <DualSummaries {refLeveledSummaries} />
{/if}

{#if !checked1 && checked2}
    <SingleSummaries {refLeveledSummaries} />
{/if}

{#if checked1 && !checked2}
    <SingleSummaries {refLeveledSummaries} />
{/if}

{#if !checked1 && !checked2}
    <p>none</p>
{/if}
</div>


