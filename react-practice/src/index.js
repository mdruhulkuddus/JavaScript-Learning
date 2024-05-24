import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import Card from "./components/Card";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

// const pStyle = {
//   color: "green",
//   textAlign: "center"
// }

// const jsCode = "this is js code";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <h1 style={{ color: "red", fontSize: "3rem" }}>Hello world</h1>
//     {/* <p style={pStyle}>Here is the world</p>  */}
//     <p className="pStyle largeFont">Here is the world</p>
//     <p>{jsCode}</p>
//     {/* use curly brace for js variable use */}
//   </div>
// );



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<App />
);