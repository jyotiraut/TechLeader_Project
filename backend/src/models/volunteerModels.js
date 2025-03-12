import mongoose from "mongoose";
import { type } from "os";

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
    eventId :{ type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true } ,

    status: {
        type: String,
        enum: ["pending", "accepted", "declined"],
        default: "pending" },
   
   
}, { timestamps: true });

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;
