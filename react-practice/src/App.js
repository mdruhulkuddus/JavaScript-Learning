//   // It cannot render multiple components directly, so wrap them in a single parent element like a <div> or a React fragment  <div>
// <div>
//     <Card />
//     <Card />
//     <Card />
//     <Card />
//   </div>

import React from "react";
import Card from "./components/Card";

function App() {
  return(
    <div>
    <h1>Profiles</h1>
    <Card titleText="Ruhul Kuddus" description="This is my profile" />
    <Card titleText="Alamin" description="This is my Friend"/>
  </div>
  );
 
}

export default App;
