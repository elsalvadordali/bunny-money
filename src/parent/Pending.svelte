<script lang="ts">
import type { transactionType, userType } from '../types'
    export let user: userType = null
	let transactions = []

    function calcPending() {
        
		if (user) {
		user.kids.forEach(kid => {
			kid.pending.filter(transaction => {
				if (transaction.for && transaction.for == 'parent') {
					let newOne = {kid: kid.name, ...transaction}
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
		let pending
		user.kids.forEach(kid => {
			kid.pending.filter(transaction => {
				if (transaction.amount == toMatch.amount && transaction.memo == toMatch.amount) {
					current = transaction
				} else {
					pending.push(transaction)
				}
			})
		})

		/*
		let pending = user[toMatch.kid].pending.filter(transaction => {
			if (transaction.amount == toMatch.amount && transaction.memo == toMatch.amount) {
			} else {
				return transaction
			}
		})
		*/
	}
	function deny(transaction) {
	}
</script>
<div>
	{#if transactions}
	<div class="bg-yellow border-black border-2 shaded rounded-xl m-2 p-2">
		<h2 class='text-2xl pb-4'>Requests</h2>
		{#each transactions as transaction}
		<div class="w-full flex justify-evenly">
			<p class="p-2">{transaction.date}</p>
			<p class='p-2'>from: {transaction.kid}</p>
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