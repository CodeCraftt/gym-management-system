// backend/controllers/memberController.js
const Member = require('../models/Member');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getAllMembers = async (req, res) => {
  const members = await Member.find();
  res.json(members);
};

exports.createMember = async (req, res) => {
  const { name, email, phone, address } = req.body;

  try {
    // 1. Check if email already used
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // 2. Create Member entry
    const newMember = new Member({ name, email, phone, address });
    await newMember.save();

    // 3. Create User login
    const defaultPassword = 'default@123';
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const newUser = new User({
      _id: newMember._id, // Use Member ID as User ID
      name,
      email,
      password: hashedPassword,
      role: 'member',
    });
    await newUser.save();

    res.status(201).json({
      message: 'Member and login credentials created.',
      defaultPassword, // Optionally return this or let admin set it
      member: newMember,
      user: newUser,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating member' });
  }
};

exports.updateMember = async (req, res) => {
  const { id } = req.params;
  const updated = await Member.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteMember = async (req, res) => {
  const { id } = req.params;
  await Member.findByIdAndDelete(id);
  res.json({ message: 'Member deleted' });
};
