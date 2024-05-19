// const square = function(number){
//     return number * number;
// };

const square = number => number * number;

console.log(square(5));

const jobs = [
    {
        id:1, isActive: true
    },
    {id:2, isActive: true},
    {
        id:3, isActive: false
    }
];
const activeJobs = jobs.filter(function (job){ return job.isActive; });
const jobsActive = jobs.filter( job => {return job.isActive})
console.log(jobsActive);
