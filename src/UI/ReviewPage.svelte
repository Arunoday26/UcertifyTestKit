<script>
  import { beforeUpdate } from 'svelte';
  import { apiData } from './store/quesStore';
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  export let visibleQues;
  let nextDisabled = false;
  let prevDisabled = true;
  function navigateItem(action) {
    if (action == 'prev') {
      dispatch('nextques', {
        visibleQues: visibleQues - 1,
      });
    } else if (action == 'next') {
      dispatch('nextques', {
        visibleQues: visibleQues + 1,
      });
    }
  }
  beforeUpdate(() => {
    if (visibleQues > $apiData.length-2) {
      nextDisabled = true;
    } else {
      nextDisabled = false;
    }
    if (visibleQues < 1) {
      prevDisabled = true;
    } else {
      prevDisabled = false;
    }
  });
  function reload() {
    location.reload();
  }
</script>

<footer>
  <div class="divBoard">
    <button
      type="button"
      class="dashBoard"
      on:click={() => navigateItem('prev')} disabled={prevDisabled}>Previous</button
    >
    <span><p><b> {visibleQues + 1} of {$apiData.length}</b></p></span>
    <button
      type="button"
      class="dashBoard"
      on:click={() => navigateItem('next')} disabled={nextDisabled}>Next</button
    >
    <button type="button" class="dashBoard" on:click={reload}>Dashboard</button>
  </div>
</footer>

<style>
  footer {
    border-top: 2px solid black;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgb(241, 226, 206);
  }
  footer .divBoard {
    max-width: 500px;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .dashBoard {
    border: 2px solid black;
    border-radius: 5px;
    width: 18%;
  }
  .dashBoard:hover {
    background-color: #b0bbbb;
  }
</style>
