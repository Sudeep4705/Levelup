import axios from "axios";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Signup(){

  const [logininfo,setlogininfo] = useState({
    email:"",
    username:"",
    password:""
  })

  const handlelogin=(e)=>{
    setlogininfo({...logininfo,[e.target.name]:e.target.value})
  }

  const navigate = useNavigate()

  const loginsubmit= async(e)=>{
   e.preventDefault()
    try{
await axios.post("http://localhost:8080/signup",logininfo)
alert("signup Completed")
setlogininfo({email:"",username:"",password:""})
navigate("/")

    }
    catch(error){
      console.log(error);
      
    }
  }

  


    return(
<div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
  <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "450px", borderRadius: "15px" }}>
    <h2 className="text-center text-primary mb-4">Create Your Account</h2>
    <form onSubmit={loginsubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={logininfo.email}
            onChange={handlelogin}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="username" className="form-label fw-bold">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Choose a username"
          value={logininfo.username}
            onChange={handlelogin}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label fw-bold">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter a strong password"
          value={logininfo.password}
          onChange={handlelogin}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-success btn-lg">Sign Up</button>
      </div>

      <p className="text-center mt-3 text-muted">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </form>
  </div>
</div>

    )
}


export default Signup;