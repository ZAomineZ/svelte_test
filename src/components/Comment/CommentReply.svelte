<script>
    // Props
    export let comment
</script>

<div class="card mb-4 shadow-sm" style="margin-left: 75px">
    <div class="card-body">
        <div content="card-title">{comment.username}</div>
        <p class="card-text">{comment.content}</p>
    </div>
</div>