import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
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
    
}, { timestamps: true });

// userSchema.methods.generateAccessTokens = async function(){
//    return jwt.sign(
//         {
//             _id : this._id,
//             email : this.email
//         },
//          process.env.ACCESS_TOKEN_SECRET,
//          {
//              expiresIn : process.env.ACCESS_TOKEN_EXPIRY
//          }

//     )
// }

// userSchema.methods.generateRefreshTokens = async function(){
//      return jwt.sign({
//         _id : this._id,
//         email : this.email
//     },
//     process.env.REFRESH_TOKEN_SECRET,
//     {
//           expiresIn : process.env.REFRESH_TOKEN_EXPIRY
//     })
    
// }

const User = mongoose.model("User", userSchema); 
export default User;
