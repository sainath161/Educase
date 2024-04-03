// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { userData, setUser } = useUser();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      toast.error('Please fill in both email and password.');
      return;
    }
    if (loginData.password.length < 8) {
      toast.error('Password must be at least 8 characters long.');
      return;
    }
    if (userData && loginData.email === userData.email && loginData.password === userData.password) {
      navigate('/profile');
    } else {
      toast.error('Invalid email or password.');
    }
  };

  return (
    <div className='welcome'>
    <div className="container">
      <h2>Login</h2>
      <div className="input-container">
        <input type="email" name="email" value={loginData.email} onChange={handleInputChange} placeholder="Email Address" required />
      </div>
      <div className="password-input">
        <input type={showPassword ? "text" : "password"} name="password" value={loginData.password} onChange={handleInputChange} placeholder="Password" required />
      </div>
      <div className='button-container'>
      <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
