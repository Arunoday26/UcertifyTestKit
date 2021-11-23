<script>
  import {apiData } from './store/quesStore';
  import {createEventDispatcher} from 'svelte';
  let dispatch = createEventDispatcher();
  function navigateItem(action) {
    let dispatch_event = '';
    if (action == 'prev') {
      dispatch_event = 'prevques';
    } else if (action == 'next') {

      dispatch_event = 'nextques';
    }
       dispatch(dispatch_event);
  }
</script>

<footer>
  <div class="divBoard">
    <button type="button" class="dashBoard"  on:click={() => navigateItem('prev')}>Previous</button>
    <button type="button" class="dashBoard"  on:click={() => navigateItem('next')}>Next</button>
    <div>1 of {$apiData.length}</div>
    <button type="button" class="dashBoard">Dashboard</button>
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
