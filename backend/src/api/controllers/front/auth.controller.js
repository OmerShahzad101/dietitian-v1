const baseURL = "https://healthiwealthi.arhamsoft.org/";
const { SendEmail } = require("../../utils/email_Send");
const { frontUrl } = require("../../../config/vars");
const User = require("../../models/users.model");
var request = require("request");
const {accountVerificationEmailTemplate,resetPasswordEmailTemplate} = require("./emailTemplate/emailTemplate");
const env = require("../../../config/vars");

exports.register = async (req, res, next) => {
  let MailingListID = env.client_email_id;
  let { name, email, number, dietitian } = req.body;
  let payload = { name, email, number, dietitian };
  if (dietitian == "yes") { MailingListID = env.dietition_email_id }


  request(
    {
      method: "POST",
      url: `https://api.moosend.com/v3/subscribers/${MailingListID}/subscribe.json?apikey=${env.api_key}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: `{ \"Name\": \"${name}\",  \"Email\": \"${email}\", \"Mobile\": \"${number}\"}`},
  );
  
  email = email.toLowerCase();
  let user = await User.findOne({ email });
  if (user) {
    return res
      .status(200)
      .send({ status: false, message: "User already exists" });
  }
  user = await User.create(payload);
  return res
    .status(200)
    .send({ status: true, message: "Register successfully" });
};

function sendAccountVerificationEmail(userObj) {
  console.log("userObj", userObj);
  const token = userObj.accessToken;
  const subject = "Please verify your account";
  const to = userObj.email;
  const url = `${frontUrl}auth/verify-email/${token}`;
  const emailBody = accountVerificationEmailTemplate.replace("{{url}}", url);
  console.log(emailBody);
  SendEmail(to, subject, emailBody);
}

function sendPasswordResetEmail(userObj) {
  const { _id, email, accessToken } = userObj;
  const subject = "Forget Password!";
  const to = email;
  const url = `${baseURL}reset-password/${accessToken}`;
  const emailBody = resetPasswordEmailTemplate.replace("{{url}}", url);
  SendEmail(to, subject, emailBody);
}
