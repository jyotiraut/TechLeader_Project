import { saveVolunteerData,getVolunteers } from "../controllers/volunteerController.js";
import express from "express";

const router = express.Router();

router.post("/save", saveVolunteerData);
router.get("/allvolunteer", getVolunteers);

export default router;