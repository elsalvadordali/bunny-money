<script lang="ts" type="module">
	import type { userType } from '../types';
	import Account from './Account.svelte';
	import CreateKid from '../login/Create.svelte';
	import Logout from '../login/Logout.svelte'
	import Pending from './Pending.svelte'
	import { fetchUser } from '../checkAuth';
	import { parent } from '../stores';

	let user: userType = null;
	parent.subscribe((val) => (user = val));
	if (user == null) fetchUser();

    let src = '/images/user-circle.svg'
	let newKidModal = false;

	
</script>

<div class="bg-green">
	{#if newKidModal}
		<CreateKid bind:value={newKidModal} />
	{/if}
	<div class='h-full p-2'>
		<h3 class="m-6">
			Welcome,
			<p class="underline">
				parental unit <img {src} class="h-5 inline middle" alt="generic user icon" />
        </p>
		</h3>
		{#if user && user.kids.length == 0}
			<div class="bg-pink border-black border-2 rounded-xl shaded p-2 pt-8 pb-8 center col shaded">
				<p class="m-4">No kids accounts set up yet.</p>
				<button
					on:click={() => (newKidModal = !newKidModal)}
					class="border-black border-2 rounded-md p-2 pl-6 pr-6 mb-1 green-shaded bg-black text-white ">
					Create now
				</button>
			</div>

		{:else if user}
			<Pending {user} />
			{#each user.kids as account}
				<div class="border-b-2 border-yellow">
                    <Account kid={account}/>
				</div>
			{/each}
			<div
				class="bg-pink border-black border-2 shaded rounded-xl m-2 p-2 mt-8 mb-8 pt-8 pb-8 center">
				<button
					on:click={() => (newKidModal = !newKidModal)}
					class="border-black border-2 rounded-md shaded mb-1 p-2 pl-6 pr-6 bg-yellow">
					Create another account
				</button>
			</div>
			<div class='center'>
				<Logout />
			</div>
		{/if}
	</div>
</div>