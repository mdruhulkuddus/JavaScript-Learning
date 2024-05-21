class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    display(){
        console.log(this.name, this.degree);
    }

    tech(){
        console.log("teach");
    }
}

const person = new Person('mosh');
person.walk();
const teac = new Teacher("ruhul", "MSc");
teac.display();