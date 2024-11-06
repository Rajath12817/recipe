import React, { useState } from "react";
import  { useNavigate } from "react-router-dom";


const Login = (props) => {

  const [credentials,setCredentials] = useState({email :"",password:""})
  let navigate = useNavigate()

  const handlesubmit=async(e)=>{
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method : 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({email:credentials.email,password:credentials.password})

    });
  const json = await response.json()
  console.log(json)
  if(json.success){     // success is in backend
    //save the auth token and  redirect
    localStorage.setItem('token',json.authtoken)
    navigate("/")
    props.showAlert("logged in Successfully", "success")
  }
  else{
    props.showAlert("invalid Credentials", "danger")
  }



  }
  const handlechange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-3">
      <h2>Login to continue with indian Bites</h2>
      <form  onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={handlechange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handlechange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
