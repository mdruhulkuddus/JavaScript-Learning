let numbers = [1,5,3,5];

// let moreNumbers = [...numbers, 5, 8];
let moreNumbers = [ 5, 8, ...numbers];
console.log(moreNumbers);

let name = "ruhul kuddus";

let separet = [...name].join(' ');
console.log(separet)

const fruits = ['apple', 'banan'];
const vegetable = ['gog', 'korola'];
const food = [...fruits, ...vegetable, 'egg', 'dim'];
console.log(food);

const numberss = [1, 2, 3, 4, 5, 6];
const[one, two, ...rest] = numberss;
console.log(one);
console.log(rest);