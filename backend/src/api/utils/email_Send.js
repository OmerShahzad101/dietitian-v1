const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.mailendo.com',
    port: 25,
    auth: {
        user: 'admin@dietitianyourway.com',
        pass: 'Eggsbacon0*'
    }

});

exports.SendEmail = (to , subject, html) => {
    try {
        const mailOptions = {
            to ,
            from: "admin@dietitianyourway.com",
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