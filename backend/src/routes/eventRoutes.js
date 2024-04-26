import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from '../controllers/eventControllers.js';

const router = express.Router();

// Create a new event
router.post('/create', createEvent);

// Get all events
router.get('/allevents', getAllEvents);

// Get single event by ID
router.get('/:id', getEventById);

// Update an event by ID
router.put('/:id', updateEvent);

// Delete an event by ID
router.delete('/:id', deleteEvent);

export default router;
