<script>
  import { createEventDispatcher } from 'svelte';
  import { apiData, attempted, unAttempted } from './store/quesStore';

  const dispatch = createEventDispatcher();

  export let isOpenModal;

  function closeModal() {
    isOpenModal = false;
    dispatch('closeModal', { isOpenModal });
  }
  function confirmModal() {
    dispatch('confrim');
  }
</script>

<div
  id="background"
  style="--display: {isOpenModal ? 'block' : 'none'};"
  on:click={closeModal}
/>
<div id="modal" style="--display: {isOpenModal ? 'block' : 'none'};">
  <h2>Are you want to End test?</h2>
  <div class="innerContent"><strong>Attempted:{$attempted}</strong></div>
  <div class="innerContent"><strong>UnAttempted:{$unAttempted}</strong></div>
  <footer>
    <div class="content">
      <button class="btn" type="submit" on:click={confirmModal}>Confirm</button>
      <button class="btn" type="button" on:click={closeModal}>Cancel</button>
    </div>
  </footer>
</div>

<style>
  #background {
    display: var(--display);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 30%;
    height: 30%;
  }

  #modal {
    display: var(--display);
    position: fixed;
    border: 2px solid red;
    z-index: 2;
    height: 200px;
    padding: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    filter: drop-shadow(0 0 20px #333);
  }
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
  .innerContent {
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(197, 26, 26);
  }
  .btn {
    border: 2px solid black;
    border-radius: 5px;
    width: 18%;
  }
  .btn:hover {
    background-color: #b0bbbb;
  }
</style>
