import Volunteer from '../models/volunteerModels.js';


const saveVolunteerData = async (req, res) => {
    try {
        // Extract data from request body
        const { firstName, lastName, email, phone, address } = req.body;

        // Create a new Volunteer instance
        const newVolunteer = new Volunteer({
            firstName,
            lastName,
            email,
            phone,
            address
        });

        // Save the volunteer data to the database
        const savedVolunteer = await newVolunteer.save();

        res.status(201).json(savedVolunteer);
    } catch (error) {
        res.status(500).json({ message: error.message });
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

export { saveVolunteerData,getVolunteers };
