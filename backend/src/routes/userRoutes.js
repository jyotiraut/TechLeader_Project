import { registerUser } from "../controllers/userControllers.js";
import express from "express";
const router = express.Router();

router.post("/register",registerUser);

export default router;