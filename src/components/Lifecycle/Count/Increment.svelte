<script>
    import { count } from './Store.js'

    function increment()
    {
        count.update(n => n + 1)
    }
</script>

<button on:click={increment}>+</button>
