<script type="ts">
	import type { kidObj, userType } from '../types';
	import AddAllowance from './AddAllowance.svelte';
	import Allowance from '../components/Allowance.svelte';
	import Interest from '../components/Interest.svelte';
	import RequestMoney from './RequestMoney.svelte'
	import Toast from '../Toast.svelte';
	import { parent } from '../stores';
	import { deleteKid, updateKid } from '../checkAuth';

	export let openEdit = false;
	export let kid: kidObj = null;
	
	let visible = false
	let message = ''
	let newName = '';
	if (kid) newName = kid.name;

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

	let user: userType = null;
	parent.subscribe((val) => (user = val));

	const deleteChild = () => {
		let newArr =
			user &&
			user.kids.filter((arrKid) => {
				if (arrKid && kid && arrKid.name != kid.name) return arrKid;
			});
		if (newArr && user) deleteKid(newArr, user.uid);
		else {
			message = 'an unspecified error has occured'
			return visible = true
		}
		message = 'kid successfully deleted'
		visible = true
		openEdit = false;
	};

	function updateCurrentKid() {
		if (user) {
			message = 'updated successfully!'
			visible = true
			updateKid(kid, user.uid);
			parent.updateKid(kid);
			
		}
	}
</script>

{#if kid}
	<Toast {message} {visible} />
	<div class="block w-full bg-black75 flex justify-center items-center absolute top-0 left-0 p-8">
		<div
			class="w-56 bg-pink rounded-xl shaded m-4 p-4 mt-8 m-8 center col"
			use:clickOutside
			on:click_outside={() => (openEdit = false)}
		>
			<div class="w-full flex flex-row justify-end">
				<button
					class="border-black bg-pink border-2 rounded-md shaded p-2 pl-4 pr-4 mb-1"
					on:click={() => (openEdit = false)}>Close X</button
				>
			</div>

			<div
				class="w-full m-4 justify-evenly bg-green border-black border-2 rounded-xl p-2 pt-8 pb-8 shaded"
			>
				<label for="name" class="pt-2">change name</label>
				<input
					type="text"
					id="name"
					bind:value={newName}
					class="w-25 italic rounded-md bg-yellow outline-none inline text-2xl text-center shaded big-shade"
				/>
				{#if newName != kid.name}
					!!
				{/if}
			</div>
			<AddAllowance name={kid.name} />
			<RequestMoney {kid} />


			<div class="w-full border-black bg-yellow border-2 p-8 rounded-xl shaded m-4">
				<h2 class="mb-4">Adjust Allowance</h2>
				<h3>Current balance: ${kid.checkingAccount.balance.toFixed(2)}</h3>
				<div>
                    <Allowance bind:kid />
				</div>
			</div>

			<div class="w-full border-black border-2 p-8 m-4 rounded-xl shaded">
				<h2 class="mb-4">Adjust Interest</h2>
				<h3>Current balance: ${kid.savingsAccount.balance.toFixed(2)}</h3>
				{#if kid}
				<Interest bind:kid />
			{/if}
			</div>
			<button
				on:click={updateCurrentKid}
				class="p-2 pl-6 pr-6  border-black bg-green border-2 rounded-md shaded mb-8 big-margin"
				>Save changes</button
			>
			<button
				on:click={deleteChild}
				class="p-2 pl-6 pr-6 bg-pink border-black border-2 mb-1 rounded-md shaded big-shade button"
				>Delete child</button
			>
		</div>
	</div>
{/if}

<style>
	.big-margin:hover,
	.big-margin:active,
	.big-margin:focus {
		margin-top: 0.25rem;
		margin-bottom: 1.75rem;
		box-shadow: none;
	}
	.button:hover {
		margin-top: 0.25em;
		margin-bottom: 0;
		box-shadow: none;
	}
</style>
