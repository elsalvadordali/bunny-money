<script lang="ts">
	import type { kidObj, savingsType } from '../types';
	import { verifyAmount } from '../scripts';
	import Toast from '../Toast.svelte';
	export let kid: kidObj = null;
	const options = ['day', 'week', 'month', 'year'];

	let amount = kid?.savingsAccount.interest || 0;
	let message = '';
	let visible = false;
	$: calculated = kid ? kid.savingsAccount.balance * (kid.savingsAccount.interest / 100) : 0;

	function check() {
		if (amount && kid) {
			kid.savingsAccount.interest = verifyAmount(amount.toFixed(2)) || 0;
			message = `interest set to ${kid.savingsAccount.interest}`;
		}
	}
</script>

{#if kid}
<div class="line-between mt-4 mb-4">
	<Toast {message} {visible} />
		<input
		id='int'
			type="number"
			on:change={check}
			bind:value={amount}
			class="w-13 outline-none text-center mr-3 bg-yellow p-2 rounded-md shaded big-shade"
		/>

		<p class="text-center">% per</p>
		<select bind:value={kid.savingsAccount.compounded} class="w-13 bg-yellow shaded rounded-md p-2 ml-3">
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
		(that's {calculated ? calculated.toFixed(2) : 'no interest'} per {kid.savingsAccount
			.compounded})
	</p>
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