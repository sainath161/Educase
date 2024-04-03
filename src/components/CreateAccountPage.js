// CreateAccountPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/CreateAccount.css';

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    const phoneNumber = value.replace(/\D/g, ''); // Remove non-numeric characters
    setFormData(prevState => ({
      ...prevState,
      phoneNumber: phoneNumber.slice(0, 10) // Limit to 10 digits
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleCreateAccount = () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.password || !formData.companyName || !formData.isAgency) {
      toast.error('Please fill in all fields.');
      return;
    }
    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long.');
      return;
    }
    setUser(formData);
    navigate('/profile');
  };

  return (
    <div className='welcome'>
    <div className="container">
      <h2>Create Your PopX Account</h2>
      <div className="input-container">
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" required />
      </div>
      <div className="input-container">
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handlePhoneNumberChange} placeholder="Phone Number" maxLength={10} required />
      </div>
      <div className="input-container">
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" required />
      </div>
      <div className="password-input">
        <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" required />
      </div>
      <div className="input-container">
        <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Company Name" required />
      </div>
      <div className="radio-container">
      <div>Are you an agency?</div> <br></br>
        <label>
          <input type="radio" name="isAgency" value="Yes" onChange={handleInputChange} required /> Yes
        </label>
        <label>
          <input type="radio" name="isAgency" value="No" onChange={handleInputChange} required /> No
        </label>
      </div>
      <div className='button-container1'>
      <button onClick={handleCreateAccount}>Create Account</button>
      </div>
    </div>
    </div>
  );
};

export default CreateAccountPage;
