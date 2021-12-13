<script>
  import { fly } from 'svelte/transition';
  import { afterUpdate } from 'svelte';
  import {
    apiData,
    currentQues,
    pageNumber,
    attempted,
    unAttempted,
  } from './store/quesStore';
  import { userAnsObj } from './store/ansStore';
  function jumpQuest(i) {
    currentQues.set(i);
    pageNumber.set(i + 1);
    let user_ans = { chosenAns: '', isCorrect: '', quesNumber: i };
    if ($userAnsObj[i]) {
      user_ans = {
        chosenAns: $userAnsObj[i].chosenAns,
        isCorrect: $userAnsObj[i].isCorrect,
        quesNumber: i,
      };
    } else {
      $userAnsObj[i] = user_ans;
    }
  }
  function attemptChangeHandler(){
    document.getElementById('attempt_item').style.background ='aqua';
    document.getElementById('unattempt_item').style.background ='silver';
    document.getElementById('all_item').style.background ='silver';
  }
  function unAttemptChangeHandler(){
    document.getElementById('attempt_item').style.background ='silver';
    document.getElementById('unattempt_item').style.background ='aqua';
    document.getElementById('all_item').style.background ='silver';
  }
  function AllChangeHandler(){
    document.getElementById('attempt_item').style.background ='silver';
    document.getElementById('unattempt_item').style.background ='silver';
    document.getElementById('all_item').style.background ='aqua';
  }

  export let quesList = $apiData;
  function onItemClicked(type) {
    if (type == 'attempted') {
      attemptChangeHandler();
      quesList = $apiData.filter((item, index) => {
        return (
          $userAnsObj.hasOwnProperty(index) &&
          $userAnsObj[index].isCorrect != ''
        );
      });
    } else if (type == 'unattempted') {
      unAttemptChangeHandler();
      quesList = $apiData.filter((item, index) => {
        return (
          !$userAnsObj.hasOwnProperty(index) ||
          ($userAnsObj.hasOwnProperty(index) &&
          $userAnsObj[index].isCorrect == '')
          );
        });
      } else if (type == 'all') {
        AllChangeHandler();
      quesList = $apiData;
    }
  }

  afterUpdate(() => {
    $unAttempted = $apiData.length - $attempted;
  });
  export let show = false;
</script>

{#if show}
  <nav transition:fly={{ x: -550, opacity: 1 }}>
    <div class="allItem" id="all_item" on:click={() => onItemClicked('all')}>
      All Item:{$apiData.length}
    </div>
    <div class="attempt" id="attempt_item" on:click={() => onItemClicked('attempted')}>
      Attempted: {$attempted}
    </div>
    <div class="attempt" id="unattempt_item" on:click={() => onItemClicked('unattempted')}>
      UnAttempted:{$unAttempted}
    </div>
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
  .attempt {
    background: silver;
    border: 2px solid black;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
  }

  .allItem{
    background: aqua;
    border: 2px solid black;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
  }
</style>
