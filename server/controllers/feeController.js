// backend/controllers/feeController.js
const FeePackage = require('../models/FeePackage');

exports.createPackage = async (req, res) => {
  const pkg = new FeePackage(req.body);
  await pkg.save();
  res.status(201).json(pkg);
};

exports.getPackages = async (req, res) => {
  const all = await FeePackage.find();
  res.json(all);
};
