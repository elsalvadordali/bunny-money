<script type="ts">
  import type { kidObj } from '../types'
  import { parent } from '../stores'
  import Toast from '../Toast.svelte'
  import EditChecking from './EditChecking.svelte'
  import EditSavings from './EditSavings.svelte'
  import { updateKid } from '../checkAuth'

  export let kid: kidObj = null
  let user
  parent.subscribe((val) => (user = val))

  let message = ''
  let visible = false
  let newName = kid.name
  let openSavings = false
  let openChecking = false

  function updateName() {
    if (user) {
      kid.name = newName
      let n = updateKid(kid)
      //if (n === 1) message = 'Something went wrong. Reload and try again.'
      //else
      message = `Name changed to ${kid.name}`
      visible = true
      parent.updateKid(kid)
    }
  }
</script>

{#if kid}
  <EditChecking bind:openChecking {kid} />
  <EditSavings bind:openSavings {kid} />

  <Toast bind:visible bind:message />
  <div
    class="bg-pink rounded-xl border-black border-2 shaded m-2 p-2 mb-4 mt-4 center flex flex-col shadow-md w-90 max-w-xl"
  >
    <div
      class=" flex flex-col lg:flex-row line p-6 border-black border-b-2 carrot"
    >
      <input
        tabindex="0"
        type="text"
        id="name"
        bind:value={newName}
        class="w-1/2 italic outline-none inline text-2xl text-center border-black border-b-2 p-2 bg-pink mr-6 ml-12"
      />
      {#if newName != kid.name}
        <button>X</button>
        <button
          on:click={updateName}
          class="bg-yellow border-black border-2 rounded-md p-2 pl-4 pr-4 mb-1 shaded hover:mb-0 hover:mt-1"
        >
          Change name</button
        >
      {/if}
    </div>
    <div class=" grid grid-rows-1 grid-cols-2 gap-4">
      <div
        class=" items-center flex flex-col p-4 pt-12 pb-8 pr-6 border-black border-r-2"
      >
        <h3 class="text-3xl m-2">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(kid.checkingAccount.balance)}
        </h3>
        <h6 class="m-2">Checking Account</h6>
        <button
          on:click={() => (openChecking = true)}
          class="border-black border-2 rounded-md mb-1 bg-yellow shaded p-1 pl-4 pr-4"
          >Edit</button
        >
      </div>
      <div class=" items-center flex flex-col p-4 pt-12 pb-8">
        <h3 class="text-3xl m-2">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(kid.savingsAccount.balance)}
        </h3>
        <h6 class="m-2">Savings Account</h6>
        <button
          on:click={() => (openSavings = true)}
          class="border-black border-2 rounded-md mb-1 bg-green shaded p-1 pl-4 pr-4"
          >Edit</button
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .carrot {
    background: url('./carrot.png');
    background-repeat: no-repeat;
    background-position: 5% top;
    background-size: 4%;
  }
</style>
