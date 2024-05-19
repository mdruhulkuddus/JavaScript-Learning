// arrow function dont rebind this keyword

// const person = {
//     talk(){
//         var self = this;
//         setTimeout(() => {
//             console.log("this", this);
//         }, 1000);
       
//     }
// }
// person.talk();

// function Person() {
//     this.age = 0;
  
//     setInterval(() => {
//       this.age++; // `this` correctly refers to the `Person` instance
//       console.log(this.age); // Correctly increments age
//     }, 1000);
//   }
  
//   let p = new Person();
  
  