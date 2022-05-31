<script lang="ts">
	import Register from './login/Register.svelte';
	import Login from './login/Login.svelte';

	let loginTab = true;
</script>

<div class="center col bg-green">
	<div class="w-100 bg-pink center">
		<div
			class="rounded-full m-8 bg-black w-60 h-60 center col text-white"
		>
			<h2 class="italic text-4xl">Bunny</h2>
			<h1 class="text-5xl">Money!</h1>
		</div>
	</div>

	{#if loginTab}
		<div class="pt-8 p-4">
			<label class="bg-yellow p-4 rounded-t-xl">
				<input type="radio" bind:group={loginTab} name="switchForm" value={true} class="hidden" />
				<h2 class="text-xl inline-block p-4 rounded-t-md">Login</h2>
			</label>
			<label class="p-4 ">
				<input type="radio" bind:group={loginTab} name="switchForm" value={false} class="hidden" />
				<h2 class="text-xl inline-block p-4 rounded-t-md">Register</h2>
			</label>
			<Login />
		</div>
	{:else}
		<div class="pt-8">
			<label class="p-4">
				<input type="radio" bind:group={loginTab} name="switchForm" value={true} class="hidden" />
				<h2 class="text-xl inline-block p-4">Login</h2>
			</label>
			<label class="bg-yellow dark:bg-black dark:text-pink p-4 rounded-t-xl">
				<input type="radio" bind:group={loginTab} name="switchForm" value={false} class="hidden" />
				<h2 class="text-xl inline-block p-4">Register</h2>
			</label>
			<Register />
		</div>
	{/if}

	<div class="p-4 w-360">
		<h1 class="text-3xl m-4">The banking* app for kids</h1>

		<h3 class="text-2xl m-4">What is it?</h3>
		<p class="ml-4 mr-4">
			Bunny Money is a progressive web app for your phone that enables your child to learn to save.
		</p>
		<h4 class="text-xl m-4">Parent Component</h4>
		<p class="m-4">
			Parents can 'transfer' money to their kid's checking account. When the kid wants to buy
			something, they use the app to request it in cash, thus turning the parents into atms
			essentially.
		</p>
		<p class="m-4">
			You can, add/remove kids, adjust the allowance ammount and period, as well as set up a savings
			account interest rate, and compound period.
		</p>
		<h4 class="text-xl m-4">Kid Component</h4>
		<p class="m-4">
			When a kid logs into their (parent-created) account, they can see how much money they have in
			their checking and/or savings accounts. From their checking account, they can request money,
			or withdraw money, as well as see the past 30 transactions. Make sure not to withdraw more
			than you have, or you'll have a negative balance, which accumulates penalties!
		</p>
		<p class="m-4">
			In their savings account, they can watch their money grow by accumulating interest. They can
			also transfer money to their checking accounts. Money in savings cannot be directly withdrawn
			by kid or parent.
		</p>

		<h5 class="text-sm m-4 italic">*not a real bank, more of a sim, really</h5>

		<h2 class="text-3xl m-4">Coming soon</h2>
	</div>
</div>