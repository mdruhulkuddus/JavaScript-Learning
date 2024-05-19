const person = {
    name: 'ruhul',
    job: {
        function(){}
    }, 
    talk(){}
};

person['name'] = '';
const targetMember = 'name';
// person.job();
person[targetMember.value] = 'tot';
console.log(person.job);