import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class EVENT_HANDLER2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }
    }
    

    handleIncrement (){
        this.setState({
            count: this.state.count + 1
        })
    }

  

  render() {

    const {count} = this.state;

    return (
      <div>
       <h1>Count : {count}</h1>
       <Button variant='warning' onClick={this.handleIncrement.bind(this)} disabled={count === 100 ? true : false}> Increase </Button>
      </div>
    )
  }
}
