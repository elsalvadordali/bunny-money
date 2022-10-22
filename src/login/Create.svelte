<script lang="ts">
  import type { kidObj, userType } from '../types'
  import Toast from '../Toast.svelte'
  import Allowance from '../components/Allowance.svelte'
  import Interest from '../components/Interest.svelte'
  import { db } from '../checkAuth'
  import { doc, updateDoc } from 'firebase/firestore'
  import { parent } from '../stores'
  import { verifyAmount } from '../scripts'

  export let value = true

  window.scroll({ top: 0, behavior: 'smooth' })

  let message = ''
  let visible = false
  let openChecking = true
  let openSavings = false
  let user: userType = null
  parent.subscribe((val) => (user = val))
  console.log(user.kids.length)
  let kid: kidObj = {
    name: '',
    dateOpened: new Date().valueOf(),
    kid: user.kids.length > 0 ? user.kids[user.kids.length - 1].kid + 1 : 1,
    isParent: false,
    uid: user.uid || '',
    checkingAccount: {
      balance: 0,
      allowance: 0,
      frequency: 'week',
      transactions: [],
    },
    savingsAccount: {
      balance: 0,
      interest: 0,
      compounded: 'week',
      transactions: [],
    },
    pending: [],
  }

  async function createKid(e: Event) {
    e.preventDefault()

    if (kid && kid.name.length <= 1) {
      message = 'Name is too short!'
      visible = true
      kid.name = ''
      kid.kid = user.kids.length + 1
      return
    }
    if (kid) {
      kid.checkingAccount.balance =
        verifyAmount(kid.checkingAccount.balance.toString()) || 0
      kid.checkingAccount.allowance =
        verifyAmount(kid.checkingAccount.allowance.toString()) || 0
      kid.savingsAccount.balance =
        verifyAmount(kid.savingsAccount.balance.toString()) || 0
      kid.savingsAccount.interest =
        verifyAmount(kid.savingsAccount.interest.toString()) || 0

      if (user && user.uid) {
        user.kids.push(kid)
        const parRef = doc(db, 'parents', user.uid)
        await updateDoc(parRef, user)
        parent.set(user)
        value = false
      }
    }
  }

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
</script>

<Toast bind:visible bind:message />

{#if kid}
  <div
    class="absolute flex flex-col items-center w-full h-full bg-black75 top-0 left-0"
  >
      <div
        use:clickOutside
        on:click_outside={() => (openChecking = false)}
        class="bg-yellow border-black border-2 pb-6 pl-4 pr-4 pt-2 rounded-xl max-w-xl shaded w-full m-4 "
      >
        <div class="m-4 p-4 flex flex-row items-center justify-end ">
          <button
            class="bg-amber rounded-md border-black border-2 shaded mb-1 big-shade text-4xl flex center px-2 hover:mb-0 hover:mt-1 action:mb-0 action:mt-1"
            on:click={() => (value = false)}>×</button
          >
        </div>
        <div
          class="line border-black border-2 shaded rounded-xl mb-4 w-full grid grid-cols-2"
        >
          <label
            for="name"
            class="p-2 w-13 col-start-1 justify-self-center self-center"
            >Kid's name</label
          >
          <input
            type="text"
            class="bg-pink w-23 rounded-md shaded middle big-shade m-4 outline-none p-2 col-start-2"
            bind:value={kid.name}
          />
        </div>

        <div
          class="border-black border-2 shaded rounded-xl mb-4 w-full flex flex-col p-2"
        >
          <h2
            class="text-3xl pl-2 pr-2 pt-2 col-start-1 col-span-2 rows-start-1"
          >
            Checking Account
          </h2>
          <div class="grid grid-cols-2">

          <label
            for="initialChecking"
            class="col-start-1 justify-self-center self-center h-fit"
            >Initial Amount</label
          >
            <input
              type="number"
              class="bg-green rounded-md shaded big-shade p-2 outline-none m-4 col-start-2"
              bind:value={kid.checkingAccount.balance}
            />
          </div>

          <h3
            class="text-xl col-start-1 col-span-2 row-start-3 p-2 self-center"
          >
            set up allowance (optional)
          </h3>

          <div class="col-start-1 col-span-2 row-start-4">
            <Allowance {kid} />
          </div>
        </div>
        <div class="border-black border-2 shaded rounded-xl mb-4 w-full flex flex-col p-2 ">
          <h2 class="text-3xl pl-2 pt-2 pr-2">Savings Account</h2>
            <div>
            <label
              for="initialChecking"
              class="w-13 m-4">Initial Amount</label
            >
            <input
              type="number"
              class="bg-pink w-23 m-4 rounded-md shaded big-shade p-2 col-start-2 row-start-1 w-1/2"
              bind:value={kid.savingsAccount.balance}
            />
          </div>
          <div>
            <h3 class="text-xl p-4 col-start-1 col-span-2 row-start-2">
              set up interest (optional)
            </h3>
          </div>
            <div class="p-2 mb-0 col-start-1 col-span-2 row-start-3 row-end-5">
              <Interest {kid} />
            </div>
          </div>
        <div class="center justify-end w-full">
          <button
            class="text-black rounded-md bg-amber border-black border-2 mb-1 shaded big-shade p-2 pl-4 pr-4 hover:mb-0 hover:mt-1"
            on:click={createKid}>Create new Account</button
          >
        </div>
      </div>
  </div>
{/if}

<style>
</style>
