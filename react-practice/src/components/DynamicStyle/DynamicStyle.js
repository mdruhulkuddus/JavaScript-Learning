import React, { useEffect, useState } from "react";
import "./style.css";

export default function DynamicStyle() {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(true);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);

  return (
    <div className="container">
      <input
        type="text"
        value={name}
        onChange={handleChange}
        // style={{ backgroundColor: validInput ? "green" : "red" }}
        // className={`${validInput ? "valid" : "invalid"}`}
        className={`${validInput && "valid"}`}
      />
    </div>
  );
}
