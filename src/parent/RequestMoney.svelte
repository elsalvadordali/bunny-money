<script lang="ts">
	import { doc, updateDoc } from 'firebase/firestore';
	import Toast from '../Toast.svelte';
	import { db } from '../checkAuth';
	import type { kidObj, userType } from '../types';
	import { parent } from '../stores';
	import { convertDate2String } from '../scripts';
	export let kid: kidObj = null;
	let requestedAmount = 0;
	let memo = '';
	let user: userType;

	let visible = false;
	let toast = '';
	let showMore = false;
	parent.subscribe((val) => (user = val));

	async function requestMoney() {
		if (requestedAmount <= 0) {
			toast = 'Request more than 0.';
			visible = true;
			requestedAmount = 0;
			return;
		}
		if (kid) {
			kid.pending.push({
				date: convertDate2String(new Date()),
				amount: requestedAmount * -1,
				memo
			});
			if (user) {
				let newKids = user.kids.map((eachKid: kidObj) => {
					if (eachKid && kid && eachKid.name == kid.name) {
						return kid;
					} else {
						return eachKid;
					}
				});
				const parRef = doc(db, 'parents', user.uid);
				await updateDoc(parRef, { kids: newKids });
				parent.updateKids(newKids);
				parent.subscribe((val) => (user = val));
				toast = `Requested \$${requestedAmount} from ${kid.name}`;
				visible = true;
				requestedAmount = 0;
				memo = '';
				showMore = false
			}
		}
	}
</script>

<div class="w-full">
	<Toast bind:visible={visible} bind:message={toast} />
	{#if showMore}
	<button
		on:click={() => (showMore = !showMore)}
		class='underline bg-yellow link'>
		Close X
	</button>
	{:else}
	<button class='underline bg-yellow link' on:click={() => showMore = !showMore}>Request payment</button>

	{/if}
	{#if showMore}
		<div class="w-full border-black border-2 rounded-xl shaded p-2 mb-4">
			<h3 class="text-xl p-2">Request payment</h3>
			<div class="grid grid-cols-3 grid-row-3 gap-4">
				<input
					id="add"
					type="number"
					max="0"
					min="100000"
					bind:value={requestedAmount}
					placeholder="0"
					class=" p-2 outline-none text-center col-start-1 row-start-1 bg-pink rounded-md shaded big-shade w-88 right"
				/>

				<label for="add" class="text-center italic row-start-1 col-start-2 col-end-4 pt-2"
					>(from checking)</label
				>
				<label for="memo" class="col-start-1 row-start-2 text-center pt-2">Memo</label>
				<input
					id="memo"
					type="text"
					maxlength="50"
					bind:value={memo}
					placeholder="for movie tickets"
					class="p-2 outline-none row-start-2 col-start-2 col-end-4 bg-pink rounded-md shaded big-shade"
				/>
				<button
					on:click={requestMoney}
					class="bg-green border-black shaded border-2 p-2 pl-6 pr-6 rounded-md col-start-3 row-start-3 mb-1 h-5"
					>request</button
				>
			</div>
		</div>
	{/if}
</div>

<style>
	button.link {
        margin-top: 0;
        cursor: pointer;
        display: block;
    }
</style>