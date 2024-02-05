<script>
    export let url, title, context, imageId;
</script>

<style>
    /* Adjust styles as needed */
    .portfolio-card {
      text-align: center;
      padding: 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin: 8px;
    }
  
    .portfolio-image {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
    }
  
    .portfolio-title {
      font-size: 1.2rem;
      margin-top: 8px;
    }
  
    .portfolio-context {
      margin-top: 8px;
      color: #555;
    }
  </style>
  
  <div class="portfolio-card">
    {#if url}
      <a href={url}>text</a>
    {/if}
  
    {#if imageId}
      <img src={imageId} alt={title} class="portfolio-image" />
    {/if}
  
    {#if title}
      <h3 class="portfolio-title">{title}</h3>
    {/if}
  
    {#if context}
      <p class="portfolio-context">{context}</p>
    {/if}
  </div>