import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    if (json.success) { 
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const handlechange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="bg-image d-flex align-items-center justify-content-center"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("https://wallpaperaccess.com/full/1737995.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Georgia, serif',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: '30px',
          background: 'rgba(255, 255, 255, 0.95)',
          maxWidth: '600px',
          borderRadius: '20px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
          animation: 'fadeIn 1.5s ease',
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: '#D2691E',
            fontFamily: 'Brush Script MT, cursive',
            fontSize: '36px',
          }}
        >
          Join the <span style={{ fontStyle: 'italic' }}>Indian Bites</span> Family!
        </h2>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: '600', fontSize: '16px', color: '#8B4513' }}>Full Name</label>
          <div className="input-group">
            <span className="input-group-text" style={{ backgroundColor: '#FFDAB9', border: 'none', borderRadius: '5px' }}>
              <FaUser color="#D2691E" />
            </span>
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
                marginLeft: '10px',
                width: '90%',
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: '600', fontSize: '16px', color: '#8B4513' }}>Email Address</label>
          <div className="input-group">
            <span className="input-group-text" style={{ backgroundColor: '#FFDAB9', border: 'none', borderRadius: '5px' }}>
              <FaEnvelope color="#D2691E" />
            </span>
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
                marginLeft: '10px',
                width: '90%',
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: '600', fontSize: '16px', color: '#8B4513' }}>Password</label>
          <div className="input-group">
            <span className="input-group-text" style={{ backgroundColor: '#FFDAB9', border: 'none', borderRadius: '5px' }}>
              <FaLock color="#D2691E" />
            </span>
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
                marginLeft: '10px',
                width: '90%',
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: '600', fontSize: '16px', color: '#8B4513' }}>Confirm Password</label>
          <div className="input-group">
            <span className="input-group-text" style={{ backgroundColor: '#FFDAB9', border: 'none', borderRadius: '5px' }}>
              <FaLock color="#D2691E" />
            </span>
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
                marginLeft: '10px',
                width: '90%',
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn w-100"
          style={{
            borderRadius: '10px',
            padding: '12px',
            fontWeight: 'bold',
            backgroundColor: '#D2691E',
            color: '#fff',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#8B4513')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#D2691E')}
        >
          Sign Up
        </button>
      </form>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Signup;