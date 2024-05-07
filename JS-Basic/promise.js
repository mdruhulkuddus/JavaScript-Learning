const meetingTime = "10:00 AM";
const reachTime = "10:00 AM";
const promise = new Promise((resolve, reject)=>{
  if(meetingTime === reachTime){
     resolve("Promise resolved")
  }
  else{
    reject("Promise Rejected")
  }
})

console.log(promise)

// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = 'Fetched data';
//         resolve(data);
//       }, 1000);
//     });
//   }
  
//   fetchData()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

const promise1 = Promise.resolve(50);
const promise2 = Promise.resolve(60);
const promise3 = Promise.reject(0);

const promisesWithoutReject = [promise1, promise2, promise3];
Promise.all(promisesWithoutReject)
  .then(result => console.log(result))
  .catch(error => console.log(error));
  
