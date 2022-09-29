<script>
    let a = 1
    let b = 2

    let message = null

    /**
     * @param {Event} event
     */
    function handleChangeValue(event) {
        if (a > 10 || b > 10) message = 'Impossible de réaliser cette action !'
    }
</script>

{#if message !== null}
    <h2 style="color: red">{message}</h2>
{:else}
    <label>
        <input type="number" bind:value={a} on:change={handleChangeValue} min="0" max="10">
        <input type="range" bind:value={a} on:change={handleChangeValue} min="0" max="10">
    </label>

    <label>
        <input type="number" bind:value={b} on:change={handleChangeValue} min="0" max="10">
        <input type="range" bind:value={b} on:change={handleChangeValue} min="0" max="10">
    </label>

    <p>{a} + {b} = {(a + b)}</p>
{/if}
