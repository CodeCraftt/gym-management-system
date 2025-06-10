// backend/models/FeePackage.js
const mongoose = require('mongoose');

const feePackageSchema = new mongoose.Schema({
  name: String,
  durationInMonths: Number,
  amount: Number,
});

module.exports = mongoose.model('FeePackage', feePackageSchema);
