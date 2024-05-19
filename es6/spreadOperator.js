const array1 = [1,2,3];
const array2 = [1,2,3];

// const combined1 = array1.concat(array2);
// const combined = [...array1, ...array2]; 
// const combined = [...array1, 'b', ...array2, 'c']; 
// samely can add object

// console.log(combined);

const obj1 = {
    location : 'feni',
    home : 'par'
}

const obj2 = {
    location : 'dom',
    home : 'par'
}

const combine = {...obj1, ...obj2, degree : 'cse'};
console.log(combine);