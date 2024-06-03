import React, { Component, createRef } from "react";
import style from "./form.css";

export default class RefExam extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    // console.log(this.userNameRef.current);
    console.log(this.userNameRef.current.value);
    this.userNameRef.current.style.color = "green";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={style.formGroup}>
          <label>Name:</label>
          <input type="text" name="name" id="name" ref={this.userNameRef} />
        </div>
        <div className={style.formGroup}>
          <label>Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className={style.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    );
  }
}
