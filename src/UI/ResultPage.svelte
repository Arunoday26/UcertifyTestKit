<script>
  import {apiData} from './store/quesStore';
</script>
<header>
  <img id="logo" alt="uCertify Logo" src="Image/ucertifyLogo.png" />
  <h1 id="test-name">uCertify Result</h1>
</header>
<div class="rsltDeclartion">
  <div class="data-item">
    <h2>All Item</h2>
    <p class="dataItem">{$apiData.length}</p>
  </div>
  <div class="data-item">
    <h2>All Item</h2>
    <p class="dataItem">{$apiData.length}</p>
  </div>
  <div class="data-item">
    <h2>All Item</h2>
    <p class="dataItem">{$apiData.length}</p>
  </div>
  <div class="data-item">
    <h2>All Item</h2>
    <p class="dataItem">{$apiData.length}</p>
  </div>
  <!-- <div class="data-item">Attempted
    <span class="dataItem">0</span>
  </div>
  <div class="data-item">UnAttempted
    <span class="dataItem">11</span>
  </div>
  <div class="data-item">Correct Answer
    <span class="dataItem">0</span>
  </div>
  <div class="data-item">Incorrect Answer 
    <span class="dataItem">0</span>
  </div> -->
</div>

<div><h2 class="totalResult">Total Result</h2></div>
<div class="outerContainer">
  <div class="container">
    <div class="column-center">Questions</div>
    <div class="column-left">Index No</div>
    <div class="column-right">Answers</div>
  </div>
  {#each $apiData as dataItem, i (dataItem)}
  <div class="container">
    <div class="column-center">Questions</div>
    <div class="column-left">Index No</div>
    <div class="column-right">Answers</div>
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
    display:flex;
    flex-direction: row;
   justify-content: space-evenly;
    
    border: 2px solid #cf0056;
    padding: 30px;
    margin: 70px;
  }

  .data-item {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 50px;
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
    font-weight: bold;
    width: 10%;
    text-align: center;
    border: 2px solid black;
    margin: 2px;
  }
  .column-right {
    float: right;
    font-weight: bold;
    width: 10%;
    text-align: center;
    border: 2px solid black;
    margin: 2px;


  }
  .column-center {
    display: inline-block;
    font-weight: bold;
    width: 77.7%;
    text-align: center;
    border: 2px solid black;
    margin: 2px;


  }
  .dataItem{
    display: inline-block;
  }
</style>
