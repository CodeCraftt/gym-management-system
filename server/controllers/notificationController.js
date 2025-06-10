// backend/controllers/notificationController.js
const Notification = require('../models/Notification');

exports.createNotification = async (req, res) => {
  const notify = new Notification(req.body);
  await notify.save();
  res.status(201).json(notify);
};

exports.getAllNotifications = async (req, res) => {
  const notes = await Notification.find().sort({ createdAt: -1 });
  res.json(notes);
};
