<script lang="ts">
  import { doc, updateDoc } from 'firebase/firestore'
  import Toast from '../Toast.svelte'
  import { db } from '../checkAuth'
  import type { kidObj, userType } from '../types'
  import { parent } from '../stores'
  import { convertDate2String } from '../scripts'
  export let kid: kidObj = null
  let requestedAmount: undefined | number

  let memo = ''
  let user: userType

  let visible = false
  let toast = ''
  let showMore = false
  parent.subscribe((val) => (user = val))

  async function requestMoney() {
    if (requestedAmount <= 0) {
      toast = 'Request more than 0.'
      visible = true
      requestedAmount = 0
      return
    }
    if (kid) {
      kid.pending.push({
        date: convertDate2String(new Date()),
        amount: requestedAmount * -1,
        memo,
      })
      if (user) {
        let newKids = user.kids.map((eachKid: kidObj) => {
          if (eachKid && kid && eachKid.name == kid.name) {
            return kid
          } else {
            return eachKid
          }
        })
        const parRef = doc(db, 'parents', user.uid)
        await updateDoc(parRef, { kids: newKids })
        parent.updateKids(newKids)
        parent.subscribe((val) => (user = val))
        toast = `Requested \$${requestedAmount} from ${kid.name}`
        visible = true
        requestedAmount = 0
        memo = ''
        showMore = false
      }
    }
  }
</script>

<div class={requestedAmount === null ? 'bg-red rounded-xl' : 'bg-yellow'}>
  <Toast bind:visible bind:message={toast} />
  {#if !showMore}
    <button
      class="link underline pt-2 pb-2"
      on:click={() => (showMore = !showMore)}>Request payment</button
    >
  {:else}
    <div class="border-black border-2 rounded-xl shaded p-2 mb-4 mt-4">
      
      <h3 class="text-3xl p-2">Request payment</h3>
      <div class="grid grid-cols-3 grid-row-3 gap-4 p-2">
        <input
          tabindex="0"
          id="add"
          type="number"
          max="0"
          min="100000"
          step=".01"
          bind:value={requestedAmount}
          placeholder="0.00"
          on:blur={() =>
            (requestedAmount = parseFloat(Number.parseFloat(
              requestedAmount.toString()
            ).toFixed(2)))}
          class=" p-2 outline-none pl-2 col-start-1 row-start-1 bg-pink rounded-md shaded big-shade w-88 right"
        />

        <label
          for="add"
          class="text-center italic row-start-1 col-start-2 col-end-4 pt-2"
          >{requestedAmount === null ? 'Numbers only please' : '(from checking)'}</label
        >
        <label for="memo" class="col-start-1 row-start-2 text-center pt-2"
          >Memo</label
        >
        <input
          id="memo"
          type="text"
          maxlength="50"
          bind:value={memo}
          placeholder="for movie tickets"
          class="p-2 outline-none row-start-2 col-start-2 col-end-4 bg-amber rounded-md shaded big-shade"
        />
        <button
          on:click={requestMoney}
          class="bg-green border-black shaded border-2 p-2 pl-4 pr-4 rounded-md col-start-3 row-start-3 mb-1 hover:mb-0 hover:mt-1"
          >request</button
        >
      </div>
    </div>
  {/if}
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
  input:user-invalid {
    box-shadow: 2px 2px 0 #124653;
  }
</style>
