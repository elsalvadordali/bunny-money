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
			type="number"
			on:change={check}
			bind:value={amount}
			class="w-16 outline-none text-center mr-3 bg-yellow p-2 rounded-md shaded big-shade"
		/>

		% interest per
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
	<p class="text-center m-4">
		(that's {calculated ? calculated.toFixed(2) : 'no interest'} per {kid.savingsAccount
			.compounded})
	</p>
{/if}
