<script lang="ts">
  import type { kidObj, userType } from '../types'
  import Toast from '../Toast.svelte'
  import { auth, db } from '../checkAuth'
  import { getDoc, doc } from 'firebase/firestore'
  import { signOut, signInWithEmailAndPassword } from 'firebase/auth'
  import { parent } from '../stores'
  import Confirm from '../Confirm.svelte'

  let message = 'a little message'
  let visible = false
  let boxOpen = false
  let email = ''
  let password = ''
  let name = ''
  let isParent = true
  //  let user: userType = null
  //  let kid: kidObj | null | 0 = null

  /**
   *
   * Takes the user input, checks if isParent, authenticates. If kid, checks if kid exists in firestore
   */
  const login = async () => {
    message = 'Logging in...'
    visible = true
    if (isParent) {
      await signInWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
          const parRef = doc(db, 'parents', value.user.uid)
          let userData = await getDoc(parRef)
          if (userData) {
            let receivedData: any = userData.data()
            parent.set({ ...receivedData })
          }
        })
        .catch((err) => {
          if (err.code === 'auth/user-not-found') {
            message = 'Account not found. Is it a typo?'
            visible = true
          } else {
            message = 'Something went wrong. Please try again.'
            visible = true
          }
        })
    } else {
      if (name) localStorage.setItem('name', name)
      await signInWithEmailAndPassword(auth, email, password).then(
        async (value) => {
          const parRef = doc(db, 'parents', value.user.uid)
          let userData = await getDoc(parRef)
          if (userData) {
            let gottedData = userData.data()
            gottedData.isParent = false
            let kid = gottedData.kids.find((arrKid: kidObj) => {
              if (arrKid && arrKid.name.toLowerCase() == name.toLowerCase()) {
                return arrKid
              }
            })
            if (kid) {
              parent.set(kid)
            } else {
              message = 'That kid account does not seem to exist'
              visible = true
              auth.signOut()
              signOut(auth)
              localStorage.clear()
            }
          }
        }
      )
    }
  }
</script>

<Confirm bind:boxOpen {message} />
<div class="center col w-full">
  <div id="login" class="bg-amber rounded-r-xl rounded-b-xl p-2 pt-8 mb-8">
    <form
      on:submit|preventDefault={login}
      class="grid grid-row-5 grid-col-6 gap-4 w-full stretch"
    >
      {#if isParent}
        <label
          class="border-black border-b-2 italic selected clickable col-start-1 col-end-3 row-start-1 mb-4"
          ><input
            type="radio"
            class="hidden"
            bind:group={isParent}
            value={true}
          />Parent login</label
        >
        <label class="clickable col-start-3 col-end-6 row-start-1 mb-4"
          ><input
            type="radio"
            class="hidden"
            bind:group={isParent}
            value={false}
          />Kid login</label
        >
      {:else}
        <label class="clickable col-start-1 col-end-3 row-start-1 mb-4"
          ><input
            type="radio"
            class="hidden"
            bind:group={isParent}
            value={true}
          />Parent login</label
        >
        <label
          class="border-black border-b-2 italic selected clickable col-start-3 col-end-6 row-start-1 mb-4"
          ><input
            type="radio"
            class="hidden"
            bind:group={isParent}
            value={false}
          />Kid login</label
        >
      {/if}
      <label for="email" class=" inline-block col-start-1 col-end-3 row-start-2"
        >E-mail</label
      >
      <input
        type="email"
        autocapitalize="off"
        class="p-2 rounded-md col-start-2 col-end-6 row-start-2 bg-pink shaded big-shade w-90 outline-none"
        name="email"
        id="email"
        bind:value={email}
        required
      />
      <label for="password" class="inline-block col-start-1 row-start-3"
        >Password</label
      >
      <input
        type="password"
        autocapitalize="off"
        minlength="6"
        maxlength="32"
        class="p-2 rounded-md col-start-2 col-end-6 row-start-3 bg-pink shaded big-shade w-90 outline-none"
        name="password"
        id="password"
        bind:value={password}
        required
      />
      {#if !isParent}
        <label for="name" class=" inline-block col-start-1 row-start-4"
          >Kid's name</label
        >
        <input
          type="text"
          minlength="1"
          maxlength="32"
          class="p-2 rounded-md col-start-2 col-end-6 row-start-4 bg-pink shaded big-shade w-90 outline-none"
          name="name"
          id="name"
          bind:value={name}
          required
        />
      {/if}

      <button
        type="submit"
        class="p-2 row-start-5 col-start-1 col-end-3 rounded-md border-black mb-1 border-2 bg-yellow shaded single-line pl-6 pr-6 mr-4 hover:mb-0 hover:mt-1"
        >Login</button
      >
      <div class="col-start-3 row-start-5 flex justify-center items-center">
        <a href="/reset-password" class="p-2 underline">Forgot password?</a>
      </div>
    </form>
  </div>
</div>
<Toast bind:visible bind:message />

<style>
  .selected::before {
    content: '>> ';
  }
  .selected {
    font-family: 'DM Serif Display', serif;
    letter-spacing: 1px;
  }
  input:user-invalid {
    background-color: #91bab2;
    content: '**';
  }
</style>
