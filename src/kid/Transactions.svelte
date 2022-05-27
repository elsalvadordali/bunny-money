<script lang="ts">
	import type { kidObj } from '../types';

	export let kid: kidObj = null;
	let openBox = false;
</script>

<div class="bg-green border-pink border-2 pink-shade rounded-xl p-2 mt-4">
	{#if kid}
		<button
			on:click={() => (openBox = !openBox)}
			class="border-black bg-yellow border-2 rounded-md p-2 pl-6 pr-6 mb-1 shaded"
			>{openBox ? 'close x' : 'see transactions'}</button
		>
		{#if openBox}
			<div class="mt-8">
				<div class="w-full flex justify-evenly border-black border-b-2">
					<p class="bold ">Amount</p>
					<p class="bold">Current</p>
				</div>
				{#each kid.checkingAccount.transactions as transaction}
					<div class="border-pink border-b-2">
						<div class="w-full line">
							<p class="">{transaction.date}</p>
						</div>
						<div class="w-full flex justify-evenly">
							<p class="inline m-2 {transaction.amount < 0 && 'text-pink'}">
								{Number(transaction.amount).toFixed(2)}
							</p>

							<p class="inline m-2 {transaction.amount < 0 && 'text-pink'}">
								{Number(transaction.currentBalance).toFixed(2)}
							</p>
						</div>
						<p class="italic"><span class='bold'>memo:</span> {transaction.memo}</p>
					</div>
				{/each}
			</div>
		{/if}
	{/if}
	<div />
</div>
