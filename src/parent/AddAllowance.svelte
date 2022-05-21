<script lang="ts">
	import type { kidObj, userType } from '../types';

	import Toast from '../Toast.svelte';
	import { parent } from '../stores';
	import { verifyAmount, convertDate2String, reconcileArr } from '../scripts';
	import { updateKid } from '../checkAuth';

	export let name = 'Eda';
	let toAdd = 0;
	let memo = '';
	let user: userType;
	let visible = false;
	let toast = '';
	let showMore = false;

	parent.subscribe((val) => (user = val));

	async function addToChecking(e: Event) {
		e.preventDefault();
		if (toAdd < 0) {
			toast = 'Amount must be higher than 0';
			visible = true;
			toAdd = 0;
			return;
		}
		let kid: kidObj | undefined = null;

		if (user) {
			kid = user.kids.find((arrKid: kidObj) => {
				if (arrKid && arrKid.name == name) return arrKid;
			});
		}
		if (toAdd) {
			let amount = verifyAmount(toAdd.toString());
			if (amount && kid) {
				let newTransaction = {
					amount: amount,
					currentBalance: kid.checkingAccount.balance + amount, //maybe not parseLater
					date: convertDate2String(new Date()),
					memo: memo
				};
				kid.checkingAccount.transactions = [newTransaction, ...kid.checkingAccount.transactions];
				kid.checkingAccount.balance = kid.checkingAccount.balance + amount;
				if (user) {
					updateKid(kid, user.uid, user.kids);
					let kids = reconcileArr(user.kids, kid);
					parent.updateKids(kids);
					toast = 'sent money successfully';
					visible = true;
				} else {
					toast = 'something went wrong. reload and try again';
					visible = true;
				}
				toAdd = 0;
				memo = '';
			}
		} else {
			toast = 'Please put a valid number!';
			visible = true;
			toAdd = 0;
			memo = '';
		}
	}
</script>

<div class="w-full pt-4">
	<Toast {visible} message={toast} />

	<button
		on:click={() => (showMore = !showMore)}
		class="border-black border-2 rounded-md p-2 pl-4 pr-4 shaded mb-1 bg-pink"
		>{showMore ? 'close' : 'Add funds'}</button
	>
	{#if showMore}
		<div
			class="grid grid-cols-3 grid-rows-4 gap-4 p-8 bg-black border-green border-2 text-white rounded-xl green-shaded mt-4"
		>
			<h3 class="text-xl row-start-1 col-start-1 col-span-3">Add funds</h3>

			<input
				class="col-start-1 w-23 w-full row-start-2 text-center outline-none text-black bg-pink rounded-md green-shaded big-green"
				id="amount"
				placeholder="20"
				type="number"
				bind:value={toAdd}
			/>
			<label for="amount" class="col-start-2 col-span-2 row-start-2 pt-2">(to checking)</label>
			<label for="memo" class="col-start-1 row-start-3 text-right pt-2">memo</label>
			<input
				class="col-start-2 col-span-2 row-start-3 w-56 text-center outline-none bg-green rounded-md pink-shade big-pink text-black"
				id="memo"
				bind:value={memo}
				placeholder="gift from grandma"
			/>
			<button
				class="col-start-3 row-start-4 p-2 pr-6 pl-6 rounded-md bg-yellow text-black border-pink green-shaded big-shaded border-2 mb-1"
				on:click={(e) => addToChecking(e)}>add</button
			>
		</div>
	{/if}
	{#if false}
		<div
			class="w-full bg-yellow p-8 rounded-xl shaded grid grid-col-3 grid-row-3 gap-4 mt-4 mb-4"
		>
			<input
				id="add"
				type="number"
				min="0"
				max="100000"
				bind:value={toAdd}
				placeholder="0"
				class="pretty bg-pink rounded-none border-black border-b-2 p-2 outline-none text-center col-start-1 row-start-1 w-23"
			/>

			<label for="add" class="text-center italic row-start-1 col-start-2 col-span-2 pt-2 text-right"
				>(to checking)</label
			>
			<label for="memo" class="col-start-1 row-start-2 text-center pt-2">Memo</label>
			<input
				id="memo"
				type="text"
				bind:value={memo}
				placeholder="from Grandma"
				class="italic bg-green p-2 pl-4 pr-4 outline-none w-full  row-start-2 col-start-2 col-end-4"
			/>
			<button
				on:click={addToChecking}
				class="bg-green text-white border-green border-2 p-2 pl-4 pr-4 rounded-md appearance-none button-ani col-start-3 row-start-3"
				>add</button
			>
		</div>
	{/if}
</div>

<style>
	input[type='number']::before {
		content: '$$$$$$$$$';
		position: absolute;
		top: 0;
		left: 0;
		z-index: 500;
	}
</style>
