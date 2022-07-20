const Contact = require("../../models/contact.model");
const User = require("../../models/users.model");
var request = require("request");
const env = require("../../../config/vars");
const {
  contactUs,
  DietitianTemplate,
  ClientTemplate,
  OtpTemplate,
} = require("./emailTemplate/emailTemplate");
const { SendEmail } = require("../../utils/email_Send");
const { config } = require("dotenv");

//creating Account API
exports.register = async (req, res, next) => {
  let MailingListID = env.client_email_id;
  let { firstName, lastName, email, dietitian, OTP } = req.body;
  let payload = { firstName, lastName, email, dietitian, OTP };

  if (dietitian == "yes") {
    MailingListID = env.dietition_email_id;
  }

  if (dietitian == "yes") {
    RegistrationEmailSendDietitian(payload);
  } else {
    RegistrationEmailSendClient(payload);
  }
  //Store to DataBase
  email = email.toLowerCase();
  let user = await User.findOne({ email });
  if (user) {
    return res
      .status(200)
      .send({ status: false, message: "User already exists" });
  } else {
    const check = await User.findOne({ OTP: payload.OTP }).lean(true);
    console.log(check);
    if (check) {
      //Moosend Request
      request({
        method: "POST",
        url: `https://api.moosend.com/v3/subscribers/${MailingListID}/subscribe.json?apikey=${env.api_key}`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // body: `{ \"Name\": \"${name}\",  \"Email\": \"${email}\", \"Mobile\": \"${number}\"}`,
        body: `{  \"Email\": \"${email}\", \"CustomFields\": [    \"FirstName=${firstName}\", \"LastName=${lastName}\" ]}`,
      });
      user = await User.findOneAndUpdate( OTP , payload);

      return res
        .status(200)
        .send({ status: true, message: "Register successfully" });
    } else {
      return res
      .status(200)
      .send({ status: false, message: "OTP not match" });
    }
  }
};

// 2FA
exports.authOTP = async (req, res) => {
  let { email } = req.body;

  const OTP = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  let payload = { email, OTP };
  let user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    let response = await User.create({ OTP });
    OTPEmail(payload);
    return res
      .status(200)
      .send({ status: true, message: "OTP is send to your Email!", response });
  } else {
    return res
      .status(200)
      .send({ status: false, message: "User already exist!" });
  }
};

//Contact Us
exports.contact = async (req, res) => {
  let { name, email, subject, message } = req.body;
  let payload = { name, email, subject, message };

  let contact = await Contact.create(payload);
  contactUsForm(payload);
  return res
    .status(200)
    .send({ status: true, message: "Thank you for filling the form!" });
};

function OTPEmail(payload) {
  const { email, OTP } = payload;

  let emailbody = OtpTemplate.replace("{{OTP}}", OTP);
  let subject = "OTP for you Dietitian Your Way";
  SendEmail(email, subject, emailbody);
}

function contactUsForm(payload) {
  const { name, email, subject, message } = payload;
  const emailto = "info@dietitianyourway.com";

  let emailbody = contactUs
    .replace("{{name}}", name)
    .replace("{{email}}", email)
    .replace("{{subject}}", subject)
    .replace("{{Message}}", message);
  SendEmail(emailto, subject, emailbody);
}

function RegistrationEmailSendDietitian(payload) {
  const { firstName, email } = payload;
  const subject = `We’re so glad you’re here, ${firstName}`;
  let emailbody = DietitianTemplate.replace("{{Name}}", firstName);
  SendEmail(email, subject, emailbody);
}

function RegistrationEmailSendClient(payload) {
  const { firstName, email } = payload;
  const subject = `We’re so glad you’re here, ${firstName}`;
  let emailbody = ClientTemplate.replace("{{Name}}", firstName);
  SendEmail(email, subject, emailbody);
}
