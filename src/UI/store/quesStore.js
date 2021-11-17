import { writable } from 'svelte/store';
// import { onMount } from 'svelte';

export const apiData = writable([fetchUserData()]);

async function fetchUserData(data, set) {
  fetch('ques.json')
    .then((response) => response.json())
    .then((data) => {
      apiData.set(data);
      console.log(apiData);
    })
    .catch((error) => {
      return [];
    });
};


