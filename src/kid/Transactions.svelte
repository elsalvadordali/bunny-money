<script lang="ts">
  import type { transactionType } from '../types'

  export let transactions: transactionType[] = null
  export let accountType = null
  let openBox = false
</script>

{#if transactions}
  <div class=" w-full rounded-xl mb-4 mt-4 p-2">
    {#if !openBox}
      <button
        on:click={() => (openBox = !openBox)}
        class="link underline bg-green"
      >
        {`See ${accountType} Transactions`}
      </button>
    {:else}
      <button
        on:click={() => (openBox = !openBox)}
        class="link text-4xl lh-2 "
        >×
      </button>
      {#if transactions && transactions.length > 0}
        <div class="border-black border-2 rounded-xl p-2">
          <h2 class="p-2 text-xl">{accountType} transactions</h2>
          <div class="w-full flex justify-evenly border-black border-b-2">
            <p class="bold ">Amount</p>
            <p class="bold">Current</p>
          </div>
          <div class="h-60 overflow-auto">
            {#each transactions as transaction}
              <div class="border-black border-b-2">
                <div class="w-full line">
                  <p class="">{transaction.date}</p>
                </div>
                <div class="w-full flex justify-evenly">
                  <p class="inline m-2 {transaction.amount < 0 && ''}">
                    {Number(transaction.amount).toFixed(2)}
                  </p>
                  <p class="inline m-2 {transaction.amount < 0 && ''}">
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
      {:else}
        <div class="w-full pb-8 pt-4 w-full">
          <p>no transactions</p>
        </div>
      {/if}
    {/if}
  </div>
{/if}

<style>
  button.link {
    margin-top: 0;
    cursor: pointer;
    display: block;
  }
  .border-b-2:last-of-type {
    border-bottom: 0;
  }
</style>
