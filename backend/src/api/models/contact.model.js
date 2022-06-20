const mongoose = require('mongoose');

/**
 * Contact Schema
 * @private
 */
const Contact = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  // status: { type: Number, required: true, default: 1 } // 1 == Pending, 2 == In Progress,  3 == Closed
}, { timestamps: true }
);

/**
 * @typedef Contact
 */

module.exports = mongoose.model('Contact', Contact);