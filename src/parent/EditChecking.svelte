<script lang="ts">
  import type { kidObj } from '../types'

  import AddFunds from './AddFunds.svelte'
  import RequestMoney from './RequestMoney.svelte'
  import Checking from '../components/Checking.svelte'

  window.scroll({
    top: 0,
    behavior: 'smooth'
  })

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
  export let kid: kidObj
  export let openChecking = false

  let seePreviousTransactions = false
</script>

{#if openChecking && kid}
  <div
    class="absolute flex flex-col items-center w-full h-full bg-black75 top-0 left-0 pb-6"
  >
    <div class="flex flex-col items-center w-full h-full max-w-xl pb-6">
      <div
        use:clickOutside
        on:click_outside={() => (openChecking = false)}
        class="bg-yellow border-black border-2 pb-6 pl-4 pr-4 pt-2 rounded-xl shaded w-full m-4 "
      >
        <div class="w-full flex flex-col justify-center items-end">
          <button
            class="bg-amber leading-6 rounded-md border-black border-2 shaded mb-1 big-shade text-4xl flex justify-center px-2 col-start-12 hover:mt-1 hover:mb-0"
            on:click={() => (openChecking = false)}>×</button
          >
        </div>
        <h3 class="text-2xl text-center">
          Current balance: {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(kid.checkingAccount.balance)}
        </h3>

        <RequestMoney {kid} />
        <AddFunds bind:name={kid.name} />
        <Checking {kid} />
      </div>      </div>
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
