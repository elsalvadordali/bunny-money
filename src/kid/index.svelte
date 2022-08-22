<script lang="ts">
	import type { kidObj } from '../types';
	import Request from './Request.svelte';
	import Pending from './Pending.svelte';
	import Transactions from './Transactions.svelte';
	import Transfer from './Transfer.svelte'
	import Logout from '../login/Logout.svelte';
	import { parent } from '../stores';
	import { onMount } from 'svelte';
	import { calcAllowance, calcInterest } from '../scripts';
	import { fly } from 'svelte/transition';
	import { signOut } from 'firebase/auth';
	import { auth } from '../checkAuth'

	let kid: kidObj = null;
	parent.subscribe((val) => {
		if (val) {
			kid = val;
		}
	});
	onMount(() => {
			if (kid) {
				calcAllowance(kid);
				calcInterest(kid)
			} else {
				signOut(auth)
			}
	});
	let checking = 0.00
	let savings = 0.00
	const getMoney = setInterval(() => {
		if (kid.checkingAccount.balance > 1000 && checking < kid.checkingAccount.balance) checking += 667.38 
		else if (kid.checkingAccount.balance > 100 && checking < kid.checkingAccount.balance) checking += 50.65
		else if (checking < kid.checkingAccount.balance) checking += .28
		else {
			checking = kid.checkingAccount.balance
			clearInterval(getMoney)
		}
	}, 1)
	const getSavings = setInterval(() => {
		console.log('hello')
		if (savings === kid.savingsAccount.balance) clearInterval(getSavings)
		else if (savings > kid.savingsAccount.balance) savings = kid.savingsAccount.balance
		else if (kid.savingsAccount.balance > 10000) savings += 1015.65
		else if (kid.savingsAccount.balance > 1000 ) savings += 167.38 
		else if (kid.savingsAccount.balance > 100) savings += 74.65
		else if (savings < kid.savingsAccount.balance) savings += 1.28
		else {
			checking = kid.savingsAccount.balance
			clearInterval(getSavings)
		}
	}, 100)
</script>
<div class="w-full bg-black center col pt-4 pb-4">
	<div class="bg-pink p-2 pt-12 center col w-full rounded-xl">
		<h2 class="m-4 inline text-2xl">Hello <span class="italic inline text-2xl">{kid && kid.name}!</span></h2>
		<div class="{checking < 0 ? 'bg-pink' : 'bg-yellow'} text-black rounded-full w-60 h-60 center col mt-8 mb-8">
			<h2 class="text-center mb-2 italic">checking account</h2>
			{#if checking}
				<h3 class="text-4xl lh-4 text-center" in:fly="{{y: -50}}">
					${checking.toFixed(2)}
				</h3>
			{/if}
		</div>
		<div class="bg-green rounded-xl w-full mb-4 mt-4 pb-4 pt-4">
			<h4 class="text-center italic p-2">allowance</h4>
			<h3 class="text-center text-3xl">
				$ {kid && kid.checkingAccount.allowance} per {kid && kid.checkingAccount.frequency}
			</h3>
		</div>
		<div class="w-full mb-4">
			<Pending {kid} />

			<Request {kid} />
			<Transactions accountType='checking' transactions={kid.checkingAccount.transactions} />
			<Transfer bind:kid={kid} />
			
			<div class="center col">
			<div
				class="bg-green rounded-full w-60 h-60 center col m-auto mt-8 mb-8"
			>
				<h2 class="mb-2 italic">savings account</h2>
				<h3 class="text-4xl lh-4 text-center ">
					${savings.toFixed(2) || 0.0}
				</h3>
			</div>
			<Transactions accountType='savings' transactions={kid.savingsAccount.transactions} />
			<div class="w-full center pt-4 pb-4 bg-pink rounded-xl mt-4">
				<Logout />
			</div>
		</div>
		</div>
	</div>
</div>
