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

	window.scroll(0,0)
	
</script>

<div class="bg-green cover scroll-content flex flex-col items-center">
	{#if newKidModal}
		<CreateKid bind:value={newKidModal} />
	{/if}
	<div class='p-2 max-w-2xl'>
		<h3 class="m-6">
			Welcome,
			<p class="underline">
				parental unit <img {src} class="h-5 inline middle" alt="generic user icon" />
        	</p>
		</h3>
		{#if user && user.kids.length == 0}
			<div class="center col p2">
				<p class="mt-4 mb-4">No kids accounts set up yet.</p>
				<button
					on:click={() => (newKidModal = !newKidModal)}
					class="bg-yellow rounded-md border-black border-2 shaded big-shade mb-1 p-2 pl-4 pr-4 hover:mb-0 hover:mt-1">
					Create now
				</button>
			</div>
			<div class='center mt-6'>
				<Logout />
			</div>
		{:else if user}
			<Pending {user} />
			{#each user.kids as account}
				<div class="border-b-2 border-yellow">
                    <Account kid={account}/>
				</div>
			{/each}
			<div
				class="bg-pink border-black border-2 shaded rounded-xl m-2 p-2 pt-8 pb-8 mb-4 mt-4 flex flex-col items-center">
				<button
					on:click={() => (newKidModal = !newKidModal)}
					class="border-black border-2 rounded-md shaded mb-1 p-2 pl-6 pr-6 bg-yellow hover:mb-0 hover:mt-1">
					Create another account
				</button>
			</div>
			<div class='flex flex-col items-center'>
				<Logout />
			</div>
		{/if}
	</div>
</div>