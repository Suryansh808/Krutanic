// import React, { useState } from 'react';
// import axios from 'axios';
// const CareerPortal = () => {

//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handleOtpChange = (e) => setOtp(e.target.value);

//   const sendOtp = async () => {
//     try {
//       const response = await axios.post('/api/send-otp', { email });
//       if (response.data.success) {
//         setOtpSent(true);
//         setMessage('OTP sent to your email');
//         setEmail("")
//       } else {
//         setMessage('Error sending OTP');
//         setEmail("")
//       }
//     } catch (error) {
//       setMessage('Error sending OTP');
//       setEmail("")
//     }
//   };
//   return (
//     <>
//       <section>
//       <div className='w-full h-scree text-center '>
//        {message && <p>{message}</p>}
//       {!otpSent ? (
//         <div className='flex items-center justify-center flex-col'>
//           <input className='w-[40vw] px-3 py-2 border rounded-md mb-2 mt-3' type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
//           <button className='w-[40vw] px-3 py-2 border rounded-md mb-2 mt-3' onClick={sendOtp}>Send OTP</button>
//         </div>
//       ) : (
//         <div className='flex items-center justify-center flex-col'>
//           <input className='w-[40vw] px-3 py-2 border rounded-md mb-2 mt-3' type="text" value={otp} onChange={handleOtpChange} placeholder="Enter OTP" />
//           <button className='w-[40vw] px-3 py-2 border rounded-md mb-2 mt-3' onClick={verifyOtp}>Verify OTP</button>
//         </div>
//       )}
//        </div>
//       </section>
//     </>
//   );
// };

// export default CareerPortal;