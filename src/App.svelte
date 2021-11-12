<script>
  import Header from './UI/Header.svelte';
  import Footer from './UI/Footer.svelte';
//   import { onMount } from 'svelte';
  import { apiData } from './UI/store/quesStore.js';

//   onMount(async () => {
//     fetch('ques.json')
//       .then((response) => response.json())
//       .then((data) => {
//         apiData.set(data);
//         console.log(apiData);
//       })
//       .catch((error) => {
//         return [];
//       });
//   });
  let startBtn = true;
  let startQuiz = false;
  let currentQues = 0;

  function quizDisplay() {
    startQuiz = true;
    startBtn = false;
  }

  // function quesChangeHandler(event) {
  //   currentQues = event;
  // }

  function nextQuest() {
    currentQues += 1;
  }

  function prevQuest() {
    currentQues -= 1;
  }
</script>

<Header />

{#if startBtn}
  <button class="startBtn" on:click={() => quizDisplay()}>Start Test</button>
{/if}

{#if startQuiz}
  {#each $apiData as dataItem, i (dataItem)}
    {#if currentQues == i}
      <p>{JSON.parse(dataItem.content_text).question}</p>
      {#each JSON.parse(dataItem.content_text).answers as ans, index (ans)}
        <div>
          <!-- svelte-ignore missing-declaration -->
          <input
            type="radio"
            name="ans"
            id="ans{index}"
            class="selectAns"
            bind:value={ans}
          />
          {ans.answer}
        </div>
      {/each}
    {/if}
  {/each}
  <Footer
    on:nextques={() => nextQuest(currentQues)}
    on:prevques={() => prevQuest(currentQues)}
  />
{/if}

<style>
  .startBtn {
    font: inherit;
    border: 1px solid #cf0056;
    background: #cf0056;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .startBtn:hover {
    background-color: #e095b4;
  }
</style>
