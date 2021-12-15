<script>
  import QuesPage from './QuesPage.svelte';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';
  import ResultPage from './ResultPage.svelte';
  import { currentQues } from './store/quesStore.js';
  import { userAnsObj } from './store/ansStore';
  import { onMount } from 'svelte';

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
  let startQuiz = true;
  let result = false;
  function endBtn() {
    result = true;
    startQuiz = false;
  }
  let isOpenModal = false;

  function closeModal() {
    isOpenModal = false;
  }
  let min = 20;
  let sec = 59;
  let timer;

  onMount(() => {
    timer = setInterval(() => {
      sec--;
      if (sec == 0) {
        min--;
        sec = 59;
        if (min < 0) {
          clearInterval(timer);
          min = 0;
          sec = 0;
          alert('TimeOut');
          startQuiz = false;
          result = true;
        }
      }
    }, 1000);
  });
</script>

{#if startQuiz}
  <Header />
  <QuesPage />
  <Footer
    on:nextques={() => nextQuest()}
    on:prevques={() => prevQuest()}
    on:closeModal={closeModal}
    on:confrim={endBtn}
    {min}
    {sec}
  />
{/if}
{#if result}
  <ResultPage />
{/if}
