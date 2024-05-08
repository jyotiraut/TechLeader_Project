import mongoose from "mongoose";

const volunteerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
  
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
   
}, { timestamps: true });

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;
