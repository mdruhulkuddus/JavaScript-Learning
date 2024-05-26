import React, {useState} from 'react'
import style from "./form.css";


export default function FORM2() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

const[user, setUser] = useState({name: '', email:''});
const{name, email} = user;

//   const handleNameChange = (e)=>{
//     setUser({name: e.target.value, email});
//   }
//   const handleEmailChange = (e)=>{
//     setUser({name, email: e.target.value});
//   }
  
  const handleChange = (e) => {
    // const inputFieldName = e.target.name;
    // if(inputFieldName == "name"){
    //     setUser({name: e.target.value, email});
    // }else if(inputFieldName == "email"){
    //     setUser({name, email: e.target.value});
    // }
   setUser({...user, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    console.log("Form is submitted");
    console.log(name, email);
  
    console.log(user)
    e.preventDefault();
  }


  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
        <label >Name:</label>
       <input type='text' name='name' id='name' onChange={handleChange} required />
        </div>
        <div className={style.formGroup}>
        <label >Email:</label>
       <input type='email' name='email' id='email' onChange={handleChange} required />
        </div>
        <div className={style.formGroup}>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}
