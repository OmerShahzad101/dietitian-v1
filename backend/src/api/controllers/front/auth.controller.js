const User = require("../../models/users.model");
var request = require("request");
const env = require("../../../config/vars");

exports.register = async (req, res, next) => {
  let MailingListID = env.client_email_id;
  let { firstName, lastName, email, dietitian } = req.body;
  let payload = { firstName, lastName, email, dietitian };
  if (dietitian == "yes") { MailingListID = env.dietition_email_id; }

  request({
    method: "POST",
    url: `https://api.moosend.com/v3/subscribers/${MailingListID}/subscribe.json?apikey=${env.api_key}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // body: `{ \"Name\": \"${name}\",  \"Email\": \"${email}\", \"Mobile\": \"${number}\"}`,
    body: `{  \"Email\": \"${email}\", \"CustomFields\": [    \"FirstName=${firstName}\", \"LastName=${lastName}\" ]}`
  });

  email = email.toLowerCase();
  let user = await User.findOne({ email });
  console.log(user)
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

