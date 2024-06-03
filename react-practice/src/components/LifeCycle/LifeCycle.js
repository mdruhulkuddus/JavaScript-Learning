import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  shouldComponentUpdate(){
    console.log("shouldConponetUPdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");

    return (
      <div>
        <h1>Life Cycle of class component</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
