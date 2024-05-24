import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function EventBubbling() {
  const [count, setCount] = useState(0);

const handleChildClick = (event) =>{
    event.stopPropagation(); // for avoid event bubbling
    console.log("Child event ", event);
}

const handleParentClick = (event) =>{
    console.log("Parent event ", event);
}



  return (
    <div className="parent" onClick={handleParentClick} style={{backgroundColor: "green"}}>
      <h1>Count : {count}</h1>
      <Button variant="warning" onClick={handleChildClick} > Click </Button>
    </div>
  );
}
