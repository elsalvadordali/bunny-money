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
		
	};
</script>

	<Toast {message} {visible} />
	<button on:click={() => logout()} class="text-black rounded-md p-2 pl-6 pr-6 border-black border-2 bg-pink shaded big-shade"
		>Log out</button>

