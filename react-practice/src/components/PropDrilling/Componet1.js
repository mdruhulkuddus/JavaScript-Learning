/// prop drilling - componet1 -> componet2 -> component3

import React, { useState } from "react";
import Componet2 from "./Componet2";
import { UserContext } from "./UserContext";

const Componet1 = () => {
  const [user, setUser] = useState({
    id: 201,
    name: "Ruhul",
  });

  const [text, setText] = useState("Hello i am from Feni");

  return ( 
    <div>
      <h1>Componet 1 </h1>
      <UserContext.Provider value={{user, text}}>
        <Componet2  />
      </UserContext.Provider>
    </div>
  );
};

export default Componet1;
