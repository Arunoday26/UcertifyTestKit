<script>
  import { fly } from 'svelte/transition';
  import {afterUpdate} from 'svelte';
  import { apiData, currentQues, pageNumber,attempted } from './store/quesStore';
  function jumpQuest(i) {
    currentQues.set(i);
    pageNumber.set(i + 1);
  }
  
  afterUpdate(() => {
    $apiData.forEach((item, index) =>{
      if(item.isAttempted && index == $currentQues){
      console.log(item , $currentQues , index);

        attempted.update((attemp) => attemp+1);
      }

   })
   
  })
  export let show = false;

</script>

{#if show}
  <nav transition:fly={{ x: -550, opacity: 1 }}>
    <div class="allItem">All Item:{$apiData.length}</div>
    <div class="allItem">Attempted: {$attempted}</div>
    <div class="allItem">UnAttempted:</div>
    <ol>
      {#each $apiData as dataItem, i (dataItem)}
        <li id="list{i}">
          <button id="ques-btn{i}" class="nav-btn" on:click={() => jumpQuest(i)}
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
    /* width: 30%; */
    /* padding: 35px; */
    border-right: 2px solid #aaa;
    background: #fff;
    white-space: nowrap;
    overflow: scroll;
  }
  .nav-btn {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .allItem{
    border: 2px solid black;
  }
</style>
