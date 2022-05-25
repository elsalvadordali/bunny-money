<script lang="ts">
	function clickOutside(node: any) {
		const handleClick = (event: Event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	export let boxOpen = false;
	export let message = '';
	export let isConfirmed = false;
	function accept() {
		isConfirmed = true;
		boxOpen = false;
	}
</script>

{#if boxOpen}
	
		<div
			class="sticky w-1112 bg-pink rounded-xl p-2 flex flex-col items-center border-black border-2 shaded"
			use:clickOutside
			on:click_outside={() => (boxOpen = false)}
		>
			<h2 class="text-2xl m-4 ">{message}</h2>

			<div class="m-4 p-4 flex justify-evenly items-center">
				<button
					on:click={accept}
					class="bg-green border-black border-2 shaded p-2 pl-6 pr-6 mr-4 rounded-md mb-1"
					>OK</button
				>
				<p class='middle'>or</p>
				<button
					on:click={() => (boxOpen = false)}
					class="bg-green border-black border-2 shaded p-2 pl-4 pr-4 rounded-md mb-1 ml-4"
					>Cancel</button
				>
			</div>
		</div>
	
{/if}

<style>
	.sticky {
	position: fixed;
  	left: 50%;
  	top: 50%;
  	transform: translate(-50%, -50%);
	z-index: 500;
}

</style>
