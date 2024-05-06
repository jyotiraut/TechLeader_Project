import { saveVolunteerData } from "../controllers/volunteerController.js";
import express from "express";

const router = express.Router();

router.post("/save", saveVolunteerData);

export default router;