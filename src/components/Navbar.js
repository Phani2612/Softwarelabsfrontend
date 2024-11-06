// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({onLoginClick}) {
  return (
    <nav className="navbar navbar-dark bg-dark"  >
      <ol className="homenavbar">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing" className="nav-link">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link to="/features" className="nav-link">Features</Link>
        </li>
        <li className="nav-item">
          <Link to="/new-project" className="nav-link">New Project</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">Blog</Link>
        </li>

       
       <li  >

       <Link onClick={onLoginClick} to="/login" style={{ textDecoration: 'none' }}>
      <button type="button" id="loginbutton" className="btn btn-light">
        Login
      </button>
    </Link>

       </li> 




      </ol>
    </nav>
  );
}

export default Navbar;
