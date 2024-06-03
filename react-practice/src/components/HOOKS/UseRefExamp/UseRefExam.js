import React, { useRef } from "react";
import style from "./form.css";

export default function UseRefExam() {

  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const userPassword = passwordRef.current.value;
    console.log({userName, userPassword});
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.formGroup}>
        <label>Name:</label>
        <input type="text" name="name" id="name" ref={userNameRef}/>
      </div>
      <div className={style.formGroup}>
        <label>Email:</label>
        <input type="password" name="password" ref={passwordRef }/>
      </div>
      <div className={style.formGroup}>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}
