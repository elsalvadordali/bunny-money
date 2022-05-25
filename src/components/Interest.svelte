<script lang="ts">
	import type { kidObj, savingsType } from '../types';
	import { verifyAmount } from '../scripts';
	import Toast from '../Toast.svelte';
	export let kid: kidObj = null;
	const options = ['day', 'week', 'month', 'year'];
	import { updateKid } from '../checkAuth'
	import { parent } from '../stores'

	let amount = kid?.savingsAccount.interest || 0;
	let message = '';
	let visible = false;
	$: calculated = kid ? kid.savingsAccount.balance * (kid.savingsAccount.interest / 100) : 0;

	function updateInterest() {
		let amt = verifyAmount(amount.toString())
		console.log(amt)
		if (amt < 100) {
			kid.savingsAccount.interest = amount
			console.log(kid)
			updateKid(kid, kid.uid)
			parent.updateKid(kid)
			message = 'Interest updated successfully'
			visible = true
		} else {
			message = 'Please put a valid number (between .01 and 100)'
			visible = true
		}
	}
</script>

{#if kid}
<div class="line-between mt-4 mb-4" >
	<Toast bind:message={message} bind:visible={visible} />
		<input
		id='int'
			type="number"
			min=0.01
			max=100
			bind:value={amount}
			class="w-13 outline-none text-center mr-3 p-2 bg-pink shaded big-shade rounded-md"/>

		<p class="text-center">% per</p>
		<select bind:value={kid.savingsAccount.compounded} class="w-13 bg-pink shaded rounded-md p-2 ml-3">
			{#each options as option}
				{#if option == kid.savingsAccount.compounded}
					<option value={option} default>{option}</option>
				{:else}
					<option value={option}>{option}</option>
				{/if}
			{/each}
		</select>
	</div>

	<p class="text-center">
		(that's {calculated ? calculated.toFixed(2) : 'no interest'} per {kid.savingsAccount.compounded})
	</p>
	<button class="bg-green rounded-md border-black border-2 shaded mb-1 big-shade" on:click={() => updateInterest()}>Save</button>

{/if}

<style>
	#int::after {
		content: '%';
		position: relative;
		left: 0;
		right: 0;
		z-index: 999;
	}
	p {
		line-height: 1rem;
	}
</style>