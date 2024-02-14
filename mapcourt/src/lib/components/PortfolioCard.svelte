<script>
    export let url, title, context, imageId, alt;
</script>

<div class="portfolio-card">

    {#if imageId}
        <a class='image-link' href={url}><img src={imageId} target='_blank' {alt} class="portfolio-image" /></a>
    {/if}

    {#if title}
        <h3 class="portfolio-title"><a class='title-link' href={url} target='_blank'>{title}</a></h3>
    {/if}

    {#if context}
        <em><p class="portfolio-context">{context}</p></em>
    {/if}
</div>

<style>

    .portfolio-card {
        text-align: left;
        padding: 5px;
        /* border: 1px solid #dedede; */
        border-radius: 1px;
        margin: 30px 5px;
        height: 450px;
        max-width: 100%;

    }

    .portfolio-image {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }

    .portfolio-title {
        font-size: 1.2rem;
        margin: 2px auto;
        text-align: left;
        height: auto;
   
    }

    .portfolio-context {
        margin: 0 auto 1px;
        color: #555;
        text-align: left;
        justify-content: end;
        padding: 1px;
        margin: 1px;


    }

    .title-link {
        color: #000;
        text-decoration: none;
        border-bottom: 1px solid #000;
        cursor: pointer;
    }
</style>
