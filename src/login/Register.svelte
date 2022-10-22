<script lang="ts" type="module">
  import Toast from '../Toast.svelte'
  import { auth, db } from '../checkAuth'
  import { doc, setDoc } from 'firebase/firestore'
  import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
  } from 'firebase/auth'
  import { parent } from '../stores'

  let email = ''
  let password = ''
  let confirmPassword = ''
  let verifyEmail = true
  let message = ''
  let visible = false

  const register = async (e: Event) => {
    e.preventDefault()
    if (email && password) {
      try {
        let user = await createUserWithEmailAndPassword(auth, email, password)
        const parRef = doc(db, 'parents', user.user.uid)
        setDoc(parRef, { isParent: true, kids: [], uid: user.user.uid })

        if (verifyEmail) {
          sendEmailVerification(auth.currentUser)
          message = 'email sent! now loggin in'
          visible = true
        } else {
          message = 'account created successfully. now logging in!'
          visible = true
        }
        setTimeout(() => {
          parent.set({ isParent: true, kids: [], uid: user.user.uid })
        }, 5000)
      } catch (err) {
        if (err.code == 'auth/email-already-in-use')
          message = 'This email address already has an account!'
        visible = true
        email = ''
        password = ''
      }
    } else {
      message = 'Make sure both the email and password fields are set'
      visible = true
    }
  }
</script>

<Toast bind:visible bind:message />
<div class="center col w-full">
  <div class="bg-amber rounded-xl p-2 pt-4 mb-8 w-90">
    <form
      on:submit|preventDefault={register}
      class="grid grid-row-6 grid-col-6 gap-4 stretch"
    >
      <label for="email" class=" inline-block col-start-1 col-span-2 row-start-2"
        >E-mail</label
      >
      <input
        type="email"
        autocapitalize="off"
        class="p-2 rounded-md col-start-2 col-span-3 row-start-2 bg-pink shaded big-shade w-90 outline-none"
        name="email"
        id="email"
        bind:value={email}
        required
      />
      <label for="password" class="inline-block col-start-1 col-span-2 row-start-3"
        >Password</label
      >
      <input
        type="password"
        autocapitalize="off"
        minlength="6"
        maxlength="32"
        class="p-2 rounded-md col-start-2 col-span-3 row-start-3 bg-pink shaded big-shade stretch outline-none"
        name="password"
        id="password"
        bind:value={password}
        required
      />
      <label for="confirmPassword" class="row-start-4 col-start-1 col-span-2"
        >Confirm password</label
      >
      <input
        type="password"
        class="p-2 rounded-md col-start-2 col-span-3 row-start-4 bg-pink shaded big-shade stretch outline-none"
        name="confirmPassword"
        id="confirmPassword"
        bind:value={confirmPassword}
        required
      />
      <label for="checkbox" class="row-start-5 col-start-1 col-span-2"
        >Send email validation? <sup>*</sup></label
      >
      <input type="checkbox" class="row-start-5 col-start-2 col-span-1 outline-none" />
      <button
        class="p-2 pl-6 pr-6 rounded-md outline-none border-black border-2 mb-1 bg-yellow shaded big-shade row-start-6 col-start-1 col-span-2 hover:mb-0 hover:mt-1"
        type="submit"
        >Register
      </button>
    </form>
    <p class="p-6">
      *if you verify your email, you can reset your password should you forget
      it.
    </p>
  </div>
</div>

<style>
</style>
