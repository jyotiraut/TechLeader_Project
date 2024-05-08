import Event from "../models/eventModels.js";

// Create a new event
const createEvent = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const image = req.file ? req.file.path : ""; // Check if file exists in request object
    
    // Get the user ID from the request object (assuming it's available)
    const userId = req.user._id; // Assuming the user ID is available in req.user._id, modify this according to your authentication setup
    console.log(userId)
    // Create a new event including the user ID
    const event = new Event({
      title,
      description,
      location,
      date,
      image: image.replace(/\\/g, '/').replace(/^public\//, ''),
      userId: userId // Include the user ID
    });

    // Save the event to the database
    const savedEvent = await event.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    // Find all events
    const events = await Event.find({});

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get events by date
const getEventsByDate = async (req, res) => {
  try {
    const { date } = req.params;
    // Find all events
    const events = await Event.find({ date });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { createEvent, getEventsByDate, getEvents };
