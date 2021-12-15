    import { writable } from 'svelte/store';
    export const currentQues = writable(0);
    export const pageNumber = writable(1);
    export const attempted = writable(0);
    export let unAttempted = writable(0);


    export const apiData = writable([fetchUserData()]);

    async function fetchUserData(data, set) {
        fetch('ques.json')
        .then((response) => response.json())
        .then((data) => {
            const updatedData = data.map((item) => {
            item.isAttempted = false;
            return item;
            })
            apiData.set(updatedData);
        })
        .catch((error) => {
            return [];
        });
    };


