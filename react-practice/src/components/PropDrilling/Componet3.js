
// useContext hook = global state
// 
import React, { useContext } from 'react'
import { UserContext } from './UserContext'
    
const Componet3 = () => {
    
//    const userData = useContext(UserContext);
   const {user, text} = useContext(UserContext);
//    console.log(userData);
  return (
    <div>
      <h1>Componet 3 </h1>

      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
      <h4>{text}</h4>
      
    </div>
  )
}

export default Componet3