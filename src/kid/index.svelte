<script lang="ts">
	import type { kidObj } from '../types';
	import Pay from './Pay.svelte';
	import Pending from './Pending.svelte';
	import Transactions from './Transactions.svelte';
	import Logout from '../login/Logout.svelte';
	import { parent } from '../stores';
	import { onMount } from 'svelte';
	import { calcAllowance } from '../scripts';
	import { fly } from 'svelte/transition';

	let kid: kidObj = null;
	parent.subscribe((val) => {
		if (val) {
			kid = val;
		}
	});

	onMount(() => {
			if (kid) {
				let newTransactions = calcAllowance(kid);
				if (kid.checkingAccount.transactions.length != newTransactions.length) {
					kid.checkingAccount.transactions = newTransactions;
					while (kid.checkingAccount.balance < newTransactions[0].amount) {
						kid.checkingAccount.balance += 0.01;
					}
					//updateKids(newTransactions);
				}
			}
	});
</script>

<div class="bg-black p-4 pt-12 center col">
	<div class="bg-yellow text-black rounded-full w-60 h-60 center col mt-8 mb-8">
		<h2 class="text-center mb-2 italic">checking account</h2>
		{#if kid}
			<h3 class="text-4xl text-center" in:fly={{ y: -42 }}>
				${kid.checkingAccount.balance.toFixed(2)}
			</h3>
		{/if}
	</div>
	<h2 class="m-4 inline text-xl text-white">Hello <span class="italic inline text-xl">{kid && kid.name}!</span></h2>
	<div class="w-56">
		<Pending {kid} />

		<Pay {kid} />
		<Transactions {kid} />
		<div class="m-4 bg-pink border-green border-2 green-shaded rounded-xl p-8">
			<h4 class="text-center italic mb-4">allowance</h4>
			<h3 class="text-center text-3xl">
				$ {kid && kid.checkingAccount.allowance} per {kid && kid.checkingAccount.frequency}
			</h3>
		</div>
		<div class="center col">
		<div
			class="bg-green text-black rounded-full w-60 h-60 center col m-auto mt-8 mb-8"
		>
			<h2 class="mb-2 italic">savings account</h2>
			<h3 class="text-4xl text-center ">
				${(kid && kid.savingsAccount.balance.toFixed(2)) || 0.0}
			</h3>
		</div>
		<div class="w-full center h-36 mt-8 bg-pink rounded-xl border-green border-2 green-shaded">
			<Logout />
		</div>
	</div>
	</div>
</div>
