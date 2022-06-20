const Contact = require("../../models/contact.model");
const User = require("../../models/users.model");
var request = require("request");
const env = require("../../../config/vars");
const {contactUs} = require("./emailTemplate/emailTemplate");
const { SendEmail } = require("../../utils/email_Send");


//creating Account API
exports.register = async (req, res, next) => {
  let MailingListID = env.client_email_id;
  let { firstName, lastName, email, dietitian } = req.body;
  let payload = { firstName, lastName, email, dietitian };
  if (dietitian == "yes") {
    MailingListID = env.dietition_email_id;
  }
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

  //Store to DataBase
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

//Contact Us 
exports.contact = async (req, res) => {
  let { name, email, subject, message } = req.body;
  let payload = { name, email, subject, message };

  let contact = await Contact.create(payload);
  contactUsForm(payload)
  return res
    .status(200)
    .send({ status: true, message: "Thank you for filling the form!" });
};

function contactUsForm(payload) {
  const{ email, subject, message } = payload;
  const from = email;
  const emailBody = contactUs.replace("{{Message}}", message);
  SendEmail(from, subject, emailBody);
}