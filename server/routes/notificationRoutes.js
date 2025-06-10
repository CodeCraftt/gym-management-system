// backend/routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const {
  createNotification,
  getAllNotifications,
} = require('../controllers/notificationController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

router.use(protect);
router.post('/', isAdmin, createNotification);
router.get('/', getAllNotifications);

module.exports = router;
