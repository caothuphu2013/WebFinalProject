const nodemailer = require('nodemailer');

module.exports = function (toEmail, contentEmail) {
  
  this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'dackweb2018@gmail.com',
          pass: 'web244466666'
      }
  });

  this.mailOptions = {
      from: 'dackweb2018@gmail.com',
      to: toEmail,
      subject: 'Tạo mật khẩu mới',
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