<script>
  import { afterUpdate } from 'svelte';
  import Header from './UI/Header.svelte';
  import Footer from './UI/Footer.svelte';
  import { apiData } from './UI/store/quesStore.js';
  import { userAnsObj } from './UI/store/ansStore';
  // import SideBar from './UI/SideBar.svelte';
  import ReviewPage from './UI/ReviewPage.svelte';

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

  async function nextQuest() {
    currentQues += 1;
    initialise(currentQues);
  }

  async function prevQuest() {
    currentQues -= 1;
    initialise(currentQues);
  }

  function initialise(currentQues) {
    if (!(currentQues in userAnsObj)) {
      let user_ans = { chosenAns: '', isCorrect: '' };
      userAnsObj[currentQues] = user_ans;
    }
  }
  afterUpdate(() => {
    document
      .querySelector('#question_section')
      ?.addEventListener('click', function (event) {
        let selected_ans = event.target.value;
        let is_correct = event.target.getAttribute('is_correct');
        if (selected_ans != undefined) {
          updateUserAns(selected_ans, is_correct);
        }
      });
  });

  function updateUserAns(selected_ans, is_correct) {
    let user_ans = { chosenAns: selected_ans, isCorrect: is_correct };
    userAnsObj[currentQues] = user_ans;
    console.log(userAnsObj);
  
  }

  let review = false;
  function endBtn() {
    let okClk = confirm('Are you want to End the test!');
    if (okClk == true) {
      review = true;
      startQuiz = false;
    }
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
      <div id="question_section">
        {#each JSON.parse(dataItem.content_text).answers as ans, index (ans)}
          <!-- svelte-ignore missing-declaration -->

          <label for="ans{index}">
            <input
              type="radio"
              name="ans"
              id="ans{index}"
              class="selectAns"
              is_correct={ans.is_correct}
              value={index}
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
{#if review}
  <ReviewPage />
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
