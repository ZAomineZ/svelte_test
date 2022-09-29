<script>
    import { count } from './Store.js'

    function decrement()
    {
        count.update(n => n - 1)
    }
</script>

<button on:click={decrement}>-</button>
