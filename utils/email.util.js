const nodemailer = require('nodemailer');
const { emailHost, emailPort, userEmail, userPassword } = require('../config');

/**
 * Use to send email to user
 * @param {*} options
 */
const sendEmail = async (options) => {
  // create transporter
  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    auth: {
      user: userEmail,
      pass: userPassword,
    },
  });

  // email options
  const mailOptions = {
    from: 'Nirinasoa Herilanto <nirinasoa.herilanto@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
