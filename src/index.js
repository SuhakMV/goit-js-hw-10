import './css/styles.css';

const DEBOUNCE_DELAY = 300;

//const searchBox = document.querySelector("#search-box");

fetch('https://restcountries.com/v3.1/name/uk').then(response => {
    //console.log(response.json());
    return response.json();
}).then(name => {
    console.log(name);
});
