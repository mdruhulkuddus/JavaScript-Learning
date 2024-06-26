import React, {useState} from 'react'
import style from "./form.css"


export default function FORM() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e)=>{
    setName(e.target.value);
  }
  const handleEmailChange = (e)=>{
    setEmail(e.target.value);
  }
  const handleSubmit = (e)=>{
    console.log("Form is submitted");
    console.log(name, email);
    let userInfo = {
      name: name,
      email: email
    }
    console.log(userInfo)
    e.preventDefault();
  }


  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
        <label >Name:</label>
       <input type='text' name='name' id='name' onChange={handleNameChange} required />
        </div>
        <div className={style.formGroup}>
        <label >Email:</label>
       <input type='email' name='email' id='email' onChange={handleEmailChange} required />
        </div>
        <div className={style.formGroup}>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>  
  )
}
