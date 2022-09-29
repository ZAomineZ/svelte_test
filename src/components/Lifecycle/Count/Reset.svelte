<script>
    import { count } from './Store'

    function reset()
    {
        count.set(0)
    }
</script>

<button on:click={reset}>Reset</button>
