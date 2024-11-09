import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'; 
import logo from './unnamed.webp';


const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          <img
            src={logo}
            alt="Indian Bites Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="ms-2 font-weight-bold text-dark">Indian Bites</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/recipes">
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/regional">
                Regional Cuisine
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">
                About
              </Link>
            </li>
          </ul>

          {!localStorage.getItem('token') ? (
            <div className="d-flex">
              <button
                className="btn btn-outline-dark mx-2 custom-btn"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="btn btn-outline-dark mx-2 custom-btn"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <button onClick={handleLogout} className="btn btn-outline-dark custom-btn">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
