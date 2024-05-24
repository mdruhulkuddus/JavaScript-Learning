import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function HooksUseState() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount(count + 1); 
    // update state based on previous state
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <Button
        variant="warning"
        onClick={handleIncrement}
        disabled={count === 100 ? true : false}
      >
        {" "}
        Increase{" "}
      </Button>
    </div>
  );
}
