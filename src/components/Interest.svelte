<script lang="ts">
	import type { kidObj } from '../types';
	import Toast from '../Toast.svelte';
	export let kid: kidObj = null;
	export let amount = kid?.savingsAccount.interest || 0;
	const options = ['day', 'week', 'month', 'year'];
	
	let message = '';
	let visible = false;
	$: calculated = amount * (kid.savingsAccount.balance / 100);
	
</script>

<Toast bind:message={message} bind:visible={visible} />

{#if kid}
<div class="line-between mt-4 mb-4" >
	
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
		(that's {calculated ? calculated.toFixed(2) : 'no interest'} per {kid.savingsAccount.compounded} 
		{kid.savingsAccount.compounded == 'day' ? `, or ~${parseFloat(calculated * 365).toFixed(2)} per year` : ''}
		{kid.savingsAccount.compounded == 'week' ? `, or ~${parseFloat(calculated * 52).toFixed(2)} per year` : ''}
		{kid.savingsAccount.compounded == 'month' ? `, or ~${parseFloat(calculated * 12).toFixed(2)} per year` : ''}
		)
	</p>
{/if}

<style>
	select {
        -webkit-appearance: none;
    }
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