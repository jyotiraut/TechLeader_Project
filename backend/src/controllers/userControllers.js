import User from '../models/userModels.js'
import bcrypt from "bcrypt"

//user registration
const registerUser= async(req,res)=>{
    try{
        const {username,email,password,confirmPassword} = req.body;
        console.log(req.body);

        const existingUser = await User.findOne({email:email});
        if(existingUser){
            res.status(400).json({error:"User already exist"})
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



//User login

const loginUser = async(req,res)=>{
    try{
    const {email,password} = req.body;
    if(!email){
        res.status(401).json({error:"Email is required"});
    }

    const user = await User.findOne({email:email})
    if(!user){
        res.status(400).json({error:"User doesnot exist"});
    }

    const validPassword = bcrypt.compareSync(password,user.password);
    if(!validPassword){
        res.status(401).json({error:"Invalid email or password"});
    }
    res.status(200).json({error:"User Login sucessfully"});

}catch(error){
     res.status(400).json({error:"Login failed"});
}
}

export {registerUser,loginUser};