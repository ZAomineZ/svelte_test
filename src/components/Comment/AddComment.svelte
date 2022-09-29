<script>
    import {createEventDispatcher} from "svelte";
    import {fade, fly} from 'svelte/transition'

    // Props
    export let active = false
    export let reply = false
    export let comment

    const dispatch = createEventDispatcher()

    let username = ''
    let content = ''

    function onSubmit() {
        let parameters = {
            username,
            content: (comment && comment.content && comment.editable) ? comment.content : content
        }
        let parametersReply = comment ? {commentID: comment.id} : null
        const params = Object.assign(parameters, parametersReply)
        dispatch('submit', params)

        username = ''
        content = ''
    }
</script>

{#if active}
    <h2>Votre commentaire</h2>
    <form action="#" method="post" in:fade out:fly>
        {#if (comment && comment.editable === false) || !comment}
            <div class="form-group">
                <label for="username">Your username</label>
                <input type="text" id="username" class="form-control" bind:value={username}>
            </div>
        {/if}
        <div class="form-group">
            <label for="content">Your content</label>
            {#if comment && comment.content && comment.editable}
                <textarea id="content" cols="30" rows="10" class="form-control" bind:value={comment.content}></textarea>
            {:else}
                <textarea id="content" cols="30" rows="10" class="form-control" bind:value={content}></textarea>
            {/if}
        </div>
        <button type="button" class="btn btn-outline-secondary" on:click={onSubmit}>Envoyer</button>
    </form>
{/if}

{#if !reply}
    <button class="btn btn-primary mt-4" on:click>Add a new comment</button>
{/if}