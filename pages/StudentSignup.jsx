import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const StudentSignup = () => {

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/StudentSignup', { email });
      setMessage(res.data.message);
      setError('');
     
    } catch (err) {
      setMessage('');
      setError(err.response ? err.response.data.error : 'Error sending OTP');
    }
  };

  const navigate = useNavigate();
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/StudentVerify', { email, otp });
      setMessage(res.data.message);
      setError('');
      alert("successfully login")
      navigate("/Resume");
    } catch (err) {
      setMessage('');
      setError(err.response ? err.response.data.error : 'Error verifying OTP');
    }
  };

  return (
    <div className='w-full h-[50vh] flex flex-col gap-10 items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send OTP</button>
      </form>
      
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleOtpSubmit}>
        <label>OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default StudentSignup;
