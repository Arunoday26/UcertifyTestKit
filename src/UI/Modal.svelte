    <script>
    import { createEventDispatcher } from 'svelte';
    import { attempted, unAttempted } from './store/quesStore';

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

    <div class="background" style="--display: {isOpenModal ? 'block' : 'none'};" on:click={closeModal}/>
    <div class="modal" style="--display: {isOpenModal ? 'block' : 'none'};">
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
    .background {
        display: var(--display);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.66);
    }
    .modal {
        display: var(--display);
        position: fixed;
        border: 2px solid rgb(173, 40, 40);
        z-index: 2;
        height: 200px;
        padding: 100px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        filter: drop-shadow(0px 0px 500px black);
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
        border: 2px solid rgb(173, 40, 40);
        border-radius: 30px;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: rgb(211, 121, 121);
    }
    .btn {
        border: 2px solid rgb(0, 0, 0);
        border-radius: 30px;
        width: 18%;
        font-weight: bold;
    }
    .btn:hover {
        background-color: #b0bbbb;
    }
    </style>
