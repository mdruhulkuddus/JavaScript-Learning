import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }
    }
    

    handleIncrement = ()=> {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrement = ()=> {
        this.setState({
            count: this.state.count - 1
        })
    }
  

  render() {

    const {count} = this.state;

    return (
      <div>
       <h1>Count : {count}</h1>
       <Button variant='success' onClick={this.handleIncrement} disabled={count === 10 ? true : false}> + </Button>
       <Button variant='warning' onClick={this.handleDecrement} disabled={count === 0 ? true : false}> - </Button>
      </div>
    )
  }
}
