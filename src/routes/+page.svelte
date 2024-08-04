<script lang="ts">
	import { gsap } from 'gsap'
	import Flip from 'gsap/dist/Flip'

	import {tick} from "svelte"

	import Dual from "$lib/components/Dual.svelte"
	import Single from "$lib/components/Single.svelte"

	import { DualDataWithRef } from "$lib/data"

	gsap.registerPlugin(Flip)

	let isDualView = false;
	let data = DualDataWithRef;


	async function toggleView() {
		isDualView = !isDualView;

            const initialState = Flip.getState(data.map(({ref}) => ref) as HTMLElement[], {
                props: "fontSize, lineHeight, width"
            })

            console.log(initialState)

            await tick();

            console.log(data.map(({ref}) => ref))

            
            Flip.from(initialState, {
                targets: data.map(({ref}) => ref) as HTMLElement[],
                props: "fontSize, lineHeight, width",
                duration: 10,
                ease: "expo.in"
                // absolute: true
            })
		
	}
</script>

<button class="toggle-button" on:click={toggleView}>
	toggle
</button>

{#key isDualView}
	{#if isDualView}
		<Dual {data} />
	{:else}
		<Single {data} />
	{/if}
{/key}

<style>
	.toggle-button {
		position: fixed;
		z-index: 20;
	}
</style>


