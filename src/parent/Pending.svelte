<script lang="ts">
import { parent } from '../stores';
import { updateKid, updateParent } from '../checkAuth';
import Toast from '../Toast.svelte';

import type { transactionType, userType } from '../types'
    export let user: userType = null
	let transactions = []

	let visible = false
	let message = ''
    function calcPending() {
		if (user) {
		user.kids.forEach(kid => {
			kid.pending.filter(transaction => {
				if (transaction.for && transaction.for == 'parent') {
					let newOne = {kid: kid.kid, name: kid.name, ...transaction}
					transactions.push(newOne)
					return newOne
				}
			})
		})
	} else {
	}
		
	}
	if (user) {
		calcPending()
	}
	function accept(toMatch) {
		let current: transactionType = null
		let kid = user.kids.find(one => one.kid == toMatch.kid)
		let pending = kid.pending.filter(transaction => {
			if (transaction.amount == toMatch.amount && transaction.date == toMatch.date) {
				current = transaction
			} else return transaction
		})
		if (current) {
		delete current.for
		current.currentBalance = kid.checkingAccount.balance + current.amount
		kid.checkingAccount.balance = current.currentBalance
		kid.pending = pending
		kid.checkingAccount.transactions = [current, ...kid.checkingAccount.transactions]
		updateKid(kid)
		parent.updateKid(kid)
		transactions = pending
		message = 'updated successfully'
		visible = true
		} else {
			message = 'whoops something went wrong. reload and try again'
			visible = true
		}
	}
	function deny(transaction) {
		let kid = user.kids.find(one => one.kid == transaction.kid)
		if (kid) {
			let pending = kid.pending.filter(one => one.memo != transaction.memo && one.amount != transaction.amount)
			kid.pending = pending
			user.kids = user.kids.filter(one => one.name == kid.name ? kid : one)
			let updated = updateParent(user)
			if (updated) {
				message = 'request denied!'
				transactions = pending
				visible = true
			}
			parent.set(user)
		} else {
			message = 'reload the page and try again'
			visible = true
		}
	}
</script>
<div>
	<Toast bind:message={message} bind:visible={visible} />
	{#if transactions && transactions.length > 0}
	<div class="bg-yellow border-black border-2 shaded rounded-xl m-2 p-2">
		<h2 class='text-2xl pb-4'>Requests</h2>
		{#each transactions as transaction}
		<div class="w-full flex justify-evenly">
			<p class="p-2">{transaction.date}</p>
			<p class='p-2'>from: {transaction.name}</p>
			<p class="p-2 inline m-2">{Number(transaction.amount).toFixed(2)}</p>

		</div>
		<div class="w-full line border-black mt-4 mb-4">
			<p class="italic pl-8"><span class='bold'>memo:</span> {transaction.memo}</p>
		</div>
		<div class='flex justify-evenly border-b-2 p-2 mb-4'>
			<button 
				on:click={() => accept(transaction)}
				class="text-black bg-green p-2 pr-6 pl-6 rounded-md border-black border-2 shaded mb-1">
				Accept
			</button>
			<button 
				on:click={() => deny(transaction)}
				class="text-black bg-pink p-2 pr-6 pl-6 rounded-md mb-1 border-black border-2 shaded">
				Deny
			</button>
		</div>
		{/each}
	</div>
	{/if}
</div>