<script>
    import {onMount} from 'svelte'

    let photos = []
    onMount(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
        photos = await response.json()
        console.log(photos)
    })
</script>

<style>
    .photos {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
    }

    figure, img {
        width: 100%;
        margin: 0;
    }
</style>

<h1>Photo album</h1>

<div class="photos">
    {#each photos as photo}
        <figure>
            <img src={photo.thumbnailUrl} alt={photo.title}>
            <figcaption>{photo.title}</figcaption>
        </figure>
    {:else}
        <p>loading...</p>
    {/each}
</div>
