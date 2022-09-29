<script>
    import marked from 'marked'

    let value = `Some words are *italic*, some re **bold**`
</script>

<textarea rows="10" col="20" bind:value></textarea>

{@html marked(value)}
