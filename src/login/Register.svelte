<script lang="ts" type="module">
import Toast from '../Toast.svelte';
	import { auth, db } from '../checkAuth';
	import { doc, setDoc } from 'firebase/firestore';
	import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
	import { parent } from '../stores'

	let email = '';
	let password = '';
	let confirmPassword = ''
	let verifyEmail = true
	let message = '';
	let visible = false;

	const register = async (e: Event) => {
		e.preventDefault();
		if (email && password) {
			try {
			let user = await createUserWithEmailAndPassword(auth, email, password);
			const parRef = doc(db, 'parents', user.user.uid)
			setDoc(parRef, {isParent: true, kids: [], uid: user.user.uid})

			if (verifyEmail) {
				sendEmailVerification(auth.currentUser)
				message = 'email sent! now loggin in'
				visible = true
				
			} else {
				message = 'account created successfully. now logging in!'
				visible = true
			}
			setTimeout(() => {
					parent.set({isParent: true, kids: [], uid: user.user.uid})
				}, 5000)
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

<div class="bg-yellow rounded-xl p-2 mb-8 w-360">
	<Toast bind:visible={visible} bind:message={message} />
	<form on:submit|preventDefault={register} class="grid grid-row-6 grid-col-5 gap-4 w-full mt-4 mb-4">
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
		<label for='checkbox' class="row-start-4 col-start-1">Verify email?</label>
		<input id='checkbox' class='row-start-4 col-start-2' type='checkbox' bind:checked={verifyEmail}>
		<button
			class="p-2 pl-6 pr-6 row-start-5 col-start-1 rounded-md outline-none border-black border-2 mb-1 bg-green shaded big-shade"
			type="submit">Register
		</button>
		<p class='row-start-6 col-start-1 col-end-3'>*if you verify your email, you can reset your password should you forget it.</p>
	</form>
	{verifyEmail}
</div>

<style>
	
</style>
