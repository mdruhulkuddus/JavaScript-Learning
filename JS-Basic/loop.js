

let arr = [4, 5, 6, 8];

//console.log(arr);
// for
for(let i = 0; i < arr.length; i++){
    console.log(arr[i] + "\n");
}


//for in
const numbers = [45, 4, 9, 16, 25];

let text = "";
for(let x in numbers){
    text += numbers[x] + "\n";
}
console.log(text);

const person = {fname:"John", lname:"Doe", age:25};
for(let x in person){
    text += person[x]+" ";
}
console.log(text + "\n");

// for of

const cars = ["BMW", "Volvo", "Mini"];
for(let x of cars){
    text += x + " ";
}
console.log(text);

// foreach

let students = ['John', 'Sara', 'Jack'];

students.forEach(myFunction);

function myFunction(item){
    console.log(item);
}