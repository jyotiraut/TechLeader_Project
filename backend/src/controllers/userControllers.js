import User from '../models/userModels.js'

const registerUser= async(req,res)=>{
    try{
        const {username,email,password,confirmPassword} = req.body;
        console.log(req.body);

        const user = new User({
            username,
            email,
            password,
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