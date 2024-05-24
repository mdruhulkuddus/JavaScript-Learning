//   // It cannot render multiple components directly, so wrap them in a single parent element like a <div> or a React fragment  <div>
// <div>
//     <Card />
//     <Card />
//     <Card />
//     <Card />
//   </div>

import React from "react";
// import Card from "./components/Card";
// import Data from "./data.json";
// import Card2 from "./components/Card2";


// import ReactBootstrap from "./components/ReactBootstrap"; 

// import State from "./components/State";
// import CONDITIONAL_RENDERING from "./components/CONDITIONAL_RENDERING/index";
// import EVENT_HANDLER from "./components/EVENT_HANDLER/index";
// import EVENT_HANDLER2 from "./components/EVENT_HANDLER/binding";

// import HooksUseState from "./components/HooksUseState";
import EventBubbling from "./components/EventBubbling";

// let items = [];
// for(let i = 0; i < Data.length; i++){
//   items.push(<Card titleText={Data[i].title} description={Data[i].description} />);
// }
// convert to map
// items = Data.map((item) =>  <Card titleText={item.title}  description={item.description}/> );

// const users = [
//   {
//     fullName: "Ruhul",
//     age: "28",
//     mobiles: [
//       {home: "545640320"},
//       {office: "4654654"}
//     ]
//   },
//   {
//     fullName: "Easin",
//     age: "4",
//     mobiles: [
//       {home: "4"},
//       {office: "86787768"}
//     ]
//   },
//   {
//     fullName: "Kuddus",
//     age: "5",
//     mobiles: [
//       {home: "224"},
//       {office: "54453"}
//     ],
//   },
// ];

function App() {

  return(
    <div>
    {/* <h1>Profiles</h1> */}
    {/* {items} */}
    {/* direcet mapping */}
    {/* {Data.map((item, index) =>  <Card key={index} titleText={item.title}  description={item.description}/>)} */}
    {/* <Card titleText="Ruhul Kuddus" description="This is my profile" />
    <Card titleText="Alamin" description="This is my Friend"/> */}

    {/* {users.map((user, index) => (
      <article key={index}>
        <h3>Name: {user.fullName}</h3>
        <p>Age: {user.age}</p>
        <div>
        {
          user.mobiles.map((phone, index) => 
            <div key={index}>
             {phone.home &&  <p>home: {phone.home}</p>}
             {phone.office &&  <p>office: {phone.office}</p>}
            </div>
          )
        }
        </div>
      </article>
    ))}

    <Card2 name="Ruhul card"/> */}


    {/* Bootstrap */}
    {/* <ReactBootstrap />
    <ReactBootstrap />
    <ReactBootstrap /> */}

    {/* state */}
    {/* <State counter = "0" /> */}

    {/* CONDITIONAL_RENDERING */}
    {/* <CONDITIONAL_RENDERING /> */}

    {/* event handling */}
{/* <EVENT_HANDLER /> */}

{/* binding */}
{/* <EVENT_HANDLER2 /> */}

{/* useState Hooks */}
<EventBubbling />

  </div>
  );
 
}

export default App;
