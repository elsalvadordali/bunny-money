<script lang="ts">
  import type { kidObj } from '../types'

  export let kid: kidObj

  let see: boolean = false
</script>

<div class="w-full max-w-xl pt-2 pb-2">
  {#if { kid }}
    {#if !see}
      <button
        class="underline hover:m-0"
        on:click={() => (see = !see)}>See Checking Transactions</button
      >
    {:else}
      <div class="border-black border-2 rounded-xl p-2 w-full">
        <button
          on:click={() => (see = !see)}
          class="link text-4xl leading-none pl-4 pr-4"
        >
          ×
        </button>
        <h3 class="text-3xl p-2">
          {kid.savingsAccount.transactions.length > 0
            ? 'Transactions'
            : 'No transactions'}
        </h3>

        {#if kid.savingsAccount.transactions.length > 0}
          <table class="w-full h-60 overflow-y-scroll">
            <tr class="sticky border-black border-b-2">
              <th />
              <th class="text-left text-2xl"><h4>Amount</h4></th>
              <th class="text-left text-2xl"><h4>Balance</h4></th>
            </tr>
            {#each kid.savingsAccount.transactions as transaction}
              <tr>
                <td colspan="3">
                  <date class="text-sm">{transaction.date}</date>
                </td>
              </tr>
              <tr>
                <td class="w-1/3" />
                <td
                  >{new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(transaction.amount)}</td
                >
                <td
                  ><p class="font-bold">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(transaction.currentBalance)}
                  </p></td
                >
              </tr>
              <tr class="border-black border-b-2">
                <td colspan="3" class="mb-6 border-black border-b-2">
                  <h6 class="">{transaction.memo || 'unknown'}</h6>
                </td>
              </tr>
            {/each}
          </table>
        {:else}
        <div></div>
        {/if}
      </div>
    {/if}
  {/if}
</div>

<style>
  .border-b-2:last-of-type {
    border: none;
  }
</style>
