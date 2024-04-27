import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: function() {
            return this.accountType === 'individual';
        }
    },
    lastName: {
        type: String,
        required: function() {
            return this.accountType === 'individual';
        }
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
    accountType: {
        type: String,
        enum: ['individual', 'organization'],
        required: true
    },
    organizationName: {
        type: String,
        required: function() {
            return this.accountType === 'organization';
        }
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema); 
export default User;
