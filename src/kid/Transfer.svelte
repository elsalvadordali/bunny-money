<script lang="ts">
import { updateKid } from "../checkAuth";
import { parent } from '../stores'
import { convertDate2String, verifyAmount } from "../scripts";
import Toast from "../Toast.svelte";
import { listen } from "svelte/internal";
    export let kid = null
            

    let openBox = true
    let checking2savings = true
    let amount = 0
    let visible = false
    let message = ''
    function transfer() {
        let amt = verifyAmount(amount.toString())
        if (amt && kid) {
            if (checking2savings && kid.checkingAccount.balance > amt) {
                kid.checkingAccount.balance -= amt
                kid.savingsAccount.balance += amt
                kid.savingsAccount.transactions.push({date: convertDate2String(new Date()), memo: 'transfer from checking', amount: amt, currentBalance: kid.savingsAccount.balance})
            } else if (!checking2savings && kid.savingsAccount.balance > amt) {
                kid.savingsAccount.balance -= amt
                kid.checkingAccount.balance += amt
                kid.checkingAccount.transactions.push({date: convertDate2String(new Date()), memo: 'transfer from savings', amount: amt, currentBalance: kid.checkingAccount.balance})
            } else {
                console.log('is bad')
                message = 'amount must be available in account!'
                return visible = true
            }
        } else {
            let res = updateKid(kid)
            console.log(res, kid)
            if (res) {
                parent.updateKid(kid)
                message = 'please try a valid amount'
                visible = true
            } else {
                message = 'something went wrong'
                visible = true
            }

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
        <div class='flex line'>
            
            
        </div>
        <div class="grid grid-col-3 grid-row-3 gap-4">
            <p class='col-start-1  row-start-1'>from: {checking2savings ? 'checking' : 'savings'}</p>
            <button class='col-start-2 row-start-1 border-black border-2 rounded-md bg-yellow inline p-2 pl-6 pr-6 shaded big-shade mb-1 right' on:click={() => checking2savings = !checking2savings}>&#8646;</button>
            <p class="col-start-3 row-start-1">to: {checking2savings ? 'savings' : 'checking'}</p>
            <label for='amount' class="col-start-1 row-start-2">Amount</label>
            <input type=number required id='amount' bind:value={amount} class="col-start-2 col-end-4 mb-1 w-16 row-start-2 bg-yellow rounded-md shaded big-shade" /> 
            <button on:click={transfer} class="col-start-3 row-start-3 bg-pink rounded-md border-black border-2 shaded mb-1">Transfer</button>
        </div>
    </div>
    {/if}
</div>

<style>
    input {
    
    }
</style>