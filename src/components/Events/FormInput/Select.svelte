<script>
    let questions = [
        {id: 1, text: `Where did you go to school ?`},
        {id: 2, text: `What is your mother's name?`},
        {id: 3, text: `What is another personal fact that an attacker could easily find with Google?`}
    ]
    let selected
    let answer = ''

    function handleSubmit() {
        alert(`Answered question ${selected.id} (${selected.text}) with "${answer}"`)
    }
</script>

<style>
    input {
        display: block;
        width: 500px;
        max-width: 100%;
    }
</style>

<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
    <select bind:value={selected} on:change={() => answer = ''}>
        {#each questions as question}
            <option value={question}>
                {question.text}
            </option>
        {/each}
    </select>
    <input type="text" bind:value={answer}>

    <button disabled={answer === ''} type="submit">
        Submit
    </button>
</form>

<p>Seelcted question {selected ? selected.id : '[waiting...]'}</p>
