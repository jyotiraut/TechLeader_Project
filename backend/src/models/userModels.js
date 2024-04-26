import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
    },
    type: {
        type: String,
        enum: ['individual', 'organization'],
        required: true
    },
    organizationName: {
        type: String,
        required: function() {
            return this.type === 'organization';
        }
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema); 
export default User;

