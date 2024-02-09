<script>
  import PortfolioCard from "./PortfolioCard.svelte";
  import { items } from "$lib/portfolio.js";
</script>

<div class="grid">
  {#each items as item (item.id)}
    <PortfolioCard {...item} />
  {/each}
</div>

<style>
  /* Adjust styles as needed */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 8px;
  }
</style>
