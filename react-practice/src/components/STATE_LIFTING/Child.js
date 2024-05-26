import React from 'react'

const Child = (props) => {

    const data = "Hi am form child data";
    props.onChildData (data);

  return (
    <div>
      <p>I am IN the child Compoenet</p>
      <p>{props.data}</p>
    </div>
  )
}

export default Child
