<script type="ts">
	import type { kidObj } from '../types';
	import { parent } from '../stores';
	import Toast from '../Toast.svelte';
	import EditChecking from './EditChecking.svelte';
	import EditSavings from './EditSavings.svelte';
	import { updateKid } from '../checkAuth'

	export let kid: kidObj = null;
	let user;
	parent.subscribe((val) => (user = val));

	let openEdit = false;
	let message = ''
	let visible = false
	let newName = kid.name
	let openSavings = false
	let openChecking = false
	function updateName() {
		if (user) {
			message = 'updated successfully!'
			visible = true
			updateKid(kid, user.uid);
			parent.updateKid(kid);
		}
	}


</script>

{#if kid}
	<EditChecking bind:openChecking {kid} />
	<EditSavings bind:openSavings {kid} />

	<Toast bind:visible={visible} bind:message={message} />
	<div
		class="bg-pink rounded-xl border-black border-2 shaded m-2 p-2 mb-4 mt-4 center col shadow-md"
	>

		<div class="w-full row line p-6 border-black border-b-2">
				<input
					type="text"
					id="name"
					bind:value={newName}
					class="w-25 italic outline-none inline text-2xl text-center border-black border-b-2 bg-pink mr-6"
				/>
				{#if newName != kid.name}
					<button on:click={updateName}
					class="bg-yellow border-black border-2 rounded-md p-2 pl-6 pr-6 mb-1 shaded">
					Save Changes</button>
				{/if}
		
		</div>
		<div class="w-full grid grid-rows-1 grid-col-2 gap-4">
			<div class="w-full center col p-4 pt-12 pb-8 pr-6 border-black border-r-2">
				<h3 class="text-2xl">${kid.checkingAccount.balance.toFixed(2)}</h3>
				<h6>{kid.checkingAccount.type}</h6>
				<button on:click={() => openChecking = true} class="border-black border-2 rounded-md mb-1 bg-yellow shaded">Edit</button>
			</div>
			<div class="w-full center col p-4 pt-12 pb-8">
				<h3 class="text-2xl">${kid.savingsAccount.balance.toFixed(2)}</h3>
				<h6>{kid.savingsAccount.type}</h6>
				<button on:click={() => openSavings = true} class="border-black border-2 rounded-md mb-1 bg-green shaded">Edit</button>

			</div>
		</div>
	</div>
{/if}
