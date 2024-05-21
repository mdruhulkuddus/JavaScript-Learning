import React from 'react';
import ReactDOM from 'react-dom/client';

const pStyle = {
  color: "green",
  textAlign: "center"
}

const jsCode = "this is js code";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <h1 style={{color: "red", fontSize: "6rem"}}>Hello world</h1> 
      <p style={pStyle}>Here is the world</p> 
    <p>{jsCode}</p> 
    {/* use curly brace for js variable use */}
    </div>
    
);

