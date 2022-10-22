<script lang="ts">
  import type { kidObj, userType } from '../types'

  import Toast from '../Toast.svelte'
  import { parent } from '../stores'
  import { verifyAmount, convertDate2String, reconcileArr } from '../scripts'
  import { updateKid } from '../checkAuth'

  export let name = 'Eda'
  let toAdd: undefined | number

  let memo = ''
  let user: userType
  let visible = false
  let message = ''
  let showMore = false

  parent.subscribe((val) => (user = val))

  async function addToChecking(e: Event) {
    e.preventDefault()
    if (toAdd < 0) {
      message = 'Amount must be higher than 0'
      visible = true
      toAdd = 0
      return
    }
    let kid: kidObj | undefined = null

    if (user) {
      kid = user.kids.find((arrKid: kidObj) => {
        if (arrKid && arrKid.name == name) return arrKid
      })
    }
    if (toAdd) {
      let amount = verifyAmount(toAdd.toString())
      if (amount && kid) {
        let newTransaction = {
          amount: amount,
          currentBalance: kid.checkingAccount.balance + amount, //maybe not parseLater
          date: convertDate2String(new Date()),
          memo: memo,
        }
        kid.checkingAccount.transactions = [
          newTransaction,
          ...kid.checkingAccount.transactions,
        ]
        kid.checkingAccount.balance = kid.checkingAccount.balance + amount
        if (user) {
          updateKid(kid)
          let kids = reconcileArr(user.kids, kid)
          parent.updateKids(kids)
          message = 'sent money successfully'
          visible = true
          showMore = false
        } else {
          message = 'something went wrong. reload and try again'
          visible = true
        }
        toAdd = 0
        memo = ''
      }
    } else {
      message = 'Please put a valid number!'
      visible = true
      toAdd = 0
      memo = ''
    }
  }
</script>

<Toast bind:visible bind:message />

<div class={toAdd === null ? 'bg-red rounded-xl' : 'bg-yellow'}>
  <div class="w-full h-full w-full  rounded-xl">
    {#if !showMore}
      <button
        on:click={() => (showMore = !showMore)}
        class="m-0 hover:m-0 underline pt-2 pb-2"
      >
        Add funds
      </button>
    {:else}
      <div class="border-black border-2 shaded rounded-xl p-2 mb-4">
        <button
          on:click={() => (showMore = !showMore)}
          class="link text-4xl pl-4 pr-4"
        >
          ×
        </button>
        <h2 class="p-2 text-3xl">Add funds</h2>
        <div class="grid grid-cols-3 grid-row-3 gap-4 p-2">
          <input
            class=" p-2 outline-none text-center col-start-1 row-start-1 bg-pink rounded-md shaded big-shade w-88 right"
            id="amount"
            placeholder="20"
            type="number"
            bind:value={toAdd}
            on:blur={() => (toAdd = parseFloat(Number.parseFloat(
              toAdd.toString()
            ).toFixed(2)))}
          />

          <label
            for="amount"
            class="text-center italic row-start-1 col-start-2 col-end-4 pt-2"
            >{toAdd === null ? 'numbers only please' : '(to checking)'}</label
          >
          <label for="memo" class="col-start-1 row-start-2 text-center pt-2"
            >Memo</label
          >
          <input
            type="text"
            id="memo"
            bind:value={memo}
            placeholder="gift from grandma"
            class="p-2 outline-none row-start-2 col-start-2 col-end-4 bg-amber rounded-md shaded big-shade"
          />
          <button
            class="col-start-3 row-start-4 p-2 pr-6 pl-6 rounded-md bg-green border-black shaded big-shaded border-2 mb-1"
            on:click={(e) => addToChecking(e)}
          >
            add
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  input::placeholder {
    color: #333;
  }
  button.link {
    margin-top: 0;
    cursor: pointer;
    display: block;
  }
</style>
