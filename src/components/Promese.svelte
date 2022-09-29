<script>
    let promise = getRandomNumber()

    async function getRandomNumber() {
        const request = await fetch(`https://svelte.dev/tutorial/random-number`)
        const text = await request.text()
        if (request.status === 200 || request.status === 302) {
            return text
        } else throw new Error(text)
    }

    function handleClick() {
        promise = getRandomNumber()
    }
</script>

<button on:click={handleClick}>
    Generate ramdom number
</button>

{#await promise}
    <p>...waiting</p>
{:then result}
    <p>The number is {result}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
