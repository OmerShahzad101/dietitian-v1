const path = require('path');
// import .env variables
require('dotenv').config();
module.exports = {
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  encruptionKey: process.env.ENCRYPTION_KEY,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  frontEncSecret: process.env.FRONT_ENC_SECRET,
  emailAdd: process.env.EMAIL,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  pwEncruptionKey: process.env.PW_ENCRYPTION_KEY,
  pwdSaltRounds: process.env.PWD_SALT_ROUNDS,
  frontUrl:process.env.FRONT_URL,
  userDefaultImage: '/img/placeholder.png',
  client_email_id: process.env.CLIENT_EMAIL_LIST_ID,
  dietition_email_id:process.env.DIETITION_EMAIL_LIST_ID,
  api_key: process.env.API_KEY,
};
