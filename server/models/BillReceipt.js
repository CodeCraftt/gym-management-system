// backend/models/BillReceipt.js
const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'FeePackage' },
  date: { type: Date, default: Date.now },
  amountPaid: Number,
  status: { type: String, enum: ['paid', 'unpaid'], default: 'paid' },
});

module.exports = mongoose.model('BillReceipt', billSchema);
