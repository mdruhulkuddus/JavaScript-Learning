import { Person  } from "./person";

export class Teacher extends Person {
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

