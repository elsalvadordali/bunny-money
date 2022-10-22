<script lang="ts">
  import type { kidObj } from '../types'
  import { verifyAmount } from '../scripts'
  import Toast from '../Toast.svelte'
  const options = ['day', 'week', 'month', 'year']
  export let kid: kidObj = null

  let message = ''
  let visible = false
  let amount = kid?.checkingAccount.allowance

  function checkInput(amount: number) {
    if (typeof amount == 'number') {
      if (amount !== verifyAmount(amount.toString())) {
        message = 'valid numbers only, thanks'
        visible = true
      } else if (kid) {
        kid.checkingAccount.allowance = verifyAmount(amount.toString()) || 0
      }
    } else {
      message = 'valid numbers only, thanks'
      visible = true
    }
  }


</script>

{#if kid}
  <Toast bind:message bind:visible />

  <div class="line-between mt-4 grid grid-col-3">
    <input
      type="number"
      min="0"
      bind:value={amount}
      on:blur={() =>
		(amount = parseFloat(Number.parseFloat(
			amount.toString()
		).toFixed(2)))}
      class=" outline-none text-center p-2 bg-green rounded-md shaded big-shade col-start-1 w-2/3"
    />
    <p class="p-2 col-start-2 justify-self-center self-center w-full">per</p>
    <select
      class="bg-green shaded p-2 rounded-md ml-3 col-start-3"
      bind:value={kid.checkingAccount.frequency}
    >
      {#each options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </div>
{/if}
