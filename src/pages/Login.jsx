import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import  { useNavigate } from "react-router-dom";

function Login(props) {
  const [credentials,setCredentials] = useState({email :"",password:""})
  let navigate = useNavigate()

  const handleSubmit=async(e)=>{
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
    <div className="bg-image">
      <form onSubmit={handleSubmit} 
      style={{
        padding: '20px', 
        background: 'rgba(255, 248, 240, 0.9)', 
        maxWidth: '400px', 
        margin: 'auto', 
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Georgia, serif',
      }}
    >
      <h2 className="text-center mb-4" 
        style={{ color: '#D2691E', fontFamily: 'Brush Script MT, cursive', fontSize: '28px' }}
      >
        Welcome Back to <span style={{ fontStyle: 'italic' }}>Indian Bites</span>!
      </h2>
      <div className="mb-3">
        <label className="form-label" style={{ fontWeight: '500' }}>Email Address</label>
        <div className="input-group">
          <span className="input-group-text"><FaEnvelope color="#D2691E" /></span>
          <input
            type="email"
            className="form-control"
            id='email'
            name='email'
            placeholder="you@example.com"
            value={credentials.email}
            onChange={handlechange}
            required
            style={{
              borderRadius: '5px',
              backgroundColor: '#fffaf0',
              border: '1px solid #D2691E',
            }}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label" style={{ fontWeight: '500' }}>Password</label>
        <div className="input-group">
          <span className="input-group-text"><FaLock color="#D2691E" /></span>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            id='password'
            name='password'
            value={credentials.password}
            onChange={handlechange}
            required
            style={{
              borderRadius: '5px',
              backgroundColor: '#fffaf0',
              border: '1px solid #D2691E',
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn w-100"
        style={{
          borderRadius: '5px', 
          padding: '10px', 
          fontWeight: 'bold', 
          backgroundColor: '#D2691E', 
          color: '#fff'
        }}
      >
        Login
      </button>
    </form>
    </div>
   
  );
}

export default Login;