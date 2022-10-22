<script lang="ts">
  import type { kidObj } from '../types'
  import Request from './Request.svelte'
  import Pending from './Pending.svelte'
  import Transactions from './Transactions.svelte'
  import Checking from '../components/Checking.svelte'
  import Savings from '../components/Savings.svelte'
  import Transfer from './Transfer.svelte'
  import Logout from '../login/Logout.svelte'
  import { parent } from '../stores'
  import { onMount } from 'svelte'
  import { calcAllowance, calcInterest } from '../scripts'
  import { fly } from 'svelte/transition'
  import { signOut } from 'firebase/auth'
  import { auth } from '../checkAuth'

  let kid: kidObj = null
  parent.subscribe((val) => {
    if (val) {
      kid = val
    }
  })
  onMount(() => {
    if (kid) {
      calcAllowance(kid)
      if (kid.savingsAccount.transactions.length > 0) calcInterest(kid)
    } else {
      signOut(auth)
    }
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  })
  let checking = 0.0
  let savings = 0.0
  const getMoney = setInterval(() => {
    if (
      kid.checkingAccount.balance > 1000 &&
      checking < kid.checkingAccount.balance
    )
      checking += 667.38
    else if (
      kid.checkingAccount.balance > 100 &&
      checking < kid.checkingAccount.balance
    )
      checking += 50.65
    else if (checking < kid.checkingAccount.balance) checking += 0.28
    else {
      checking = kid.checkingAccount.balance
      clearInterval(getMoney)
    }
  }, 1)
  const getSavings = setInterval(() => {
    if (savings === kid.savingsAccount.balance) clearInterval(getSavings)
    else if (savings > kid.savingsAccount.balance)
      savings = kid.savingsAccount.balance
    else if (kid.savingsAccount.balance > 10000) savings += 1015.65
    else if (kid.savingsAccount.balance > 1000) savings += 167.38
    else if (kid.savingsAccount.balance > 100) savings += 74.65
    else if (savings < kid.savingsAccount.balance) savings += 1.28
    else {
      checking = kid.savingsAccount.balance
      clearInterval(getSavings)
    }
  }, 100)
</script>

<Pending {kid} />
<div class="w-full bg-yellow items-center flex flex-col pt-4 pb-4">
  <div class=" p-2 pt-12 items-center flex flex-col max-w-2xl rounded-xl ">
    <h2 class="m-4 inline text-2xl">
      Hello <span class="italic inline text-2xl">{kid && kid.name}!</span>
    </h2>
    <div
      class="bg-amber text-black rounded-full w-60 h-60 flex flex-col justify-center items-center mt-8 mb-8 circle "
    >
      <h2 class="text-center mb-2 italic text-lg">Checking Account</h2>
      {#if checking}
        <h3 class="text-6xl lh-4 text-center" in:fly={{ y: -50 }}>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(checking) || '0.00'}
        </h3>
      {/if}
    </div>
    <div class="bg-amber w-full rounded-xl mb-4 mt-4 pb-4 pt-4 max-w-3xl">
      <h4 class="text-center italic p-2">Allowance</h4>
      <h3 class="text-center text-3xl">
        $ {kid && kid.checkingAccount.allowance} per {kid &&
          kid.checkingAccount.frequency}
      </h3>
    </div>
    <div class="max-w-2xl w-full mb-4">
      
      <div class="bg-red border-black border-2 rounded-xl p-2">
      <Request {kid} />
      <Checking {kid} />
      <Transfer bind:kid />

    </div>
      <div class="center col">
        <div
          class="bg-green rounded-full w-60 h-60 flex flex-col items-center justify-center  m-auto mt-8 mb-8 circle"
        >
          <h2 class="text-center mb-2 italic text-lg">Savings Account</h2>
          <h3 class="text-6xl lh-4 text-center ">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(savings)}
          </h3>
        </div>
        <div class="bg-green rounded-xl border-black border-2 p-2">
          <Savings {kid} />
       
        <Transfer bind:kid />
      </div>
        <div class="max-w-2xl flex flex-col items-center pt-4 pb-4 bg-pink rounded-xl mt-4 ">
          <Logout />
        </div>
      </div>
    </div>
  </div>
</div>
