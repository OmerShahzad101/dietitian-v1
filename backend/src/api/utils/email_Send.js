const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'eebadali04@gmail.com',
        pass: 'jaocpzvzfphromgu'
    }

});

exports.SendEmail = (from, subject, html) => {
    try {
        const mailOptions = {
            to: from, 
            from,
            subject,
            html,
        };
        console.log(mailOptions)
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