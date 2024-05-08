// console.log(React);
// console.log(ReactDOM);

 const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div", null, "Hellow wordl");

// ReactDOM.render(myElement, domContainer);


// react do this for up line
// let p = document.createElement("p");
// p.innerHTML = "hellow world";
// domContainer.appendChild(p);

const Increment = () =>{
    const [counter, setcounter] = React.useState(0);
    
   return (
        <div>
                <h1 id="display" class="m-5" >{counter}</h1>
           <div>
           <button type="button" id="button" class="btn btn-success" onClick={setcounter(counter+1)}>Increment + </button>
           </div>
        </div>
    );
};

// ReactDOM.render(Increment(), domContainer);
ReactDOM.render(<Increment />, domContainer);


