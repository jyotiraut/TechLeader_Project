import Volunteer from '../models/volunteerModels.js';
import mongoose from 'mongoose';
import Event from '../models/eventModels.js';


// const saveVolunteerData = async (req, res) => {
//     try {
//         // Extract eventId from the URL parameters
//         const eventId = new mongoose.Types.ObjectId(req.params.eventId);

//         // Extract data from request body
//         const { firstName, lastName, email, phone, address } = req.body;

//         // Ensure eventId is provided
//         if (!eventId) {
//             return res.status(400).json({ message: "Event ID is required" });
//         }

//         // Create a new Volunteer instance with the eventId
//         const newVolunteer = new Volunteer({
//             firstName,
//             lastName,
//             email,
//             phone,
//             address,
//             eventId  // Store eventId in the database
//         });

//         // Save the volunteer data to the database
//         const savedVolunteer = await newVolunteer.save();

//         res.status(201).json(savedVolunteer);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
const saveVolunteerData = async (req, res) => {
    try {
        // Validate eventId
        const { eventId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            return res.status(400).json({ message: "Invalid Event ID" });
        }
        const objectId = new mongoose.Types.ObjectId(eventId);

        // Extract data from request body
        const { firstName, lastName, email, phone, address } = req.body;

        // Ensure required fields are present
        if (!firstName || !lastName || !email || !phone || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }

        console.log("Received Data:", req.body); // Debugging log

        // Create a new Volunteer instance
        const newVolunteer = new Volunteer({
            firstName,
            lastName,
            email,
            phone,
            address,
            eventId: objectId, // Store eventId as an ObjectId in the database
        });

        // Save to database
        const savedVolunteer = await newVolunteer.save();
        res.status(201).json(savedVolunteer);

    } catch (error) {
        console.error("Error saving volunteer:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const getVolunteersByEvent = async (req, res) => {
    try {
        const userId = req.user.id; // Extract logged-in user ID from JWT

        // Fetch all events created by the user
        const events = await Event.find({ userId: userId });

        if (!events || events.length === 0) {
            return res.status(404).json({ message: "No events found for this user." });
        }

        // Fetch volunteers for each event
        const eventWithVolunteers = await Promise.all(
            events.map(async (event) => {
                const volunteers = await Volunteer.find({ eventId: event._id });
                return {
                    eventName: event.title, // Assuming 'title' is the correct field for event name
                    eventId: event._id,
                    volunteers
                };
            })
        );

        res.status(200).json(eventWithVolunteers);
    } catch (error) {
        console.error("Error fetching volunteers:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};






const getVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find({});
        res.status(200).json(volunteers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { saveVolunteerData,getVolunteers,getVolunteersByEvent};
