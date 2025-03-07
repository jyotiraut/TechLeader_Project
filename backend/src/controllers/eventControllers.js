import jwt from "jsonwebtoken";
import Event from "../models/eventModels.js";

const createEvent = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const image = req.file ? req.file.path : ""; // Check if file exists in request object
    const userId = req.user._id;   
    
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
      userId,
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

const getUserEvents = async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from URL

    console.log("Fetching events for userId:", userId); // Debugging

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // Fetch events where `userId` matches the logged-in user's ID
    const events = await Event.find({ userId: userId });

    console.log("Fetched Events:", events); // Debugging
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching user events:", error);
    res.status(500).json({ error: "Internal Server Error" });
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

export { createEvent, getEventsByDate, getEvents,getUserEvents };
