<script lang="ts">
    import type { kidObj } from "../types";

    import AddFunds from "./AddFunds.svelte";
    import RequestMoney from "./RequestMoney.svelte";

    function clickOutside(node: any) {
		const handleClick = (event: Event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
    export let kid: kidObj
    export let openChecking = false

    let seePreviousTransactions = false
</script>
{#if openChecking && kid}
<div class="absolute col w-full h-full bg-black75 top-0 left-0">
    <div class="center w-full h-full pt-6">
        <div 
        use:clickOutside
        on:click_outside={() => (openChecking = false)}
        class="bg-yellow border-black border-2 p-2 rounded-xl shaded w-full m-4">
        <div class="w-full flex flex-row justify-end">
            <button
            class='underline bg-yellow link'
                on:click={() => (openChecking = false)}>Close X</button>
        </div>
            <h3 class="text-2xl text-center">Current balance: ${kid.checkingAccount.balance.toFixed(2)}</h3>

            <RequestMoney {kid} />
            <AddFunds bind:name={kid.name} />

            {#if seePreviousTransactions && kid.checkingAccount.transactions.length > 0}
            <div>
                <button
                class="underline bg-yellow link"
                on:click={() => (seePreviousTransactions = false)}>Close X</button>
                <div class="border-black border-2 rounded-xl shaded p-2">
                    <div class="w-full flex justify-evenly border-black border-b-2">
                        <p class="inline m-2 bold">Amount</p>

                        <p class="inline m-2 bold">
                            Balance
                        </p>
                    </div>
                    <div class="scroll-content small">
                    {#each kid.checkingAccount.transactions as transaction}
                    <div class="border-pink border-b-2">
                        <div class="w-full line">
                            <p class="">{transaction.date}</p>
                        </div>
                        <div class="w-full flex justify-evenly">
                            <p class="inline m-2 {transaction.amount < 0 && 'text-pink'}">{Number(transaction.amount).toFixed(2)}</p>

                            <p class="inline m-2 {transaction.amount < 0 && 'text-pink'}">
                                {Number(transaction.currentBalance).toFixed(2)}
                            </p>
                        </div>
                        <p class="italic"><span class='bold'>memo:</span> {transaction.memo}</p>
                    </div>
           
                    {/each}
                    </div>
                </div>
            </div>
            {:else if seePreviousTransactions && kid.checkingAccount.transactions.length == 0 }
            <div>No transactions... yet</div>
            {:else}
            <button on:click={() => seePreviousTransactions = true} class='underline bg-yellow link'>See previous transactions</button>

            {/if}
        </div> 
    </div>
</div>
{/if}


<style>
    .small {
        max-height: 30vh;
    }
    button.link {
        margin-top: 0;
        cursor: pointer;
        display: block;
    }
</style>