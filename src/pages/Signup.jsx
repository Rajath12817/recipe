import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import  {useNavigate } from "react-router-dom";

function Signup(props) {
  const [credentials,setCredentials] = useState({name:"",email :"",password:"",cpassword:""})

  let navigate = useNavigate()
  const handleSubmit =async(e)=>{
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/createuser',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body :JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
    })
    const json =  await response.json()
    if(json.success){     // success is in backend
      //save the auth token and  redirect
      localStorage.setItem('token',json.authtoken)
      navigate("/")
      props.showAlert("Account Created Successfully", "success")
    }
    else{
      props.showAlert("Invalid Details", "danger")
    }
  }
  const handlechange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }


  return (
    <div className='bg-image'>
    <form  onSubmit={handleSubmit} 
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
        Join the <span style={{ fontStyle: 'italic' }}>Indian Bites</span> Family!
      </h2>
      <div className="mb-3">
        <label className="form-label" style={{ fontWeight: '500' }}>Full Name</label>
        <div className="input-group">
          <span className="input-group-text"><FaUser color="#D2691E" /></span>
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            id="name"
            name="name"
            value={credentials.name}
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
        <label className="form-label" style={{ fontWeight: '500' }}>Email Address</label>
        <div className="input-group">
          <span className="input-group-text"><FaEnvelope color="#D2691E" /></span>
          <input
            type="email"
            className="form-control"
            placeholder="you@example.com"
            id="email"
            name="email"
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
            placeholder="Create a password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handlechange}
            minLength={5}
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
        <label className="form-label" style={{ fontWeight: '500' }}>Confirm Password</label>
        <div className="input-group">
          <span className="input-group-text"><FaLock color="#D2691E" /></span>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your password"
            id="cpassword"
            name="cpassword"
            value={credentials.cpassword}
            onChange={handlechange}
            minLength={5}
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
        Sign Up
      </button>
    </form>
    </div>
  );
}

export default Signup;
