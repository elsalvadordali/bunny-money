
<script lang="ts">
	import type { kidObj, userType } from './types';
	import Kid from './kid/index.svelte'
	import Parent from './parent/index.svelte'
	import Splash from './Splash.svelte'
	import { parent } from './stores';
	import { fetchUser } from './checkAuth';
	import { onMount } from 'svelte';

	let user: userType | kidObj = null;
	parent.subscribe((val) => (user = val));
	let doneLoading = false;
	let res;
	onMount(() => {
			res = fetchUser();
			doneLoading = true;
	});
</script>

<div class="bg-green">
{#if user}
	{#if user && user.uid == '0'}
		SPLASH
	{:else if user.uid && !user.isParent}
		<Kid />
	{:else if user.uid}
		<Parent />
	{/if}
{:else if doneLoading}
	<Splash />
{:else}
	<div class="bg-green h-screen flex justify-center items-center">loading...</div>
{/if}
</div>
