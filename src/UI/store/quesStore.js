import { writable } from 'svelte/store';
export const currentQues = writable(0);
export const index = writable(1);
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


