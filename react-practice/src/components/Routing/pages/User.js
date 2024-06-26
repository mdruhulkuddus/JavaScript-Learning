import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
    const {userId} = useParams();
    const [seachParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState("");
    // console.log(seachParams.get("id"));

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSearchParams({name:name})
    }
  return (
    <div>
      user
      <h1>{userId}</h1>
      <h1>{seachParams.get("id")}</h1>
      <h1>{seachParams.get("age")}</h1>
      <h1>{seachParams.get("name")}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => {
setName(e.target.value)
        }} />
        <button type='submit'>Find User</button>
      </form>
    </div>
  )
}

export default User
