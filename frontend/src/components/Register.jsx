import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';
import {register} from '../api'
function Register() {
  const [userName,setusername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const navigate = useNavigate();
 const handleSubmit = async(e)=>
  {
     e.preventDefault();
     try
     {
         await register({userName,email,password});
         alert("Registration successful");
         navigate("/");
     }
     catch(e)
     {
       alert("Registration failed");
     }
  }
  return (
 
      <form className='signup-container' onSubmit={handleSubmit}>
  <div >
   
    <p>Please fill in this form to create an account.</p>
    
    <label htmlFor="username" ><b>Username</b></label>
    <input type="text"  value={userName} onChange={e=>setusername(e.target.value)} placeholder="Enter username" name="username" required />


    <label htmlFor="email" ><b>Email</b></label>
    <input type="text"  value={email} onChange={e=>setemail(e.target.value)} placeholder="Enter Email" name="email" required />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" value={password} onChange={e=>setpassword(e.target.value)} placeholder="Enter Password" name="psw" required />
  

    <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
 
  )
}

export default Register