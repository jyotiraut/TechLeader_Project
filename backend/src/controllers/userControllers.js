import User from '../models/userModels.js'
import bcrypt from "bcrypt"

const registerUser= async(req,res)=>{
    try{
        const {username,email,password,confirmPassword} = req.body;
        console.log(req.body);

        const existingUser = await User.findOne({email:email});
        if(existingUser){
            res.status(400).json({error:"Email already exist"})
        }

        const hashedPassword = await bcrypt.hash(password,10);
        if(password!= confirmPassword){
            res.status(401).json({error:"password and Confirm password doesnot match"});
        }

        const user = new User({
            username,
            email,
            password : hashedPassword,
            confirmPassword
        })

        
        await user.save();
        res.status(201).json({message:"User registered successfully"});
    }
    catch(error){
        res.status(500).json({message:"Failed to register user"});
    }
    
}

export {registerUser};