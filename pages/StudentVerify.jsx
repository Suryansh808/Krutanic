// src/pages/VerifyOTP.jsx
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/StudentVerify', { email, otp });
      navigate('/StudentProfile'); // Redirect to profile page
    } catch (err) {
      setMessage(err.response?.data || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <form >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
        />
        <button type="submit" onSubmit={handleSubmit}>Verify OTP</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default VerifyOTP;
