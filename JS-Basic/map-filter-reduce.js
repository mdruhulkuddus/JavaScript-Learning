let arr = [45, 20, 56];
//console.log(arr);

let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + 1;
})

console.log(a);

console.log("filter ----------------------------");

let arr2 = [20, 30, 40, 0, 3, 5];
let a2 = arr2.filter((a) => {
    return a < 10;
})

console.log(a2, arr2);

console.log("reduce ----------------------------");

let arr3 = [2, 5, 6, 8];
let newarr = arr3.reduce((a , b) => {
    return a + b
});
console.log(newarr)
const even = arr3.filter(num => num%2 == 0); 
console.log(even);