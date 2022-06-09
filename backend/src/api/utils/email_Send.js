const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "healthiwealthi4@gmail.com",
    pass: "qwerty@123",
  },
});

exports.SendEmail = (to, subject, html) => {
  try {
    console.log("Here we go");
    const mailOptions = {
      from: "healthiwealthi4@gmail.com",
      to,
      subject,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
