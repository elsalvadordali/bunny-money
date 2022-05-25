<script lang="ts" type="module">
import Toast from '../Toast.svelte';
	import { auth, db, fetchUser } from '../checkAuth';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';

	let email = '';
	let password = '';
	let confirmPassword = ''
	let message = '';
	let visible = false;

	const register = async (e: Event) => {
		e.preventDefault();
		if (email && password) {
			try {
			let user = await createUserWithEmailAndPassword(auth, email, password);
			//fetchUser()
		} catch (err) {
			if (err.code == 'auth/email-already-in-use')
			message = 'This email address already has an account!'
			visible = true
			email = ''
			password = ''
		}
		} else {
			message = 'Make sure both the email and password fields are set';
			visible = true
		}
	};

</script>

<div class="bg-yellow rounded-xl p-2 mb-8">
	<Toast bind:visible={visible} bind:message={message} />
	<form on:submit|preventDefault={register} class="grid grid-row-5 grid-col-4 gap-4 w-full ">
		<label on:submit={register} for="email" class="col-start-1 row-start-1 mb-4">E-mail</label>
		<input
			autocapitalize="false"
			type="email"
			name="email"
			class="w-11/12 p-2 rounded-md outline-none col-start-2 row-start-1 bg-pink shaded big-shade clickable stretch"
			id="email"
			bind:value={email}
		/>
		<label for="password" class="row-start-2 col-start-1">Password</label>
		<input
			type="password"
			name="password"
			class="w-11/12 p-2 rounded-md outline-none row-start-2 col-start-2 shaded big-shade {password == confirmPassword ? 'bg-green' : 'bg-pink'}"
			id="password"
			bind:value={password}
		/>
		<label for="confirmPassword" class="row-start-3 col-start-1">Confirm Password</label>
		<input
			type="password"
			name="confirmPassword"
			class="w-11/12 p-2 rounded-md outline-none row-start-3 col-start-2 shaded big-shade {password == confirmPassword ? 'bg-green' : 'bg-pink'}"
			id="confirmPassword"
			bind:value={confirmPassword}
		/>
		<button
			class="p-2 pl-6 pr-6 row-start-4 col-start-1 rounded-md outline-none border-black border-2 mb-1 bg-green shaded big-shade"
			type="submit">Register</button
		>
	</form>
</div>
