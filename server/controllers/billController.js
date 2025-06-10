// backend/controllers/billController.js
const BillReceipt = require('../models/BillReceipt');

exports.createBill = async (req, res) => {
  const receipt = new BillReceipt(req.body);
  await receipt.save();
  res.status(201).json(receipt);
};

exports.getBillsByMember = async (req, res) => {
  // console.log(`Fetching bills for member: ${req.user}`);
  
  const bills = await BillReceipt.find({ memberId: req.user._id}).populate('packageId');
  res.json(bills);
};

exports.getAllBills = async (req, res) => {
  const bills = await BillReceipt.find().populate('packageId').populate('memberId');
  res.json(bills);
};
