import React, { useState } from 'react'
import User from './User';

const PropTyps = () => {
  // const [name, setName] = useState("RUhul");
  const [name, setName] = useState();
  const [id, setId] = useState(543);
  const [user, setUser] = useState({
    id: 105,
    name: "tutul"
  })
  return (
    <div>
      <User userName={name} userId = {id} user={user}/>
    </div>
  )
}

export default PropTyps
