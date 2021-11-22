<script>
  import SideBar from './SideBar.svelte';
  import { createEventDispatcher } from 'svelte';
  import { onMount, beforeUpdate } from 'svelte';
  import { apiData, pageNumber } from './store/quesStore';
  import ResultPage from './ResultPage.svelte';
  const dispatch = createEventDispatcher();
  let sideBarShow = false;
  let nextDisabled = false;
  let prevDisabled = true;

  let min = 20;
  let sec = 60;
  let timer;

  onMount(() => {
    timer = setInterval(() => {
      sec--;
      if (sec == 0) {
        min--;
        sec = 60;
        if (min < 0) {
          clearInterval(timer);
          min = 0;
          sec = 0;
          alert('TimeOut');
        }
      }
    }, 1000);
  });

  function navigateItem(action) {
    let dispatch_event = '';
    if (action == 'prev') {
      pageNumber.update((pagenum) => pagenum - 1);
      dispatch_event = 'prevques';
    } else if (action == 'next') {
      pageNumber.update((pagenum) => pagenum + 1);

      dispatch_event = 'nextques';
    } else if (action === 'end') {
      dispatch_event = 'endques';
    }
    dispatch(dispatch_event);
  }
  beforeUpdate(() => {
    if ($pageNumber >= $apiData.length) {
      nextDisabled = true;
    } else {
      nextDisabled = false;
    }
    if ($pageNumber < 2) {
      prevDisabled = true;
    } else {
      prevDisabled = false;
    }
  });
</script>

<footer>
  <div class="content">
    <div id="timer">
      <p>{min}:{sec}</p>
    </div>
    
    <button
      type="button"
      class="toggleBtn"
      on:click={() => (sideBarShow = !sideBarShow)}>List</button
    >
    <SideBar bind:show={sideBarShow} />
    <button
      type="button"
      class="toggleBtn"
      id="nextBtn"
      on:click={() => navigateItem('prev')}
      disabled={prevDisabled}>Previous</button
    >

    <span><p><b>{$pageNumber} of {$apiData.length}</b></p></span>
    <button
      type="button"
      class="toggleBtn"
      id="prevBtn"
      on:click={() => navigateItem('next')}
      disabled={nextDisabled}>Next</button
    >
    <button type="submit" class="toggleBtn" on:click={() => navigateItem('end')}
      >End Test</button
    >
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

  footer .content {
    max-width: 500px;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .toggleBtn {
    border: 2px solid black;
    border-radius: 5px;
    width: 18%;
  }
  .toggleBtn:hover {
    background-color: #b0bbbb;
  }
  #timer {
    width: 10px;
    margin-right: 40px;
  }
</style>
