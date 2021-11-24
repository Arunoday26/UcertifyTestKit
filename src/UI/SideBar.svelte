<script>
  import { fly } from 'svelte/transition';
  import { afterUpdate } from 'svelte';
  import {
    apiData,
    currentQues,
    pageNumber,
    attempted,
    unAttempted
  } from './store/quesStore';
  import { userAnsObj } from './store/ansStore';
  function jumpQuest(i) {
    currentQues.set(i);
    pageNumber.set(i + 1);
    let user_ans = { chosenAns: '', isCorrect: '', quesNumber: i };
    if($userAnsObj[i]){
      user_ans = { chosenAns: $userAnsObj[i].chosenAns, isCorrect: $userAnsObj[i].isCorrect, quesNumber: i };
    }
    else{

      $userAnsObj[i] = user_ans;
    }
  }
export let quesList = $apiData;
  function onItemClicked(type){
    if(type == 'attempted'){
      quesList = $apiData.filter((item , index) => {
        return $userAnsObj.hasOwnProperty(index) && $userAnsObj[index].isCorrect != '' ;
      })
    }
    if(type == 'unattempted'){
      quesList = $apiData.filter((item , index) => {
        return !$userAnsObj.hasOwnProperty(index)  || ($userAnsObj.hasOwnProperty(index) && $userAnsObj[index].isCorrect == '') ;
      })
    }
    if(type == 'all'){
      quesList = $apiData;
    }
  }
  // export let unAttempted = 0;
  afterUpdate(() => {
    $unAttempted = $apiData.length - $attempted;
  });
  export let show = false;
</script>

{#if show}
  <nav transition:fly={{ x: -550, opacity: 1 }}>
    <div class="allItem"  on:click={() => onItemClicked("all")}>All Item:{$apiData.length}</div>
    <div class="allItem" on:click={() => onItemClicked('attempted')}>Attempted: {$attempted}</div>
    <div class="allItem" on:click={() => onItemClicked('unattempted')}>UnAttempted:{$unAttempted}</div>
    <ol>
      {#each quesList as dataItem, i (dataItem)}
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

  .allItem {
    border: 2px solid black;
    cursor: pointer;
  }
</style>
