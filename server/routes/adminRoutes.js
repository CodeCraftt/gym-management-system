import express from "express";
import {
  addMember,
  updateMember,
  deleteMember,
  createBill,
  createNotification
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/add-member", addMember);
router.put("/update-member/:id", updateMember);
router.delete("/delete-member/:id", deleteMember);
router.post("/create-bill", createBill);
router.post("/create-notification", createNotification);

export default router;
