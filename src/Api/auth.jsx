import axios from 'axios';

// Set the base URL for the API
axios.defaults.baseURL = 'http://localhost:3001'; 
// Replace with your API URL

export const sendOtp = async (email) => {
  if (!email) {
    throw new Error('Email is required');
  }

  if (!validateEmail(email)) {
    throw new Error('Invalid email address');
  }

  try {
    const response = await axios.post('/Api/send-otp', { email });
    return response.data;
  } catch (error) {
    console.error('Error sending OTP:', error.response?.data || error.message);
    return Promise.reject(new Error(`Error sending OTP: ${error.response?.data?.message || error.message}`));
  }
};

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const verifyOtp = async (email, otp) => {
  if (!email || !otp) {
    throw new Error('Email and OTP are required');
  }

  if (!validateEmail(email)) {
    throw new Error('Invalid email address');
  }

  if (!validateOtp(otp)) {
    throw new Error('Invalid OTP');
  }

  try {
    const response = await axios.post('/Api/verify-otp', { email, otp });
    return response.data;
  } catch (error) {
    console.error('Error verifying OTP:', error.response?.data || error.message);
    return Promise.reject(new Error(`Error verifying OTP: ${error.response?.data?.message || error.message}`));
  }
};

// Helper functions for validation
// export const validateEmail = (email) => {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return emailRegex.test(email);
// };

export const validateOtp = (otp) => {
  const otpRegex = /^\d{6}$/; // Assuming OTP is a 6-digit numeric string
  return otpRegex.test(otp);
};