<script>
    export let currentColor

    const initial = currentColor
</script>

<style>
    span {
        display: inline-block;
        padding: 0.2em 0.5em;
        margin: 0 0.2em 0.2em 0;
        width: 4em;
        text-align: center;
        border-radius: 0.2em;
        color: white;
    }
</style>

<p>
    <span style="background-color: {initial}">Initial</span>
    <span style="background-color: {currentColor}">Current Color</span>
</p>
