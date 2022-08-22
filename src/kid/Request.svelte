<script lang="ts">
	import type { kidObj } from '../types';
	import Toast from '../Toast.svelte';
	import { updateKid } from '../checkAuth';
	import { parent } from '../stores'
	import { convertDate2String, verifyAmount } from '../scripts';
	export let kid: kidObj = null;
	let requestedAmount = 0;

	let memo = '';
	let visible = false;
	let toast = '';
	let showMore = false;

	async function requestMoney() {
		if (requestedAmount <= 0) {
			toast = 'Request must be bigger than 0';
			visible = true;
		}
		if (kid) {
			if (requestedAmount) {
			//verigy amount > 0 and not weird
			//svelte-forms !!!!
				let amount = verifyAmount(requestedAmount.toString());
				if (amount) {
					kid.pending.push({
						date: convertDate2String(new Date()),
						amount,
						memo,
						for: 'parent'
					});
					updateKid(kid);
					//parent.set(kid);
					toast = `Requested $${amount} successfully!`
					visible = true
				} 
			} else {
				toast = 'invalid request!'
				visible = true
				requestedAmount = 0
			}

		}
	}
</script>

<div class="bg-green rounded-xl p-2 ">
	<Toast bind:visible={visible} bind:message={toast} />

	{#if kid}
		<button
			on:click={() => (showMore = !showMore)}
			class={ showMore ? 'link text-4xl pt-0 bg-yellow lh-1' : 'link underline text-4xl bg-yellow'}
			>{showMore ? '×' : 'request money'}</button
		>
		{#if showMore}
			<div class="border-black border-2 rounded-xl p-2">
				<h3 class="text-xl mb-8">Request money</h3>
				<div class="grid grid-cols-3 grid-row-3 gap-4">
					<input
						id="add"
						type="number"
						max="0"
						min="100000"
						bind:value={requestedAmount}
						placeholder="0"
						class="rounded-md bg-yellow p-2 outline-none text-center col-start-1 row-start-1 shaded big-shade w-56"
					/>

					<label for="add" class="text-left pl-4 italic row-start-1 col-start-2 col-end-4 pt-2"
						>(to checking)</label
					>
					<label for="memo" class="col-start-1 pr-4 row-start-2 text-right pt-2">Memo</label>
					<input
						id="memo"
						type="text"
						bind:value={memo}
						placeholder="for movie tickets"
						class="w-56 p-2 pl-4 pr-4 outline-none w-full rounded-md row-start-2 col-start-2 col-span-2 bg-yellow shaded big-shade"
					/>
					<button
						on:click={requestMoney}
						class="bg-yellow border-black border-2 p-2 pr-4 pl-4 rounded-md appearance-none mb-1 shaded big-shade col-start-3 row-start-3"
						>request</button
					>
				</div>
			</div>
		{/if}
	{/if}
</div>

<style>

	button.link {
        margin-top: 0;
        cursor: pointer;
        display: block;
    }
</style>
