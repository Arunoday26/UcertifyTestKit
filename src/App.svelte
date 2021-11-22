<script>
  import Header from './UI/Header.svelte';
  import Footer from './UI/Footer.svelte';
  import { apiData, currentQues,attempted } from './UI/store/quesStore.js';
  import { userAnsObj } from './UI/store/ansStore';
  import ResultPage from './UI/ResultPage.svelte';

  let startBtn = true;
  let startQuiz = false;
  let quizPage = true;
  function quizDisplay() {
    startQuiz = true;
    startBtn = false;
  }

  async function nextQuest() {
    currentQues.update((ques) => ques + 1);
    initialise($currentQues);
  }

  async function prevQuest() {
    currentQues.update((ques) => ques - 1);
    initialise($currentQues);
  }

  function initialise($currentQues) {
    if (!$userAnsObj[$currentQues]) {
      let user_ans = { chosenAns: '', isCorrect: '', quesNumber: $currentQues };
      $userAnsObj[$currentQues] = user_ans;
    }
  }
  initialise($currentQues);

  function onOptionClicked(event) {
    console.log($currentQues ,$userAnsObj);
    if ($userAnsObj[$currentQues].isCorrect =='') {
      // attempted.update((attemp) => attemp + 1);
      $attempted +=1;
    }

    let selected_ans = event.target.value;
    let is_correct = event.target.getAttribute('is_correct');
    let user_ans = {
      chosenAns: selected_ans,
      isCorrect: is_correct,
      quesNumber: $currentQues,
    };
    $userAnsObj[$currentQues] = user_ans;
  }

  let result = false;
  function endBtn() {
    let okClk = confirm('Are you want to End the test!');
    if (okClk == true) {
      result = true;
      quizPage = false;
    }
  }
</script>

{#if quizPage}
  <Header />

  {#if startBtn}
    <button class="startBtn" on:click={() => quizDisplay()}>Start Test</button>
  {/if}

  {#if startQuiz}
    {#each $apiData as dataItem, i (dataItem)}
      {#if $currentQues == i}
        <p>{JSON.parse(dataItem.content_text).question}</p>
        <div id="question_section">
          {#each JSON.parse(dataItem.content_text).answers as ans, index (ans)}
            <!-- svelte-ignore missing-declaration -->

            <label
              for="ans{index}"
              id="option{index}"
              on:click={onOptionClicked}
            >
              <input
                type="radio"
                name="ans"
                id="ans{index}"
                class="selectAns"
                is_correct={ans.is_correct}
                value={ans.answer}
                checked={$userAnsObj[$currentQues]?.chosenAns === ans.answer}
              />
              {ans.answer}
            </label>
          {/each}
        </div>
      {/if}
    {/each}
    <Footer
      on:nextques={() => nextQuest()}
      on:prevques={() => prevQuest()}
      on:endques={() => endBtn()}
    />
  {/if}
{/if}
{#if result}
  <ResultPage />
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
