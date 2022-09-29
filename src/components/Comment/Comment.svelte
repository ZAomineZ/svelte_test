<script>
    import Header from "../Layouts/Header.svelte";
    // Components Comments
    import Comments from "./Comments.svelte"
    import AddComment from "./AddComment.svelte"
    import MessageError from "./MessageError.svelte";

    let activeFormComment = false
    let activeFormCommentReply = false
    let error = false
    let comments = []

    /**
     * @param {Event} e
     */
    function handleToggleActive(e) {
        activeFormComment = !activeFormComment
        activeFormCommentReply = false
    }

    /**
     * @param {Event} e
     */
    function addComment(e) {
        const {username, content} = e.detail
        if (username === '' || content === '') {
            error = true
            return
        }

        comments = comments.concat({
            id: comments.length + 1,
            username,
            content,
            reply: [],
            replyAction: false,
            editable: false
        })
        activeFormComment = false
    }

    /**
     * @param {Event} e
     * @param {number} commentID
     */
    function editComment(e, commentID) {
        let commentIndex = comments.findIndex((comment) => comment.id === comment.id)

        let newComments = [...comments]
        let commentCurrent = newComments[commentIndex]
        newComments[commentIndex] = {...commentCurrent, editable: !commentCurrent.editable}
        comments = newComments

        activeFormCommentReply = !activeFormCommentReply
    }

    /**
     * @param {Event} e
     */
    function editCommentAction(e) {
        const {commentID, content} = e.detail

        let commentIndex = comments.findIndex((comment) => comment.id === commentID)
        let newComments = [...comments]
        let commentCurrent = newComments[commentIndex]
        newComments[commentIndex] = {...commentCurrent, editable: !commentCurrent.editable}
        newComments[commentIndex] = {...newComments[commentIndex], content}
        comments = newComments

        activeFormCommentReply = !activeFormCommentReply
    }

    /**
     * @param {Event} e
     */
    function removeComment(e) {
        const commentID = e.detail.commentID
        comments = comments.filter((comment) => comment.id !== commentID)
    }

    /**
     * @param {Event} e
     **/
    function addFormReply(e) {
        const commentID = e.detail.id

        let commentIndex = comments.findIndex((comment) => comment.id === commentID)

        let newComments = [...comments]
        newComments[commentIndex] = {...newComments[commentIndex], replyAction: !newComments[commentIndex].replyAction}
        comments = newComments

        activeFormCommentReply = !activeFormCommentReply
    }

    /**
     * @param {Event} e
     **/
    function replyComment(e) {
        const {commentID, username, content} = e.detail
        if (username === '' || content === '') {
            error = true
            return
        }

        let commentIndex = comments.findIndex((comment) => comment.id === commentID)

        let newComments = [...comments]
        newComments[commentIndex] = {...newComments[commentIndex], replyAction: !newComments[commentIndex].replyAction}
        newComments[commentIndex].reply.push({username, content})
        comments = newComments

        activeFormCommentReply = !activeFormCommentReply
    }
</script>

<Header/>
<div class="container" style="padding-top: 75px; padding-bottom: 150px">
    <h1>Bonjour tout le monde</h1>
    {#if error}
        <MessageError message="Les champs username et content doivent être requis"/>
    {/if}
    <Comments activeFormCommentReply={activeFormCommentReply} comments={comments}
              editComment={editComment} editCommentAction={editCommentAction}
              on:click={ e => {removeComment(e); addFormReply(e)}}
              replyCommentSubmit={replyComment}/>
    <AddComment active={activeFormComment} on:click={handleToggleActive} on:submit={addComment}/>
</div>