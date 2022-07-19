
<script lang="ts">
	import type { kidObj, userType } from './types';
	import Kid from './kid/index.svelte'
	import Parent from './parent/index.svelte'
	import Splash from './Splash.svelte'
	import { parent } from './stores';
	import { fetchUser } from './checkAuth';
	import { onMount } from 'svelte';
	import Toast from './Toast.svelte'

	let message = ''
	let visible = false

	let user: userType | kidObj | null = null
	parent.subscribe((val) => (user = val));
	
</script>
     
{#if user}
	{#if user.uid && user.isParent == false}
		<Kid />
	{:else if user.uid && user.isParent}
		<Parent />
	{:else if user.uid}
	<Toast bind:visible={visible} bind:message={message} />
		<Splash />
	{/if}
{:else}
<Splash />
{/if}
