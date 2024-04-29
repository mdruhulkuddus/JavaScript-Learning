// 
let numbers = [5, 65, 8, 9, 7498];
console.log(numbers[0]);
console.log(numbers[4]);

numbers[1] = 588;
console.log(numbers);

numbers.push(8888);
console.log(numbers);

let removedElement = numbers.pop();
console.log(removedElement); 
console.log(numbers); 

console.log(numbers.length); 

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let mixedArray = [1, "hello", true, {name: 'ruhul', cse:15}, [5,6,7]];
console.log(mixedArray);

let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); 

let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);