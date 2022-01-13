    <script>
    import { currentQues, apiData, attempted} from './store/quesStore';
    import { userAnsObj } from './store/ansStore';
    function onOptionClicked(event) {
        if ($userAnsObj[$currentQues].isCorrect == "") {
        attempted.update((attemp) => attemp + 1);
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
    <div class="main-body">
    {#each $apiData as dataItem, i (dataItem)}
    {#if $currentQues == i}
        <p class="show-ques">{i+1}{'.    '}{JSON.parse(dataItem.content_text).question}</p>
        <div id="question_section" >
        {#each JSON.parse(dataItem.content_text).answers as ans, index (ans)}
            <label for="ans{index}" id="option{index}" class="options" >
            <input 
                type="radio"
                name="ans"
                id="ans{index}"
                class="selectAns"
                is_correct={ans.is_correct}
                value={ans.answer}
                on:click={onOptionClicked}
                checked={$userAnsObj[$currentQues]?.chosenAns === ans.answer}
            />
            {@html ans.answer}
            </label>
        {/each}
        </div>
    {/if}
    {/each}
    </div>

    <style>
    .main-body{
        display: block;
        margin: 0 250px 0 250px;
        /* overflow-y: scroll; */
        overflow-y: hidden;
        height: 350px;
    }

    .show-ques{
        margin-bottom: 30px;
    }

    .options{
        margin-bottom: 10px;
    }

    </style>