import jwt from "jsonwebtoken";
import Event from "../models/eventModels.js";

const createEvent = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const image = req.file ? req.file.path : ""; // Check if file exists in request object

    // Get the user ID from the request object (assuming it's available)
    // const token = req.cookies.jwt;

    // // Verify and decode the token
    // const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // const userId = decoded.id;
    // console.log("this is the ",userId)

    // Create a new event including the user ID
    const event = new Event({
      title,
      description,
      location,
      date,
      image: image.replace(/\\/g, "/").replace(/^public\//, ""),
      
    });

    // Save the event to the database
    const savedEvent = await event.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error(error);
    
     
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
