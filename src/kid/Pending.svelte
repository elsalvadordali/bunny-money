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
		message = `Pay $${Math.abs(kid?.pending[i].amount)} ${kid && kid.pending[i].memo}?`;
		boxOpen = true;
		currentIndex = i;
		//BUT THE BOXES MOVE GODDAMN IT
	}

	function deleteTransaction(i: number) {
		console.log(i)
		if (kid) {
			let res = kid.pending.filter((obj, index) => index != i);
			toast = 'request denied successfully';
			parent.set({ ...kid, pending: res });
			updateKid({...kid, pending: res});
			visible = true;
		} //no kid so error
	}
	function updateAll() {
		if (kid) {
			let toApprove: transactionType | undefined = kid.pending.find((kiddo, i) => i == currentIndex);
			let res = kid.pending.filter((kiddo, i) => i != currentIndex);
			console.log(res, toApprove)
			if (toApprove) {
				let newTransaction: transactionType = {
					...toApprove,
					currentBalance: kid.checkingAccount.balance + toApprove.amount
				};
				kid.checkingAccount.transactions = [newTransaction, ...kid.checkingAccount.transactions];
				kid.checkingAccount.balance = newTransaction.currentBalance || kid.checkingAccount.balance;
				toast = 'payment sent!';
				let obj: kidObj = {...kid, pending: res}
				updateKid(obj);
				visible = true;
				parent.set(obj);
				parent.subscribe(val => kid = val)
				obj = null
				toApprove = undefined
				console.log('updated??', kid, obj, kid == obj, toApprove)
				isConfirmed = false
			} else {
				toast = 'Something went wrong. Refresh and try again';
				visible = true;
			}
		}
	}
	$: {
		if (isConfirmed) updateAll();
	}

</script>

<div>
	<Toast bind:visible={visible} bind:message={toast} />
	<Confirm bind:boxOpen {message} bind:isConfirmed />
	
	{#if kid.pending && kid.pending.length > 0}
		<div class="bg-green rounded-xl p-2 mb-4">
			<h2 class="text-xl m-2">Pending requests</h2>
			{#each kid.pending as action, i (i)}
				{#if action.for != 'parent'}
				<div class="border-black border-b-2 grid grid-col-2 grid-row-3 pt-4 pb-4">
					<p class="row-start-1 col-start-1 mb-2 bold">$ {Math.abs(action.amount).toFixed(2)}</p>

					<p class="row-start-1 col-start-2 mb-2">{action.date}</p>
					<p class="row-start-2 col-start-1 col-end-3 mb-2 italic">{action.memo}</p>
					<button
						on:click={() => acceptTransaction(i)}
						class="bg-yellow p-2 pr-4 pl-4 mr-2 rounded-md row-start-3 col-start-1 border-black border-2 mb-1 shaded"
					>
						Accept
					</button>
					<button
						on:click={() => deleteTransaction(i)}
						class="bg-pink p-2 pr-4 pl-4 ml-2 rounded-md row-start-3 col-start-2 border-black border-2 mb-1 shaded"
					>
						Deny
					</button>
				</div>
				{/if}
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
