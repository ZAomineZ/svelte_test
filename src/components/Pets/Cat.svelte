<script>
    let cats = [
        {id: 'a22d45d5adad8ad', name: 'Black Cat'},
        {id: 'b55fzffz6bvdade', name: 'Maru'},
        {id: 'cfaf56894faf56f', name: 'Gardfield'}
    ]
</script>

<h1>The Famous Cats of Youtube</h1>

<ul>
    {#each cats as cat, i}
        <li>
            <a href="https://www.youtube.com/watch?v={cat.id}" target="_blank">
                {i + 1}: {cat.name}
            </a>
        </li>
    {/each}
</ul>
