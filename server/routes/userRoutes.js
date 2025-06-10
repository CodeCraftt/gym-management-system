import express from "express";
import { getCoaches } from "../controllers/userController.js";

const router = express.Router();

router.get("/coaches", getCoaches);

export default router;
