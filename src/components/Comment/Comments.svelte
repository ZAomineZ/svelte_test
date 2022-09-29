<script>
    import {createEventDispatcher} from "svelte";
    import AddComment from "./AddComment.svelte";
    import CommentReply from "./CommentReply.svelte";

    // Props
    export let comments = []
    export let activeFormCommentReply = false
    export let replyCommentSubmit;
    export let editComment;
    export let editCommentAction;

    const dispatch = createEventDispatcher()

    /**
     * @param commentID
     */
    function removeComment(commentID) {
        dispatch('click', {commentID})
    }

    /**
     * @param id
     */
    function addFormReply(id) {
        dispatch('click', {id})
    }
</script>

{#each comments as comment}
    <div class="card mb-4 shadow-sm mt-4">
        <div class="card-body">
            <div content="card-title">{comment.username}</div>
            <p class="card-text pt-2">{comment.content}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button class="btn btn-secondary" role="button" on:click={addFormReply(comment.id)}>Répondre
                    </button>
                    <button class="btn btn-primary" role="button" on:click={e => editComment(e, comment.id)}>Editer
                    </button>
                    <button class="btn btn-danger" role="button" on:click={removeComment(comment.id)}>Supprimer
                    </button>
                </div>
            </div>
        </div>
    </div>
    {#if comment.reply.length !== 0}
        {#each comment.reply as reply}
            <CommentReply comment={reply}/>
        {/each}
    {/if}
    {#if comment.replyAction || comment.editable}
        <AddComment on:click on:submit={comment.editable ? editCommentAction : replyCommentSubmit} active={activeFormCommentReply} reply={true}
                    comment={comment}/>
    {/if}
{/each}