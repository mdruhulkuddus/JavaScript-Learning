// event listener

// const headerELement = document.querySelector("#header");
// headerELement.addEventListener("mouseover", (event) => {  // click, dblclick, mousedown, mouseover, mouseenter
//   console.log(event);
// });

// const inputElement = document.querySelector('input[type="text"]');

// inputElement.addEventListener("keypress", (event) => {  //input, keypress
//     console.log(event);
//   });

const formELement = document.querySelector('form');
formELement.addEventListener('submit',(event) => {
    event.preventDefault(); // atkano = prevent
    console.log(event);
    console.log(event.target);
});