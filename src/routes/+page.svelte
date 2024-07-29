<script lang="ts">
    import {Checkbox} from "flowbite-svelte";
    import {example, getLevel} from "$lib/index"

    let checked1 = false
    let checked2 = false
</script>

<Checkbox bind:checked={checked1}>1</Checkbox>
<Checkbox bind:checked={checked2}>2</Checkbox>

{#if checked1}
    <p>Checkbox 1 is checked</p>
{/if}

{#if checked2}
    <p>Checkbox 2 is checked</p>
{/if}
