<script lang="ts">
import { updateKid } from "../checkAuth";
import { parent } from '../stores'
import { convertDate2String, verifyAmount } from "../scripts";
import Toast from "../Toast.svelte";
    export let kid = null
            

    let userInput: string = ''
    let parsedUserInput: number = -1
    let userInputParseError: boolean = false

    // User inputs '1' -- userInput: '1', parsedUserInput: 1, userInputParseError: false
    // userInput: 'abc' -- userInput: 'abc', parsedUserInput: 1, userInputParseError: true
      // User attempts to submit -- is there an error? If so, then block submit, give user feedback



    let openBox = true
    let checking2savings = true
    let amount = 0
    let visible = false
    let message = ''

    /**
     * The main transfer function used to shuffle funds from one person to another... 
     **/ 
    function transfer() {
        console.log(amount)
        if (amount) {
            if (checking2savings && kid.checkingAccount.balance >= amount) {
                kid.checkingAccount.balance -= amount
                kid.savingsAccount.balance += amount
                kid.savingsAccount.transactions = [{date: convertDate2String(new Date()), memo: 'transfer from checking', amount, currentBalance: kid.savingsAccount.balance}, ...kid.savingsAccount.transactions]
            } else if (!checking2savings && kid.savingsAccount.balance >= amount) {
                kid.savingsAccount.balance -= amount
                kid.checkingAccount.balance += amount
                kid.checkingAccount.transactions = [{date: convertDate2String(new Date()), memo: 'transfer from savings', amount, currentBalance: kid.checkingAccount.balance}, ...kid.checkingAccount.transactions]
            } else {
                message = 'amount must be available in account!'
                return visible = true
            }
            updateKid(kid)
            parent.updateKid(kid)
            message = 'transfered succcessfully'
            visible = true
        } else {
            message = 'please try a valid amount'
            visible = true
        }
    }

</script>

<div class="bg-green rounded-xl mb-4 mt-4 p-2">
    <Toast bind:message={message} bind:visible={visible} />
    <button
		on:click={() => openBox = !openBox}
		class="link underline bg-green">{openBox ? 'close x' : 'transfer money'}</button>
    {#if openBox}
    <div class='border-black border-2 rounded-xl p-2'>
        <h2 class='text-xl mb-4'>Transfer money</h2>
        <div class="grid grid-col-3 grid-row-3 gap-4">
            <p class='col-start-1 row-start-1'>from: {checking2savings ? 'checking' : 'savings'}</p>
            <button class='col-start-2 row-start-1 border-black border-2 rounded-md bg-yellow inline p-2 pl-6 pr-6 shaded big-shade mb-1 right' on:click={() => checking2savings = !checking2savings}>&#8646;</button>
            <p class="col-start-3 row-start-1">to: {checking2savings ? 'savings' : 'checking'}</p>
            <label for='amount' class="col-start-1 row-start-2">Amount</label>
            <input type=number required id='amount' bind:value={amount} class="col-start-2 col-end-4 mb-1 w-13 row-start-2 bg-yellow rounded-md shaded big-shade" /> 
            <button on:click={transfer} class="col-start-3 row-start-3 bg-pink rounded-md border-black border-2 shaded mb-1">Transfer</button>
        </div>
    </div>
    {/if}
</div>

<style>
   
</style>