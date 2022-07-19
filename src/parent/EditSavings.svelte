<script lang="ts">
    import Interest from "../components/Interest.svelte";
    import type { kidObj } from "../types";
    import { verifyAmount } from '../scripts'
    import { parent } from '../stores'
    import { updateKid, updateParent } from '../checkAuth'
    import Toast from "../Toast.svelte";
import { claim_space } from "svelte/internal";
    export let kid: kidObj
    export let openSavings = false
    let seePreviousTransactions = false
    let adjustInterest = false
    let amount = kid.savingsAccount.interest || 0
    let message = ''
    let openInterest = false
    let visible
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

    function updateInterest() {
        if (amount) {
            let amt = verifyAmount(amount.toString())
            if (amt < 100) {
                message = 'updated interest'
                kid.savingsAccount.interest = amount
                updateKid(kid)
                visible = true

            } else if (amt > 100) {
                message = 'please pick a more reasonable interest rate'
                visible = true
                return amount = 0
            } else {
                message = 'please put a valid number'
                visible = true
                return amount = 0
            }
        } else {
            message = 'numbers only please'
            visible = true
            return amount = 0
        }
	}
</script>


{#if openSavings && kid}
<Toast bind:message={message} bind:visible={visible} />
<div class=" center w-full h-full bg-black75 top-0 left-0">
    <div class="center w-full h-full pt-6">
        
        <div 
        use:clickOutside
        on:click_outside={() => (openSavings = false)}
        class="bg-yellow border-black border-2 p-2 rounded-xl shaded w-full m-4">
        <div class="w-full flex flex-row justify-end">
            <button
                class="underline bg-yellow link"
                on:click={() => (openSavings = false)}>Close X</button>
        </div>
    
        {#if openInterest}            
        <button on:click={() => openInterest = false} class='link underline bg-yellow'>Close X</button>
        <div class="border-black border-2 p-2 rounded-xl mt-4">

            <h3 class="text-2xl text-center">Current balance: ${kid.savingsAccount.balance.toFixed(2)}</h3>
            <h4>Adjust Interest</h4>
            <Interest {kid} bind:amount={amount} />
            <button class="bg-green rounded-md border-black border-2 shaded mb-1 big-shade" on:click={updateInterest}>adjust</button>
        </div>
        {:else }
        <button on:click={() => openInterest = true} class='link underline bg-yellow'>Adjust Interest</button>
        {/if}
            {#if seePreviousTransactions && kid.savingsAccount.transactions.length > 0}
            <div>
                <button
                class="border-black bg-pink border-2 rounded-md shaded p-2 pl-4 pr-4 mb-1"
                on:click={() => (seePreviousTransactions = false)}>Close X</button>

                <div class="w-full flex justify-evenly border-black border-b-2 mt-4">
                    <p class="inline m-2 bold">Amount</p>
                    <p class="inline m-2 bold">Balance</p>
                </div>
                <div class="scroll-content small">
                {#each kid.savingsAccount.transactions as transaction}
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
            </div>
            {:else if seePreviousTransactions && kid.savingsAccount.transactions.length == 0}
            <button
                class="underline bg-yellow link"
                on:click={() => (seePreviousTransactions = false)}>Close X</button>
                <div class='p-2 border-black border-2 rounded-xl'>
                    <p class="p-4">No Transactions... yet</p>
                </div>
            {:else}
            <button on:click={() => seePreviousTransactions = true} class='underline bg-yellow link p-4'>See previous transactions</button>
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