// backend/routes/feeRoutes.js
const express = require('express');
const router = express.Router();
const { createPackage, getPackages } = require('../controllers/feeController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

router.use(protect);
router.post('/', isAdmin, createPackage);
router.get('/', getPackages);

module.exports = router;
