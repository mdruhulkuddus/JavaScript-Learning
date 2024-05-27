import React, { useEffect, useState } from 'react'

const UseEffectExam = () => {
  const [count, setCount] = useState(0);
const [loading, setLoading] = useState(true);
  
// useEffect(()=>{
//     //calles with every rendering
//     console.log('useEffect');
//   }) 

//   useEffect(()=>{
//     //calles only one time
//     console.log('useEffect');
//   }, []) 
  
  useEffect(()=>{
    //calles depends on dependy, if call count then it workd
    console.log('useEffect');
  }, [count]) ; // count is dependency
  return (
  
    <div>
       { console.log("rendering :>>")}
      <h1> UseEffect Example </h1>

      <h3>
        count : {count}
      </h3>
      <button onClick={()=>{setCount(count+1)}}> + </button>
<br></br>
      <button onClick={()=>{setLoading(!loading)}}> Loading </button>
    </div>
  )
}

export default UseEffectExam
