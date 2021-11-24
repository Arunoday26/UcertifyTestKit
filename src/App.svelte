<script>
  import Header from './UI/Header.svelte';
  import Footer from './UI/Footer.svelte';
  import { currentQues } from './UI/store/quesStore.js';
  import { userAnsObj } from './UI/store/ansStore';
  import ResultPage from './UI/ResultPage.svelte';
  import QuesPage from './UI/QuesPage.svelte';
import ReviewPage from './UI/ReviewPage.svelte';

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

  let result = false;
  function endBtn() {
    result = true;
    quizPage = false;
  }
  let isOpenModal = false;

  function closeModal() {
    isOpenModal = false;
  }
</script>

{#if quizPage}
  <Header />

  {#if startBtn}
    <button class="startBtn" on:click={() => quizDisplay()}>Start Test</button>
  {/if}

  {#if startQuiz}
    <QuesPage />

    <Footer
      on:nextques={() => nextQuest()}
      on:prevques={() => prevQuest()}
      on:closeModal={closeModal}
      on:confrim={endBtn}
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
