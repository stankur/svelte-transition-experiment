<script lang="ts">
	import { gsap } from 'gsap'
	import Flip from 'gsap/dist/Flip'
    import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

	import {tick} from "svelte"

	import Dual from "$lib/components/Dual.svelte"
	import Single from "$lib/components/Single.svelte"

	import { DualDataWithRef } from "$lib/data"

	gsap.registerPlugin(Flip)
    gsap.registerPlugin(ScrollToPlugin)


	let isDualView = false;
	let data = DualDataWithRef;


	async function toggleView() {
		isDualView = !isDualView;

            const initialState = Flip.getState(data.map(({ref}) => ref) as HTMLElement[], {
                props: "fontSize, lineHeight"
            })

            const before = document.documentElement.scrollTop

            const topIndex = data.findIndex(({ref}) => (ref as HTMLElement).getBoundingClientRect().top >= 0)
            const offsetY = (data[topIndex].ref as HTMLElement).getBoundingClientRect().top


            await tick();

            console.log(data.map(({ref}) => ref))


            Flip.from(initialState, {
                targets: data.map(({ref}) => ref) as HTMLElement[],
                props: "fontSize, lineHeight",
                duration: 2,
                ease: "expo.in",
                absolute: true,
                onStart: () => {
                    gsap.set(document.documentElement, {scrollTop: before})
                },
                onUpdate: () => {
                    gsap.set(window, { scrollTo: { y: data[topIndex].ref as HTMLElement, offsetY: offsetY } });


                }
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


