import React from "react";

class Clock extends React.Component{
    state ={ date: new Date()};

    componentDidMount(){
       this.clocktimer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.clocktimer) 
    }
tick(){
    this.setState({
        date: new Date()
                    });
}
    render(){
      return( 
            <h1 className="heading" >
        <span className="text">Time - {this.state.date.toLocaleTimeString(this.props.locale) } </span>
      </h1>
      );
    }
  }
  
  
  export default Clock;



// element render

// const index = 0;
// setInterval(() => {
//   const element = (
//     <h1 className="heading" tabIndex={index}>
//       <span className="text">Today -  {new Date().toLocaleDateString() } </span> <br></br>
//       <span className="text">Time -  {new Date().toLocaleTimeString() } </span>
//     </h1>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }, 1*1000);

//componet render

// class Clock extends React.Component{
//   render(){
//     return( 
//           <h1 className="heading" >
//       <span className="text">Time - {new Date().toLocaleTimeString(this.props.locale) } </span>
//     </h1>
//     );
//   }
// }


// export default Clock;