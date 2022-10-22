<script lang="ts">
  import Interest from '../components/Interest.svelte'
  import type { kidObj } from '../types'
  import { verifyAmount } from '../scripts'
  import { updateKid, updateParent } from '../checkAuth'
  import Toast from '../Toast.svelte'
  export let kid: kidObj
  export let openSavings = false
  let seePreviousTransactions = false
  let amount = kid.savingsAccount.interest || 0
  let message = ''
  let openInterest = false
  let visible
  function clickOutside(node: any) {
    const handleClick = (event: Event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent('click_outside', node))
      }
    }
    document.addEventListener('click', handleClick, true)
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true)
      },
    }
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
        return (amount = 0)
      } else {
        message = 'please put a valid number'
        visible = true
        return (amount = 0)
      }
    } else {
      message = 'numbers only please'
      visible = true
      return (amount = 0)
    }
  }
</script>

{#if openSavings && kid}
  <Toast bind:message bind:visible />
  <div
    class="absolute flex flex-col items-center w-full h-full bg-black75 top-0 left-0 "
  >
    <div class="center h-full w-full max-w-3xl pt-6 flex flex-col items-center">
      <div
        use:clickOutside
        on:click_outside={() => (openSavings = false)}
        class="bg-yellow border-black border-2 p-2 rounded-xl shaded max-w-3xl w-full m-4"
      >
        <div class="w-full flex flex-row justify-end">
          <button
            class="bg-amber rounded-md border-black border-2 shaded mb-1 big-shade text-4xl flex center px-2"
            on:click={() => (openSavings = false)}>×</button
          >
        </div>
        <h3 class="text-2xl text-center">
            Current balance: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(kid.savingsAccount.balance)}
          </h3>
        
          
          {#if openInterest}
          
          <div class="border-black border-2 p-2 rounded-xl mt-2">
            <button
            on:click={() => (openInterest = false)}
            class="link text-4xl bg-yellow">×</button
          >
            <h4 class="text-xl">Adjust Interest</h4>
            <Interest {kid} bind:amount />
            <button
              class="bg-green rounded-md border-black border-2 shaded mb-1 big-shade p-2 pl-6 pr-6 hover:mb-0 hover:mt-1"
              on:click={updateInterest}>adjust</button
            >
          </div>
        {:else}
          <button
            on:click={() => (openInterest = true)}
            class="link underline bg-yellow p-2 ph-6">Adjust Interest</button
          >
        {/if}
        {#if seePreviousTransactions && kid.savingsAccount.transactions.length > 0}
          <div>
            <button
              class="border-black bg-pink border-2 rounded-md shaded p-2 ph-4 mb-1"
              on:click={() => (seePreviousTransactions = false)}>×</button
            >

            <div
              class="w-full flex justify-evenly border-black border-b-2 mt-2"
            >
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
                    <p
                      class="inline m-2 {transaction.amount < 0 && 'text-pink'}"
                    >
                      {Number(transaction.amount).toFixed(2)}
                    </p>
                    <p
                      class="inline m-2 {transaction.amount < 0 && 'text-pink'}"
                    >
                      {Number(transaction.currentBalance).toFixed(2)}
                    </p>
                  </div>
                  <p class="italic">
                    <span class="bold">memo:</span>
                    {transaction.memo}
                  </p>
                </div>
              {/each}
            </div>
          </div>
        {:else if seePreviousTransactions && kid.savingsAccount.transactions.length == 0}
          <button
            class="bg-yellow link text-4xl"
            on:click={() => (seePreviousTransactions = false)}>×</button
          >
          <div class="p-2 border-black border-2 rounded-xl mt-2">
            <p class="p-4">No Transactions... yet</p>
          </div>
        {:else}
          <button
            on:click={() => (seePreviousTransactions = true)}
            class="underline bg-yellow link p-2"
            >See previous transactions</button
          >
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
