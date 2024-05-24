// import logo from './logo.svg';
import "./App.css";
import React from "react";
import FORM from "./component/FORM/Form";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Now starting react, i'm comming DOM Bhai... Khela hobe..
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Clock from "./component/Clock";

function App() {
  return (
    <div>
      <Clock locale="bn-BD" />

      {/* form */}
      <FORM />
    </div>
  );
}

export default App;
