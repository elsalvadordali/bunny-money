<script lang="ts">
  import Register from './login/Register.svelte'
  import Login from './login/Login.svelte'

  let loginTab = true
</script>

<div class="flex flex-col bg-green align-center items-center">
  <div class="w-100 bg-pink flex justify-center pt-32 pb-16 self-stretch">
    <div class="rounded-full bg-amber w-60 h-60" />
    <div class="bunnay" />
  </div>
  <div
    class="bg-yellow pt-36 pb-36 self-stretch flex flex-col items-center flex-wrap"
  >
    <h1 class="text-5xl m-5">Bunny</h1>
    <h2 class="text-5xl m-5">Money</h2>
  </div>
  {#if loginTab}
    <div class="pt-8 p-2 w-full flex flex-col max-w-xl">
      <div class="w-90">
        <label class="bg-amber inline-block pt-2 pb-2 rounded-t-xl w-half">
          <input
            type="radio"
            bind:group={loginTab}
            name="switchForm"
            value={true}
            class="hidden"
          />
          <h2 class="text-xl inline-block p-4 rounded-t-md">Login</h2>
        </label>
        <label class="pt-2 pb-2 inline-block w-half">
          <input
            type="radio"
            bind:group={loginTab}
            name="switchForm"
            value={false}
            class="hidden"
          />
          <h2 class="text-xl inline-block p-4 rounded-t-md ">Register</h2>
        </label>
      </div>
      <Login />
    </div>
  {:else}
    <div class="pt-8 p-2 w-full flex flex-col max-w-xl">
      <div class="w-90 reverse">
        <label class="pt-2 pb-2 inline-block w-half">
          <input
            type="radio"
            bind:group={loginTab}
            name="switchForm"
            value={true}
            class="hidden"
          />
          <h2 class="text-xl inline-block p-4">Login</h2>
        </label>
        <label class="bg-amber inline-block pt-2 pb-2 rounded-t-xl w-half">
          <input
            type="radio"
            bind:group={loginTab}
            name="switchForm"
            value={false}
            class="hidden"
          />
          <h2 class="text-xl inline-block p-4">Register</h2>
        </label>
      </div>
      <Register />
    </div>
  {/if}

  <div class="p-4 max-w-5xl ">
    <h1 class="text-3xl m-4">The banking* app for kids</h1>
    <ul
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
    >
      <li
        class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center"
      >
        <h3>Teach your kid financial literacy</h3>
        <p>
          Let them control their account, while being the bank behind the scene
        </p>
      </li>
      <li
        class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center"
      >
        <h2>Easy to use</h2>
        <p>No credit cards. No paper work. Just virtual accounts</p>
      </li>
      <li
        class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center"
      >
        <h2>Download on your phone</h2>
        <p>Save to your homescreen and access it anywhere</p>
      </li>
      <li
        class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center"
      >
        <h2>No ads! Ever</h2>
        <p>Ads on kids apps should be illegal</p>
      </li>
      <li
        class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center"
      >
        <h2>Set custom interest rates on savings</h2>
        <p>You control the amount and the time frame</p>
      </li>
      <li
        class="pl-16 carrot rounded-xl border-black border-2 flex flex-col justify-center"
      >
        <h2>It's not real</h2>
        <p>It's basically a sim, where the parent is the bank. Don't overthing it</p>
      </li>
    </ul>

    <h1 class="text-3xl m-4 text-center">Parents have the power</h1>
    <h3 class="text-2xl m-4 text-center">You are the bank!</h3>
  </div>
</div>

<style>
  .carrot {
    background: url('/carrot.png');
    background-position: 5% center;
    background-size: 10%;
    background-repeat: no-repeat;
    height: 200px;
    width: 300px;
    box-shadow: 2px 2px 0 black;
  }
  .bunnay {
    background: url('./bunny.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 300px;
    height: 360px;
    position: absolute;
    top: 10px;
  }
</style>
