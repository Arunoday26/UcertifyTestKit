<script>
  import { apiData } from './store/quesStore';
  // export let resultData;
  // console.log(JSON.parse($apiData[0].content_text));
  export const quesExplMap = {};
  function onQuesClicked(event){
    quesExplMap[event?.target?.dataset?.id] = true;

  }
</script>

<header>
  <img id="logo" alt="uCertify Logo" src="Image/ucertifyLogo.png" />
  <h1 id="test-name">uCertify Result</h1>
</header>
<div class="rsltDeclartion">
  <div class="data-item">
    <p>All Item</p>
    <p class="dataItem">{$apiData.length}</p>
  </div>
  <div class="data-item">
    <p>Attempted</p>
    <p class="dataItem">{$apiData.length}</p>
  </div>
  <div class="data-item">
    <p>UnAttempted</p>
    <p class="dataItem">{$apiData.length}</p>
  </div>
  <div class="data-item">
    <p>Correct Answer</p>
    <p class="dataItem">{$apiData.length}</p>
  </div>
  <div class="data-item">
    <p>InCorrect Answer</p>
    <p class="dataItem">{$apiData.length}</p>
  </div>
</div>

<div><h2 class="totalResult">Total Result</h2></div>
<div class="outerContainer">
  <div class="container">
    <div class="column-left">Index No</div>
    <div class="column-center">Questions</div>
    <div class="column-right">Answers</div>
  </div>
  {#each $apiData as dataItem, i (dataItem)}
    <div class="container">
      <div class="column-left">{i + 1}</div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="column-center" on:click="{onQuesClicked}" data-id="{dataItem.content_id}"
        >{JSON.parse(dataItem.content_text).question}</a
      >
      {#if quesExplMap[dataItem.content_id]}
      <div>
        {JSON.parse(dataItem.content_text).explanation}
      </div>
      {/if}
      <div class="column-right">
        {#each JSON.parse(dataItem.content_text).answers as ans, index (ans)}
        <p  class= {ans.is_correct == '1' ? 'correctCircleContainer' : 'circleContainer'}> {index+1}</p>
        {/each}

      </div>
    </div>
  {/each}
</div>

<style>
  #logo {
    position: relative;
    height: 100%;
    float: left;
  }
  header {
    border: 2px solid black;
    width: 100%;
    top: 0;
    left: 0;
    height: 64px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  }

  #test-name {
    margin: 0;
    position: relative;
    color: rgb(197, 26, 26);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rsltDeclartion {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 2px solid #cf0056;
    margin: 70px;
  }

  .data-item {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    text-align: center;
    /* padding: 50px; */
  }

  .totalResult {
    color: red;
    text-align: center;
  }

  .outerContainer {
    border: 2px solid black;
    margin-left: 100px;
    margin-right: 100px;
    /* padding: 5px; */
  }
  .column-left {
    float: left;
    width: 10%;
    border: 2px solid black;
    margin: 2px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
  }
  .column-right {
    float: right;
    width: 10%;
    border: 2px solid black;
    margin: 2px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
  }
  .column-center {
    display: inline-block;
    /* font-weight: bold; */
    width: 77.7%;
    text-align: center;
    border: 2px solid black;
    margin: 2px;
  }
  .dataItem {
    display: inline-block;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .circleContainer {
    border: 2px solid black;
    border-radius: 50%;
    padding: 5px;
  }
  .correctCircleContainer{
    border: 2px solid black;
    border-radius: 50%;
    padding: 5px;
    background-color: green;
  }
</style>
