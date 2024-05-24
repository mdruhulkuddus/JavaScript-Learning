import React, { Component } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    

  render() {

    const {isLoggedIn} = this.state; 
    let element;
   
        // if(isLoggedIn){
        //     element =  <HomePage />
        // }else{
        //     element =  <LoginPage />
        // }

        // element = isLoggedIn ? <HomePage /> :  <LoginPage />;

    return (
        <div>
            {/* {element} */}
            {/* {isLoggedIn ? <HomePage /> :  <LoginPage />} */}

            {/* short circuit */}
            {isLoggedIn &&  <HomePage /> }
        </div>
    );
  }
}


export default CONDITIONAL_RENDERING