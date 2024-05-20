import express from 'express';
import { createEvent, getEvents, getEventsByDate } from '../controllers/eventControllers.js';
import uploadImage  from '../middlewares/multerMiddlewares.js';
import { protectedRoutes } from '../middlewares/protectedRoutes.js';

const router = express.Router();

// Create a new event
router.post('/create',uploadImage, createEvent);

// Get all events
router.get('/allevents', getEvents);

// Get single event by ID
router.get('/:id', getEventsByDate);

// Update an event by ID
// router.put('/:id', updateEvent);

// // Delete an event by ID
// router.delete('/:id', deleteEvent);

export default router;
