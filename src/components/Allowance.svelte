<script lang="ts">
	import type { kidObj } from '../types';
	import { verifyAmount } from '../scripts';
	import Toast from '../Toast.svelte';
	const options = ['day', 'week', 'month', 'year'];
	export let kid: kidObj = null;

	let message = '';
	let visible = false;
	let amount = kid?.checkingAccount.allowance;

	function checkInput(amount: number) {
		if (typeof amount == 'number') {
			if (amount !== verifyAmount(amount.toString())) {
				message = 'valid numbers only, thanks';
				visible = true;
			} else if (kid) {
				kid.checkingAccount.allowance = verifyAmount(amount.toString()) || 0;
			}
		} else {
			message = 'valid numbers only, thanks';
			visible = true;
		}
	}
</script>

{#if kid}
	<div class="line-between mt-4">
		 {message} {visible} />
		<input
			type="number"
			min="0"
			bind:value={amount}
			on:change={() => checkInput(amount || 0)}
			class="w-13 outline-none text-center p-2 bg-black text-white rounded-md green-shaded big-green"
		/>
		<p class="p-2"> per </p>
		<select
			class="bg-green shaded p-2 rounded-md w-13 ml-3"
			bind:value={kid.checkingAccount.frequency}
		>
			{#each options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
	</div>
{/if}
