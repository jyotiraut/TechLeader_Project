import Event from "../models/eventModels.js";

// Create a new event
const createEvent = async (req, res) => {
    try {
        const { title, description, image, date, location } = req.body;

        const newEvent = new Event({
            title,
            description,
            image,
            date,
            location
        });

        await newEvent.save();

        res.status(201).json(newEvent);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Get all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Get single event by ID
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json(event);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Update an event by ID
const updateEvent = async (req, res) => {
    try {
        const { title, description, image, date, location } = req.body;

        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        event.title = title;
        event.description = description;
        event.image = image;
        event.date = date;
        event.location = location;

        await event.save();

        res.status(200).json(event);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Delete an event by ID
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        await Event.deleteOne({ _id: event._id });

        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


export { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
