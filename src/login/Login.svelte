
<script lang="ts">
	import type { kidObj, userType } from '../types';
	import Toast from '../Toast.svelte';
	import { auth, db } from '../checkAuth';
	import { getDoc, doc } from 'firebase/firestore';
	import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
	import { parent } from '../stores';
	import Confirm from '../Confirm.svelte';

	let message = 'a little message';
	let visible = false;
	let boxOpen = false;
	let email = '';
	let password = '';
	let name = '';
	let isParent = true;
	let user: userType = null;
	let kid: kidObj | null | 0 = null;

	const loginOO = async() => {
	}

	const login = async (e) => {

		if (isParent) {
			
			await signInWithEmailAndPassword(auth, email, password)
			.then(async (value) => {
				const parRef = doc(db, 'parents', value.user.uid)
				let userData = await getDoc(parRef)
				if (userData) {
					let gottedData = userData.data()
					parent.set({...gottedData})
				}
			})
			.catch((err) => {
				if (err.code === 'auth/user-not-found') {
					message = 'Account not found. Is it a typo?'
					visible = true
				} else {
					message = 'as unspecified error occured'
					visible = true
				}
			})
			
		} else {
			if (name) localStorage.setItem('name', name);
			
			await signInWithEmailAndPassword(auth, email, password)
			.then(async (value) => {
				const parRef = doc(db, 'parents', value.user.uid)
				let userData = await getDoc(parRef)
				if (userData) {
					let gottedData = userData.data()
					gottedData.isParent = false
					let kid = gottedData.kids.find((arrKid: kidObj) => {
						if (arrKid && arrKid.name.toLowerCase() == name.toLowerCase()) {
							return arrKid;
						}
					});
					if (kid) {
						parent.set(kid);
					} else {
						message = 'That kid account does not seem to exist'
						visible = true
						auth.signOut()
						signOut(auth)
						localStorage.clear()
					}

				}
			})
			
		}
	}

	const loginOOO = async (e) => {
		e.preventDefault()
		if (name) localStorage.setItem('name', name);

		await signInWithEmailAndPassword(auth, email, password)
			.then(async (value) => {
				const parRef = doc(db, 'parents', value.user.uid);
				let data = await getDoc(parRef);
				let parsedData = data.data();
				if (name) {
					if(parsedData && parsedData.kids.length > 0) {
					kid = parsedData.kids.find((arrKid: kidObj) => {
						if (arrKid && arrKid.name.toLowerCase() == name.toLowerCase()) {
							return arrKid;
						}
					});
					if (kid) {
						parent.set(kid);
						parent.subscribe((val) => (user = val));
					} else {
						auth.signOut()
						localStorage.clear()
						message = 'No such kid found';
						visible = true;
						name = '';
						boxOpen = true;
					}

					} else {
						message = 'No such kid';
						visible = true;
						
					}
					
				} 
			})
			.catch((err) => {
				if (err.code === 'auth/user-not-found') {
					message = 'Account not found. Is it a typo?'
					visible = true
				} else {
					message = 'as unspecified error occured'
					visible = true
				}
			});
	};


</script>

<Confirm bind:boxOpen {message} />
<div class="bg-yellow rounded-r-xl rounded-b-xl p-2 mb-8">
	{isParent}
	<form on:submit|preventDefault={login} class="grid grid-row-5 grid-col-4 gap-4 w-full stretch">
		{#if isParent}
		<label class="border-black border-b-2 italic selected clickable col-start-1 row-start-1"
		><input type="radio" class="hidden" bind:group={isParent} value={true} />Parent login</label
	>
	<label class="clickable col-end-2 row-start-1 "
		><input type="radio" class="hidden" bind:group={isParent} value={false} />Kid login</label
	>
		{:else}
			<label class="clickable col-start-1 row-start-1"
				><input type="radio" class="hidden" bind:group={isParent} value={true} />Parent login</label
			>
			<label class="border-black border-b-2 italic selected clickable col-start-2 row-start-1"
				><input type="radio" class="hidden" bind:group={isParent} value={false} />Kid login</label
			>
		{/if}
		<label for="email" class=" inline-block col-start-1 row-start-2">E-mail</label>
		<input
			type="email"
			autocapitalize="off"
			class="p-2 rounded-md col-start-2 h-12 row-start-2 bg-pink shaded big-shade stretch"
			name="email"
			id="email"
			bind:value={email}
			required
		/>
		<label for="password" class="inline-block col-start-1 row-start-3">Password</label>
		<input
			type="password"
			autocapitalize="off"
			minlength="6"
			maxlength="32"
			class="p-2 rounded-md col-start-2 row-start-3 bg-pink shaded big-shade stretch"
			name="password"
			id="password"
			bind:value={password}
			required
		/>
		{#if !isParent}
			<label for="name" class=" inline-block col-start-1 row-start-4">Kid's name</label>
			<input
				type="text"
				class="p-2 rounded-md col-start-2 row-start-4 bg-pink shaded big-shade stretch"
				name="name"
				id="name"
				bind:value={name}
				required
			/>
		{/if}

		<button
			type="submit"
			class="p-2 row-start-5 col-start-1 rounded-md border-black mb-1 border-2 bg-pink shaded single-line pl-6 pr-6 mr-4"
			>Submit</button
		>
		<div class="col-start-2 row-start-5">
			<a href="/reset-password" class="p-2 underline">Forgot password?</a>
		</div>
	</form>
</div>
<Toast bind:visible={visible} bind:message={message} />

<style>
	.selected::before {
		content: '>> ';
	}
</style>