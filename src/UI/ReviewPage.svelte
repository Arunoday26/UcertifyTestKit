<script>
  import {apiData} from './store/quesStore';
</script>

<footer>
  <div class="divBoard">
    <button type="button" class="dashBoard">Dashboard</button>
    <button type="button" class="dashBoard">Result</button>
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
