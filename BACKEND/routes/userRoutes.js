const express = require('express');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

const router = express.Router();

// Send OTP
router.post('/StudentSignup', async (req, res) => {
  const { email } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();
  const otpExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, otp, otpExpiry });
    } else {
      user.otp = otp;
      user.otpExpiry = otpExpiry;
    }
    await user.save();

    await sendEmail(email, 'Your OTP Code', `Your OTP code is ${otp}`);
    console.log(otp);
    res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Error sending OTP' });
  }
});

// Verify OTP
router.post('/StudentVerify', async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email, otp });
    if (!user) {
      return res.status(400).json({ error: 'Invalid OTP or email' });
    }
    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({ error: 'OTP expired' });
    }
    // OTP is valid, proceed with login/signup
    res.status(200).json({ message: 'OTP verified' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Error verifying OTP' });
  }
});

module.exports = router;
