import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, // Assuming the image is stored as a URL
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
 
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema); 
export default Event;
