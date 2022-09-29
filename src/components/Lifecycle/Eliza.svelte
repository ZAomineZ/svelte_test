<script>
    import Eliza from 'elizabot'
    import {afterUpdate, beforeUpdate} from 'svelte'

    let div
    let autoscroll
    // Comments elizabot value
    const eliza = new Eliza()
    let comments = [{author: 'eliza', text: eliza.getInitial()}]

    /**
     * @param {Event} event
     */
    function handleKeydown(event)
    {
        if (event.key === 'Enter') {
            const text = event.target.value
            if (!text) return

            // Add message in comments
            comments = comments.concat({author: 'user', text})
            event.target.value = ''
            // Reply to Eliza Bot
            const reply = eliza.transform(text)
            setTimeout(() => {
                comments = comments.concat({author: 'eliza', text: '...', placeholder: true})
                setTimeout(() => {
                    comments = comments.filter((comment) => !comment.placeholder).concat({
                        author: 'eliza',
                        text: reply
                    })
                }, Math.random() * 500)
            }, Math.random() * 200)
        }
    }

    beforeUpdate(() => {
        autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
    });

    afterUpdate(() => {
        if (autoscroll) div.scrollTo(0, div.scrollHeight);
    });
</script>

<style>
    .chat {
        display: flex;
        flex-direction: column;
        height: 100%;
        max-width: 320px;
    }

    .scrollable {
        flex: 1 1 auto;
        border-top: 1px solid #eee;
        margin: 0 0 0.5em 0;
        overflow-y: auto;
    }

    article {
        margin: 0.5em 0;
    }

    .user {
        text-align: right;
    }

    span {
        padding: 0.5em 1em;
        display: inline-block;
    }

    .eliza span {
        background-color: #eee;
        border-radius: 1em 1em 1em 0;
    }

    .user span {
        background-color: #ea0a0a;
        color: white;
        border-radius: 1em 1em 0 1em;
        word-break: break-all;
    }
</style>

<div class="chat">
    <h1>Eliza</h1>

    <div class="scrollable" bind:this={div}>
        {#each comments as comment}
            <article class={comment.author}>
                <span>{comment.text}</span>
            </article>
        {/each}
    </div>

    <input type="text" on:keydown={handleKeydown}>
</div>
