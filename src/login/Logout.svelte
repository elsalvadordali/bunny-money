<script lang="ts">
	import Toast from '../Toast.svelte';
	import { auth } from '../checkAuth';
	import { parent } from '../stores'

	var message = 'signed out successfully'
	let visible = false
	const logout = () => {
		visible = true
		localStorage.clear()
		auth.signOut();
		parent.set(null)
		window.scrollTo(0, 0);
	};
</script>

<Toast bind:visible={visible} bind:message={message} />
<button on:click={() => logout()} class="rounded-md border-black border-2 p-2 pl-6 pr-6 bg-pink mb-1 shaded big-shade hover:mb-0 hover:mt-1">Log out</button>

