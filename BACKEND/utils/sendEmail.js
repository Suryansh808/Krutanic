const Mail = require('@sendgrid/mail');
require('dotenv').config();

Mail.setApiKey(process.env.SENDGRID_PASS);

const sendOTPEmail = (to, otp) => {
    const msg = {
        to: to,
        from: 'saxena@krtnc.in', // Your verified sender
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
    };

    Mail.send(msg)
        .then(() => {
            console.log('Email sent');
        })
        .catch(error => {
            console.error('Error sending email:', error);
        });
};

module.exports = sendOTPEmail;
