<script lang="ts" type="module">
	import type { userType } from '../types';
	import Account from './Account.svelte';
	import CreateKid from '../login/Create.svelte';
	import Logout from '../login/Logout.svelte'
	import { fetchUser } from '../checkAuth';
	import { parent } from '../stores';

	let user: userType = null;
	parent.subscribe((val) => (user = val));
	if (user == null) fetchUser();

    let src = '/images/user-circle.svg'
	let newKidModal = false;
    console.log(user.kids.length)
</script>

<div class="bg-green">
	{#if newKidModal}
		<CreateKid bind:value={newKidModal} />
	{/if}
	<div class='h-full p-4'>
		<h3 class="m-6">
			Welcome,
			<p class="underline">
				parental unit <img {src} class="h-5 inline middle" alt="generic user icon" />
        </p>
		</h3>
		{#if user && user.kids.length == 0}
			<div
				class="bg-pink border-black border-2 rounded-xl shaded m-6 p-6 pt-16 pb-16 center col shaded"
			>
				<p class="m-4">No kids accounts set up yet.</p>
				<button
					on:click={() => (newKidModal = !newKidModal)}
					class="border-black border-2 rounded-md p-2 pl-6 pr-6 mb-1 green-shaded bg-black text-white "
				>
					Create now
				</button>
			</div>
		{:else if user}
			{#each user.kids as account}
				<div class="border-b-2 border-yellow">
                    <Account kid={account}/>
				</div>
			{/each}
			<div
				class="bg-pink border-black border-2 rounded-xl m-6 p-6 pt-16 pb-16 center"
			>
				<button
					on:click={() => (newKidModal = !newKidModal)}
					class="border-black border-2 rounded-md shaded mb-1 p-2 pl-6 pr-6 bg-yellow"
				>
					Create another account
				</button>
			</div>
			<div class='center'>
				<Logout />
			</div>
		{/if}
	</div>
</div>