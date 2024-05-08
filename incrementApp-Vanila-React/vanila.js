let number = 0;

const display = document.querySelector("#display");
const button = document.querySelector("#button");

button.addEventListener("click", ()=>{
    number++;
    display.textContent = number;
})