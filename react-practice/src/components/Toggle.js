import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      style={{
        margin: "1rem",
        backgroundColor: "#FAEBD7",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      {toggle && (
        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tempore
          officiis consequatur reiciendis velit ut atque magnam dolorem tenetur
          inventore, minus consectetur veritatis tempora eum voluptas? Quam
          illum alias nobis?{" "}
        </p>
      )}

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        
        {toggle ? "Hide" : "Show"}
      </button>
     
    </div>
  );
};

export default Toggle;
