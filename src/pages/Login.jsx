import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showAlert("Logged in Successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="bg-image"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("https://wallpaperaccess.com/full/1737995.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Georgia, serif',
        overflow: 'hidden',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: '30px',
          background: 'rgba(255, 255, 255, 0.95)',
          width: '40%', 
          borderRadius: '20px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          animation: 'slideIn 1.5s ease', 
        }}
      >
        <h2
          style={{
            color: '#D2691E',
            fontFamily: 'Brush Script MT, cursive',
            fontSize: '36px',
          }}
        >
          Welcome to <span style={{ fontStyle: 'italic' }}>Indian Bites</span>!
        </h2>
        <p
          style={{
            color: '#8B4513',
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '20px',
          }}
        >
          Login to explore mouthwatering recipes!
        </p>
        <div className="mb-3">
          <label
            className="form-label"
            style={{
              fontWeight: '600',
              fontSize: '16px',
              color: '#8B4513',
              display: 'block',
              marginBottom: '5px',
              textAlign: 'left',
            }}
          >
            Email Address
          </label>
          <div className="input-group">
            <span
              className="input-group-text"
              style={{
                backgroundColor: '#FFDAB9',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
              }}
            >
              <FaEnvelope color="#D2691E" />
            </span>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={credentials.email}
              onChange={handleChange}
              required
              style={{
                borderRadius: '5px',
                backgroundColor: '#fffaf0',
                border: '1px solid #D2691E',
                width: '90%',
                marginLeft: '10px',
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            style={{
              fontWeight: '600',
              fontSize: '16px',
              color: '#8B4513',
              display: 'block',
              marginBottom: '5px',
              textAlign: 'left',
            }}
          >
            Password
          </label>
          <div className="input-group">
            <span
              className="input-group-text"
              style={{
                backgroundColor: '#FFDAB9',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
              }}
            >
              <FaLock color="#D2691E" />
            </span>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
              style={{
                borderRadius: '5px',
                backgroundColor: '#fffaf0',
                border: '1px solid #D2691E',
                width: '90%',
                marginLeft: '10px',
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
            marginTop: '10px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#8B4513')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#D2691E')}
        >
          Login
        </button>
        <p
          className="text-center mt-3"
          style={{
            fontSize: '14px',
            color: '#8B4513',
          }}
        >
          Don’t have an account?{" "}
          <a href="/signup" style={{ color: '#D2691E', textDecoration: 'none' }}>
            Sign Up
          </a>
        </p>
      </form>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Login;