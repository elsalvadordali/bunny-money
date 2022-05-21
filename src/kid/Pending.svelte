<script lang="ts" type="module">
	import type { kidObj, transactionType } from '../types';
	import Confirm from '../Confirm.svelte';
	import Toast from '../Toast.svelte';
	import { parent } from '../stores';
	import { updateKid } from '../checkAuth';

	export let kid: kidObj;

	let message = '';
	let boxOpen = false;
	let isConfirmed = false;
	let currentIndex = -1;
	let toast = '';
	let visible = false;

	parent.subscribe((val) => {
		if (val) kid = val;
	});

	function acceptTransaction(i: number) {
		message = `Pay $ ${kid?.pending[i].amount} for ${kid && kid.pending[i].memo}?`;
		boxOpen = true;
		currentIndex = i;
		//BUT THE BOXES MOVE GODDAMN IT
	}

	function deleteTransaction(i: number) {
		if (kid) {
			let res = kid.pending.filter((obj, index) => index != i);
			toast = 'request denied successfully';
			parent.set({ ...kid, pending: [...res] });
			updateKid(kid, kid.uid);
			visible = true;
		} //no kid so error
	}
	function updateAll() {
		if (kid) {
			let toApprove: transactionType | undefined = kid.pending.find(
				(kiddo, i) => i == currentIndex
			);
			kid.pending = kid.pending.filter((kiddo, i) => i != currentIndex);

			if (toApprove) {
				let newTransaction: transactionType = {
					...toApprove,
					currentBalance: kid.checkingAccount.balance - toApprove.amount
				};
				kid.checkingAccount.transactions = [newTransaction, ...kid.checkingAccount.transactions];
				kid.checkingAccount.balance = newTransaction.currentBalance || kid.checkingAccount.balance;
				toast = 'payment sent!';
				updateKid(kid, kid.uid);
				visible = true;
				return parent.set(kid);
			}
			toast = 'Something went wrong. Refresh and try again';
			visible = true;
		}
	}
	$: {
		if (isConfirmed) updateAll();
	}

	let transactions = kid?.pending.filter((pend) => pend.for !== 'parent');
</script>

<div>
	<Toast message={toast} {visible} />
	<Confirm bind:boxOpen {message} bind:isConfirmed />

	{#if transactions && transactions.length > 0}
		<div class="bg-yellow text-black rounded-xl p-4 m-4">
			<h2 class="text-xl italic m-4">Pending transactions</h2>
			{#each transactions as action, i (i)}
				<div class="border-black border-b-2 grid grid-col-6 grid-row-3 p-4">
					<p class="row-start-1 col-start-1 col-span-2 mb-4">$ {action.amount.toFixed(2)}</p>

					<p class="row-start-1 col-start-3 col-span-2 mb-4">{action.date}</p>
					<p class="row-start-2 col-start-1 col-span-4 mb-4 italic">{action.memo}</p>
					<button
						on:click={() => acceptTransaction(i)}
						class="bg-green text-black p-2 pr-4 pl-4 mr-2 rounded-md row-start-3 col-start-1 col-span-2 border-black border-2 mb-1 shaded"
					>
						Accept
					</button>
					<button
						on:click={() => deleteTransaction(i)}
						class="bg-pink text-black p-2 pr-4 pl-4 ml- rounded-md row-start-3 col-start-3 col-span-2 border-black border-2 mb-1 shaded"
					>
						Deny
					</button>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	button:hover,
	button:focus,
	button:active {
		margin-top: 0.25em;
		margin-bottom: 0;
		box-shadow: none;
	}
</style>
