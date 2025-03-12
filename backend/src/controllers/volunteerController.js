import Volunteer from "../models/volunteerModels.js";
import mongoose from "mongoose";
import Event from "../models/eventModels.js";
import nodemailer from "nodemailer";
import User from "../models/userModels.js"; // Assuming the user model exists


const saveVolunteerData = async (req, res) => {
    try {
        const { eventId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            return res.status(400).json({ message: "Invalid Event ID" });
        }

        const { firstName, lastName, email, phone, address, status } = req.body;

        if (!firstName || !lastName || !email || !phone || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }

        console.log("Received Volunteer Data:", req.body); // Debugging log

        const newVolunteer = new Volunteer({
            firstName,
            lastName,
            email,
            phone,
            address,
            eventId: new mongoose.Types.ObjectId(eventId),
            status,
        });

        const savedVolunteer = await newVolunteer.save();
        console.log(" Volunteer Data Saved:", savedVolunteer);

        // If status is "accepted", fetch organizer email and send email
      

        res.status(201).json({ message: "Volunteer saved successfully", volunteer: savedVolunteer });
    } catch (error) {
        console.error("Error in saveVolunteerData:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};




const getVolunteersByEvent = async (req, res) => {
    try {
        const userId = req.user.id;
        const events = await Event.find({ userId: userId });

        if (!events || events.length === 0) {
            return res.status(404).json({ message: "No events found for this user." });
        }

        const eventWithVolunteers = await Promise.all(
            events.map(async (event) => {
                const volunteers = await Volunteer.find({ eventId: event._id });
                return {
                    eventName: event.title,
                    eventId: event._id,
                    volunteers,
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


const updateVolunteerStatus = async (req, res) => {
    try {
        const { volunteerId } = req.params;
        const { status } = req.body;

        if (!["accepted", "declined"].includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        // Update volunteer status
        const volunteer = await Volunteer.findByIdAndUpdate(volunteerId, { status }, { new: true });

        if (!volunteer) {
            return res.status(404).json({ message: "Volunteer not found" });
        }

        // If status is "accepted", send email
        if (status === "accepted") {
            const event = await Event.findById(volunteer.eventId);
            if (!event) {
                return res.status(404).json({ message: "Event not found" });
            }

            const eventOrganizer = await User.findById(event.userId);
            if (!eventOrganizer) {
                return res.status(404).json({ message: "Event organizer not found" });
            }

            // Set up Nodemailer transporter
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: eventOrganizer.email, // Use environment variable for security
                    pass: process.env.EMAIL_PAS
                    , // Use App Password for Gmail
                },
            });

            // Email details
            const mailOptions = {
                from: eventOrganizer.email,
                to: volunteer.email,
                subject: "Volunteer Application Accepted",
                text: `Dear ${volunteer.firstName},

Congratulations! You have been accepted as a volunteer for the event "${event.title}".

Event Details:
📍 Location: ${event.location}
📅 Date: ${event.date}

Best Regards,
${eventOrganizer.name}
(Event Organizer)`,
            };

            // Send email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error("Error sending email:", error);
                } else {
                    console.log("Email sent:", info.response);
                }
            });
        }

        res.status(200).json({ message: `Volunteer ${status} successfully`, volunteer });
    } catch (error) {
        console.error("Error updating volunteer status:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



export { saveVolunteerData, getVolunteers, getVolunteersByEvent, updateVolunteerStatus };


