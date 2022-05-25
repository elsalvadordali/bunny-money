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
	let message = '';
	let showMore = false;

	parent.subscribe((val) => (user = val));



	async function addToChecking(e: Event) {
		e.preventDefault();
		if (toAdd < 0) {
			message = 'Amount must be higher than 0';
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
					message = 'sent money successfully';
					visible = true;
					showMore = false
				} else {
					message = 'something went wrong. reload and try again';
					visible = true;
				}
				toAdd = 0;
				memo = '';
			}
		} else {
			message = 'Please put a valid number!';
			visible = true;
			toAdd = 0;
			memo = '';
		}
	}
</script>

<div class="w-full">
	<Toast bind:visible={visible} bind:message={message} />
    <div class="w-full h-full pt-6">

	<button
		on:click={() => (showMore = !showMore)}
		class="underline bg-yellow link">
		{showMore ? 'Close X' : 'Add funds'}
	</button>
	{#if showMore}
	<div class="w-full border-black border-2 rounded-xl shaded p-2 mb-4">
		<h2 class='p-2 text-xl'>Add funds</h2>
		<div class="grid grid-cols-3 grid-row-3 gap-4 p-2">
			<input
				class=" p-2 outline-none text-center col-start-1 row-start-1 bg-pink rounded-md shaded big-shade w-88 right"
					id="amount"
					placeholder="20"
					type="number"
					bind:value={toAdd} />

			<label for="amount" class="text-center italic row-start-1 col-start-2 col-end-4 pt-2"
				>(to checking)</label
			>
			<label for="memo" class="col-start-1 row-start-2 text-center pt-2">Memo</label>
			<input
				type="text"
				id="memo"
				bind:value={memo}
				placeholder="gift from grandma"
				class="p-2 outline-none row-start-2 col-start-2 col-end-4 bg-pink rounded-md shaded big-shade"
			/>
			<button
				class="col-start-3 row-start-4 p-2 pr-6 pl-6 rounded-md bg-green border-black shaded big-shaded border-2 mb-1"
				on:click={(e) => addToChecking(e)}>
				add
			</button>
		</div>
	</div>
	{/if}
	</div>
</div>

<style>
	button.link {
        margin-top: 0;
        cursor: pointer;
        display: block;
    }
</style>
