    <script>
    import Header from './UI/Header.svelte';
    import ResultPage from './UI/ResultPage.svelte';
    import QuizPage from './UI/QuizPage.svelte';

    let startBtn = true;
    let startQuiz = false;
    let result = false;
    function quizDisplay() {
        startQuiz = true;
        startBtn = false;
    }
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
        color: rgb(255, 255, 255);
        padding: 8px 16px;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* margin-top: 64px; */
    }

    .startBtn:hover {
        background-color: #e095b4;
    }
    </style>
