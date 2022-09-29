<script>
    let todos = [
        { done: false, text: 'Finish Svelte tutorial' },
        { done: false, text: 'Build an app' },
        { done: false, text: 'World Domination' }
    ]
    let newTodo = ''
    let activeNewTodo = false

    function handleToggle()
    {
        activeNewTodo = !activeNewTodo
    }

    function add()
    {
        todos = todos.concat({
            done: false,
            text: newTodo
        })
        newTodo = ''
    }

    function clear()
    {
        todos = todos.filter((todo) => !todo.done)
    }

    $: remaining = todos.filter((todo) => !todo.done).length
</script>

<style>
    .done {
        opacity: 0.4;
    }
</style>

<h1>Todos</h1>

{#each todos as todo}
    <div class:done={todo.done}>
        <input type="checkbox" bind:checked={todo.done}>
        <input type="text" placeholder="What needs to be done ?" bind:value={todo.text}>
    </div>
{/each}

<p>{remaining} remainings</p>

<!-- INPUT Add Todo -->
{#if activeNewTodo}
    <div>
        <form on:submit|preventDefault={add}>
            <input type="text" bind:value={newTodo} placeholder="Your new todo...">
        </form>
    </div>
{/if}

<button on:click={handleToggle}>Add new</button>
<button on:click={clear}>Clear completed</button>
