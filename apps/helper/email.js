const nodemailer = require('nodemailer');

module.exports = function (fromEmail, toEmail, subject, contentEmail) {
  
  this.transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // use SSL
        service: 'gmail',
        auth: {
            user: 'dackweb2018@gmail.com',
            pass: 'web244466666'
        }
  });

  this.mailOptions = {
      from: fromEmail,
      to: toEmail,
      subject: subject,
      text: contentEmail
  };

  this.SendEmail = function () {
    this.transporter.sendMail(this.mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
    });
  }
}