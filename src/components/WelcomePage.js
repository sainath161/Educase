// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css';

const WelcomePage = () => {
  return (
    <div className='welcome'>
    <div className="container1">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit.</p>
      <div className="button-container">
        <Link to="/create-account">
          <button className="create-account-button">Create Account</button>
        </Link>
        <Link to="/login"> {/* Link to the Login page */}
          <button className="login-button">Already Registered? Login</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default WelcomePage;
