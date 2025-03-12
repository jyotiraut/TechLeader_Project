import { saveVolunteerData,getVolunteers,getVolunteersByEvent} from "../controllers/volunteerController.js";
import express from "express";
import { protectedRoutes } from "../middlewares/protectedRoutes.js";
const router = express.Router();

router.post("/:eventId/save", saveVolunteerData);
router.get("/:eventId/allvolunteer", getVolunteers);
router.get("/myevents",protectedRoutes, getVolunteersByEvent);

export default router;