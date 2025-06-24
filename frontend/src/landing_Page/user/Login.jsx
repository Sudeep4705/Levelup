

import axios from "axios";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login(){

  const [logininfo,setlogininfo] = useState({
  
    username:"",
    password:""
  })

  const handlelogin=(e)=>{
    setlogininfo({...logininfo,[e.target.name]:e.target.value})

  }

  const navigate = useNavigate()
 const submitlogin=(async(e)=>{
e.preventDefault()
try{
 await  axios.post("http://localhost:8080/login",logininfo)
alert("login Completed")

navigate("/")
}
catch (err) {
    const msg = err.response?.data?.message || "Username and password is not found";
    alert(msg); // Shows "Incorrect username" or "Incorrect password"
  }

 })



  

  


    return(
<div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
  <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "450px", borderRadius: "15px" }}>
    <h2 className="text-center text-primary mb-4">Login</h2>
    <form onSubmit={submitlogin}>
     

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
        <button type="submit" className="btn btn-success btn-lg">Login</button>
      </div>


    </form>
  </div>
</div>

    )
}





export default Login;