const person = {
    name: 'ruhul',
    talk(){
        console.log(this)
    }
};

person.talk();
const talk = person.talk; //reference
talk();