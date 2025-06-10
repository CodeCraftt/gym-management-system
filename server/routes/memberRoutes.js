// backend/routes/memberRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
} = require('../controllers/memberController');

const { protect, isAdmin } = require('../middleware/authMiddleware');

router.use(protect, isAdmin); // admin-only

router.get('/', getAllMembers);
router.post('/', createMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

module.exports = router;
