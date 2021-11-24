<script>
import {currentQues , apiData , attempted} from './store/quesStore';
import {userAnsObj} from './store/ansStore';
function onOptionClicked(event) {
    if ($userAnsObj[$currentQues].isCorrect == '') {
      attempted.update((attemp) => attemp + 1);
      // $attempted +=1;
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
</script>
{#each $apiData as dataItem, i (dataItem)}
      {#if $currentQues == i}
        <p>{JSON.parse(dataItem.content_text).question}</p>
        <div id="question_section">
          {#each JSON.parse(dataItem.content_text).answers as ans, index (ans)}
    

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