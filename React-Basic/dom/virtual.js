let array = [];
increment = 0;
let container = document.querySelector('.container');

//fast
while (increment < 10000) {
    array.push(++increment);

}
// batch update
container.innerHTML = array.join(' ');

//slow

while (increment < 10000) {

    // container.innerHTML += array.join(' '+ increment++);

}
