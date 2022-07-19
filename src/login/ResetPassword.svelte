<script lang="ts">
    let show = true
</script>

{#if show}
<div>
    <h2>Reset password</h2>
    <label for='email'>email</label>
    <input type='email' id='email'>
    <button>Sumbit</button>
    <p>If you forgot your email, try creating a new account.</p>
</div>
{/if}