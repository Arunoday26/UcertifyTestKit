<script>
    import SideBar from "./SideBar.svelte"
    let sideBarShow = false;
</script>

<footer>
    <div class="content" >

        <p>Timer</p>
        <button class="toggleBtn" on:click="{() => sideBarShow = !sideBarShow}">List</button>
        <SideBar bind:show={sideBarShow}/>
        <button class="toggleBtn">Previous</button>
        <span><p><b>1 of 10</b></p></span>
        <button class="toggleBtn">Next</button>
        <button class="toggleBtn">End Test</button>
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

  footer .content{
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
</style>
