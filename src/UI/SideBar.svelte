<script>
  import { fly } from 'svelte/transition';
  import { apiData } from './store/quesStore';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function jumpQuest(){
    dispatch('goTo')
    // console.log("Clicked")
  }
  export let show = false;
</script>

{#if show}
  <nav transition:fly={{ x: -150, opacity: 1 }}>
    <ol>
      {#each $apiData as dataItem, i (dataItem)}
        <li>
          <button id="scroll" on:click="{() => jumpQuest()}"
            >{JSON.parse(dataItem.content_text).question}</button
          >
        </li>
      {/each}
    </ol>
  </nav>
{/if}

<style>
  nav {
    position: fixed;
    top: 13.2%;
    left: 0;
    height: 75%;
    width: 15%;
    /* padding: 35px; */
    border-right: 2px solid #aaa;
    background: #fff;
    white-space: nowrap;
    overflow: scroll;
  }
</style>
