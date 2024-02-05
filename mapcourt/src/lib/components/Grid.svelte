<script>
    import PortfolioCard from './PortfolioCard.svelte';
  
    export let items = [];
  </script>
  
  <style>
    /* Adjust styles as needed */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }
  </style>
  
  <div class="grid">
    {#each items as item (item.id)}
      <PortfolioCard {...item} />
    {/each}
  </div>
  