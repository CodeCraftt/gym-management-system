// backend/routes/billRoutes.js
const express = require('express');
const router = express.Router();
const {
  createBill,
  getBillsByMember,
  getAllBills,
} = require('../controllers/billController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

router.use(protect);
router.post('/', isAdmin, createBill);
router.get('/admin', isAdmin, getAllBills);
router.get('/my', getBillsByMember);

module.exports = router;
