<script lang="ts">
  import type { kidObj } from '../types'
  import Toast from '../Toast.svelte'
  import { updateKid } from '../checkAuth'
  import { convertDate2String, verifyAmount } from '../scripts'
  export let kid: kidObj = null
  let requestedAmount: undefined | number

  let memo: string | undefined
  let visible = false
  let toast = ''
  let showMore = false

  async function requestMoney() {
    if (requestedAmount <= 0) {
      toast = 'Request must be bigger than 0'
      visible = true
    }
    if (kid) {
      if (requestedAmount) {
        //verigy amount > 0 and not weird
        //svelte-forms !!!!
        let amount = verifyAmount(requestedAmount.toString())
        if (amount) {
          kid.pending.push({
            date: convertDate2String(new Date()),
            amount,
            memo,
            for: 'parent',
          })
          updateKid(kid)
          //parent.set(kid);
          toast = `Requested $${amount} successfully!`
          visible = true
        }
      } else {
        toast = 'invalid request!'
        visible = true
        requestedAmount = 0
      }
    }
  }
</script>

<div class="max-w-lg w-80 pt-2 pb-2">
  <Toast bind:visible bind:message={toast} />

  {#if kid}
    {#if !showMore}
      <button on:click={() => (showMore = !showMore)} class="link underline"
        >Request money</button
      >
    {:else}
      <div class="p-2 border-black border-2 rounded-xl">
        <button
          on:click={() => (showMore = !showMore)}
          class="link text-4xl pl-4 pr-4"
        >
          ×
        </button>
        <h3 class="text-3xl p-2">Request money</h3>
        <div class="flex flex-col">
          <div class="grid grid-cols-2 p-2">

          <input
            id="add"
            type="number"
            max="0"
            min="100000"
            bind:value={requestedAmount}
            placeholder="0"
            class="p-2 pl-4 pr-4 outline-none w-2/3 rounded-md col-start-1 bg-yellow shaded big-shade"
          />
          <label
            for="add"
            class="text-left pl-4 italic col-start-2 pt-2"
            >(to checking)</label
          >
        </div>
        <div class="grid grid-cols-3 p-2">
          <label for="memo" class="col-start-1 pr-4 text-center pt-2"
            >Memo</label
          >
          <input
            id="memo"
            type="text"
            bind:value={memo}
            placeholder="for movie tickets"
            class="p-2 pl-4 pr-4 outline-none w-full rounded-md items-end bg-green shaded big-shade"
          />
        </div>
        <div class="grid grid-cols-3 p-2">
          <button
            on:click={requestMoney}
            class="bg-pink border-black border-2 p-2 pr-4 pl-4 rounded-md w-full appearance-none mb-1 shaded big-shade col-start-3 hover:mb-0 hover:mt-1 action:mb-0 action:mt-1"
            >request</button
          >
        </div>
        </div>
      </div>
    {/if}
  {/if}
</div>

<style>
  button.link {
    margin-top: 0;
    cursor: pointer;
    display: block;
  }
</style>
