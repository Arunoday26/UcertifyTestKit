<script>
  import { fly } from 'svelte/transition';

  export let show = false;
</script>

{#if show}
  <nav transition:fly={{ x: -250, opacity: 1 }}>
    <ol>
      <li>
        <button>Question </button>
      </li>
    </ol>
  </nav>
{/if}


<style>
  nav {
    position: fixed;
    top: 13.2%;
    left: 0;
    height: 100%;
    padding: 64px;
    border-right: 2px solid #aaa;
    background: #fff;
    overflow-y: auto;
  }
</style>
