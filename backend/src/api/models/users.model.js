const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const moment = require("moment-timezone");
const jwt = require("jwt-simple");
const {
  pwdSaltRounds,
  jwtExpirationInterval,
  pwEncruptionKey,
} = require("../../config/vars");

/**
 * User Schema
 * @private
 */
const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    number: { type: String },
    dietitian: { type: String },
  },
  { timestamps: true }
);

UserSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.getPasswordHash = async function (password) {
  const rounds = pwdSaltRounds ? parseInt(pwdSaltRounds) : 10;
  const hash = await bcrypt.hash(password, rounds);
  return hash;
};

/**
 * Methods
 */
UserSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      "_id",
      "email",
      "address",
      "description",
      "vineLink",
      "username",

    ];
    fields.forEach((field) => {
      transformed[field] = this[field];
    });
    return transformed;
  },
  token() {
    const playload = {
      exp: moment().add(jwtExpirationInterval, "minutes").unix(),
      iat: moment().unix(),
      sub: this._id,
    };
    return jwt.encode(playload, pwEncruptionKey);
  },
  async passwordMatches(password) {
    return bcrypt.compare(password, this.password);
  },
});

UserSchema.pre("save", async function save(next) {
  try {
    if (!this.isModified("password")) return next();
    const rounds = pwdSaltRounds ? parseInt(pwdSaltRounds) : 10;
    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});

/**
 * @typedef User
 */

module.exports = mongoose.model("users", UserSchema);
