const nodemailer = require('nodemailer');
const Transport = require('nodemailer-sendinblue-transport');
const pug = require('pug');
const htmlToText = require('html-to-text');

const {
  emailHost,
  emailPort,
  userEmail,
  userPassword,
  emailFrom,
  sendingBlueApiKey,
} = require('../config');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Natours <${emailFrom}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // SendinBlue V3
      return nodemailer.createTransport(
        new Transport({ apiKey: sendingBlueApiKey })
      );
    }

    // Mailtrap
    return nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      auth: {
        user: userEmail,
        pass: userPassword,
      },
    });
  }

  async send(template, subject) {
    // render HTML based on pug-template
    const html = pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    // email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html),
    };

    // create transport and send the email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to Natours family');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for 10 minutes).'
    );
  }
};
