<script lang="ts">
	import type { kidObj, userType } from '../types';
	import Toast from '../Toast.svelte';
	import Allowance from '../components/Allowance.svelte';
	import Interest from '../components/Interest.svelte';
	import { db } from '../checkAuth';
	import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
	import { parent } from '../stores';
	import { verifyAmount } from '../scripts';

	export let value = true;

	let message = '';
	let visible = false;
	let openChecking = true;
	let openSavings = false;
	let user: userType = null;
	parent.subscribe((val) => (user = val));
	console.log(user.kids.length)
	let kid: kidObj = {
		name: '',
		kid: user.kids.length > 0 ? user.kids[user.kids.length - 1].kid + 1 : 1, 
		isParent: false,
		uid: user.uid || '',
		checkingAccount: {
			type: 'checking',
			balance: 0,
			allowance: 0,
			frequency: 'week',
			transactions: []
		},
		savingsAccount: {
			type: 'savings',
			balance: 0,
			interest: 0,
			compounded: 'week',
			transactions: []
		},
		pending: []
	};

	async function createKid(e: Event) {
		e.preventDefault();

		if (kid && kid.name.length <= 1) {
			message = 'Name is too short!';
			visible = true;
			kid.name = '';
			kid.kid = user.kids.length + 1;
			return;
		}
		if (kid) {
			kid.checkingAccount.balance = verifyAmount(kid.checkingAccount.balance.toString()) || 0;
			kid.checkingAccount.allowance = verifyAmount(kid.checkingAccount.allowance.toString()) || 0;
			kid.savingsAccount.balance = verifyAmount(kid.savingsAccount.balance.toString()) || 0;
			kid.savingsAccount.interest = verifyAmount(kid.savingsAccount.interest.toString()) || 0;

			if (user && user.uid) {
				user.kids.push(kid)
				const parRef = doc(db, 'parents', user.uid);
				await updateDoc(parRef, user);
				parent.set(user)
				value = false;
			}
		}
	}

	function clickOutside(node: any) {
		const handleClick = (event: Event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

{#if kid}

<Toast bind:visible={visible} bind:message={message} />

<div class="bg-black75 w-full absolute center scroll-content">
    <div class="bg-yellow col border-black border-2 p-2 rounded-xl shaded m-4 w-360">
		<div class="m-4 p-4 mt-8 m-8 center justify-end w-full">
			<button class="text-black border-black bg-pink border-2 rounded-md p-2 pl-4 pr-4 mb-1 shaded" on:click={() => (value = false)}>Close X</button>
		</div>
		<div class='line border-black border-2 shaded rounded-xl mb-4 w-full'>
			<label for='name' class='p-2 w-13'>Kid's name</label>
			<input type='text' class='bg-green w-23 rounded-md shaded middle big-shade m-4' bind:value={kid.name} />
		</div>
		<div class="border-black border-2 shaded rounded-xl mb-4 w-full">
			<h2 class="text-3xl p-2">Checking Account</h2>
			<div class='line p-2 justify-between'>
				<label for='initialChecking' class="w-13 ">Initial Amount</label>
				<input type='number' class="bg-green w-50 rounded-md shaded big-shade" bind:value={kid.checkingAccount.balance} />
			</div>
			<div class="p-2">
				<h3 class="text-xl">set up allowance (optional)</h3>
				<Allowance {kid} />
			</div>
		</div>
		<div class="border-black border-2 shaded rounded-xl mb-4 w-full">
			<h2 class="text-3xl p-4">Savings Account</h2>
			<div class='line mb-4 mt-4'>
				<label for='initialChecking' class="w-13 m-4">Initial Amount</label>
				<input type='number' class="bg-pink w-23 m-4 rounded-md shaded big-shade" bind:value={kid.savingsAccount.balance} />
			</div>
			<h3 class="text-xl p-4">set up interest (optional)</h3>
			<div class="p-2 mb-0">
				<Interest {kid} />
			</div>
		</div>
		<div class="center justify-end w-full">
			<button class="text-black rounded-md bg-yellow border-black border-2 mb-1 shaded big-shade" on:click={createKid}>Create new Account</button>
		</div>
	</div>
</div>
{/if}

<style>
</style>
