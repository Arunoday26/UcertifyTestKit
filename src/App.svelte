<script>
  import Header from './UI/Header.svelte';
  // import { currentQues } from './UI/store/quesStore.js';
  // import { userAnsObj } from './UI/store/ansStore';
  import ResultPage from './UI/ResultPage.svelte';
  import QuizPage from './UI/QuizPage.svelte';

  let startBtn = true;
  let startQuiz = false;
  // let quizPage = true;
  let result = false;
  function quizDisplay() {
    startQuiz = true;
    startBtn = false;
  }

  // async function nextQuest() {
  //   currentQues.update((ques) => ques + 1);
  //   initialise($currentQues);
  // }

  // async function prevQuest() {
  //   currentQues.update((ques) => ques - 1);
  //   initialise($currentQues);
  // }

  // function initialise($currentQues) {
  //   if (!$userAnsObj[$currentQues]) {
  //     let user_ans = { chosenAns: '', isCorrect: '', quesNumber: $currentQues };
  //     $userAnsObj[$currentQues] = user_ans;
  //   }
  // }
  // initialise($currentQues);

  // let result = false;
  // function endBtn() {
  //   result = true;
  //   quizPage = false;
  // }
  // let isOpenModal = false;

  // function closeModal() {
  //   isOpenModal = false;
  // }
  // let min = 1;
  // let sec = 60;
  // let timer;

  // onMount(() => {
  //   timer = setInterval(() => {
  //     sec--;
  //     if (sec == 0) {
  //       min--;
  //       sec = 60;
  //       if (min < 0) {
  //         clearInterval(timer);
  //         min = 0;
  //         sec = 0;
  //         alert('TimeOut');
  //         startBtn = false;
  //         result = true;
  //       }
  //     }
  //   }, 1000);
  // });
</script>

{#if startBtn}
  <Header />
  <button class="startBtn" on:click={() => quizDisplay()}>Start Test</button>
{/if}

{#if startQuiz}
  <QuizPage />
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
