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