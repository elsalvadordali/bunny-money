<script lang="ts">
	import { fly } from 'svelte/transition';
	export let message = 'default';
	export let visible = false;
	
	$: {
		if (visible) {
			setTimeout(() => {
				visible = false;
				message = ''
			}, 5000);
		}
	}
</script>

{#if visible}
	<div
		class="sticky m-4 p-6 rounded-xl m-2 bg-pink center border-black border-2 shaded"
		transition:fly={{ x: -300, duration: 700 }}>
		<p class="m-4">{message}</p>
		<button on:click={() => (visible = false)} class="text-black bg-yellow rounded-md pl-6 pr-6 mb-1 border-black border-2 shaded big-shade">X</button>
	</div>
{/if}


<style>
.sticky {
	position: fixed;
  	left: 1%;
  	bottom: 1%;
	z-index: 500;
}
</style>