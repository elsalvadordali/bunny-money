<script type="ts">
	import type { kidObj } from '../types';
	import { parent } from '../stores';
	import Edit from './Edit.svelte';
	export let kid: kidObj = null;
	let user;
	parent.subscribe((val) => (user = val));

	let openEdit = false;
</script>

{#if kid}
	{#if openEdit}
		<Edit bind:openEdit {kid} />
	{/if}
	<div
		class="bg-pink rounded-xl border-black border-2 shaded m-2 p-2 mb-4 mt-4 center col shadow-md"
	>

		<div class="w-full row center justify-evenly p-6 border-black border-b-2">
			<h2 class="text-3xl">{kid.name}</h2>
			<button
				class="bg-yellow border-black border-2 rounded-md p-2 pl-6 pr-6 mb-1 shaded"
				on:click={() => (openEdit = !openEdit)}>Edit</button
			>
		</div>
		<div class="w-full grid grid-rows-1 grid-col-2 gap-4">
			<div class="w-full center col p-4 pt-12 pb-8 pr-6 border-black border-r-2">
				<h3 class="text-2xl">${kid.checkingAccount.balance.toFixed(2)}</h3>
				<h6>{kid.checkingAccount.type}</h6>
			</div>
			<div class="w-full center col p-4 pt-12 pb-8">
				<h3 class="text-2xl">${kid.savingsAccount.balance.toFixed(2)}</h3>
				<h6>{kid.savingsAccount.type}</h6>
			</div>
		</div>
	</div>
{/if}
