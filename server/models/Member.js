// backend/models/Member.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  joinDate: Date,
  feeStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
  package: String,
});

module.exports = mongoose.model('Member', memberSchema);
