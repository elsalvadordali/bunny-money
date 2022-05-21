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
		class="modal fade fixed top-0 left-0 w-full bg-black/75 h-screen outline-none overflow-x-hidden overflow-y-auto flex justify-center items-center "
		id="exampleModalCenter"
		tabindex="-1"
		aria-labelledby="exampleModalCenterTitle"
		aria-modal="true"
		role="dialog"
	>
		<div
			class="w-11/12 bg-pink rounded-xl p-4 flex flex-col items-center shadow-sm shaded absolute "
			use:clickOutside
			on:click_outside={() => (boxOpen = false)}
		>
			<h2 class="text-2xl m-4 ">{message}</h2>

			<div class="m-4 p-4 flex justify-evenly items-center">
				<button
					on:click={accept}
					class="bg-green border-black border-2 shaded p-2 pl-4 pr-4 mr-4 rounded-md mb-1"
					>OK</button
				>
				or
				<button
					on:click={() => (boxOpen = false)}
					class="bg-green border-black border-2 shaded p-2 pl-4 pr-4 rounded-md mb-1 ml-4"
					>Cancel</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
