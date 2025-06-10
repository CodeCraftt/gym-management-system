import User from "../models/User.js";
import Bill from "../models/Bill.js";
import Notification from "../models/Notification.js";

// Add Member
export const addMember = async (req, res) => {
  try {
    const newMember = new User({ ...req.body, role: "member" });
    await newMember.save();
    res.status(201).json({ message: "Member added", newMember });
  } catch (err) {
    res.status(500).json({ message: "Error adding member" });
  }
};

// Update/Delete Member
export const updateMember = async (req, res) => {
  try {
    const member = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({ message: "Error updating member" });
  }
};

export const deleteMember = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Member deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting member" });
  }
};

// Create Bill
export const createBill = async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(201).json(newBill);
  } catch (err) {
    res.status(500).json({ message: "Error creating bill" });
  }
};

// Create Notification
export const createNotification = async (req, res) => {
  try {
    const newNote = new Notification(req.body);
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ message: "Error creating notification" });
  }
};
