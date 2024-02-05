<script>
    export let url, title, context, imageId;
</script>

<div class="portfolio-card">

    {#if imageId}
        <a class='image-link' href={url}><img src={imageId} target='_blank' alt={title} class="portfolio-image" /></a>
    {/if}

    {#if title}
        <h3 class="portfolio-title"><a class='title-link' href={url} target='_blank'>{title}</a></h3>
    {/if}

    {#if context}
        <p class="portfolio-context">{context}</p>
    {/if}
</div>

<style>
    /* Adjust styles as needed */
    .portfolio-card {
        text-align: center;
        padding: 2px;
        border: 1px solid #dedede;
        border-radius: 1px;
        margin: 0px;
    }

    .portfolio-image {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }

    .portfolio-title {
        font-size: 1.2rem;
        margin: 2px auto;
    }

    .portfolio-context {
        margin: 0 auto 1px;
        color: #555;
    }

    .title-link {
        color: #000;
        text-decoration: none;
        border-bottom: 1px solid #000;
        cursor: pointer;
    }
</style>
