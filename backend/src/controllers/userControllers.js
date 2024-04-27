import User from "../models/userModels.js";
import bcrypt from "bcrypt";
import generateTokenSetCookie from "../utils/generateToken.js";

const signupUser = async (req, res) => {
    console.log(req.body);

    try {
        const { firstName, lastName, email, password, confirmPassword, accountType, organizationName } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        if (accountType === 'individual') {
            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                return res.status(400).json({ message: "All fields are required" });
            }
        } else if (accountType === 'organization') {
            if (!organizationName || !email || !password || !confirmPassword) {
                return res.status(400).json({ message: "All fields are required" });
            }
        } else {
            return res.status(400).json({ message: "Invalid account type" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            firstName: accountType === 'individual' ? firstName : '',
            lastName: accountType === 'individual' ? lastName : '',
            organizationName: accountType === 'organization' ? organizationName : '',
            email,
            password: hashedPassword,
            accountType
        });

        generateTokenSetCookie(newUser._id, res);
        await newUser.save();

        res.status(200).json({
            message: "User created successfully",
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
           accountType: newUser.type,
            organizationName: newUser.organizationName
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};




const loginUser =  async (req, res) => {
   try{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"Invalid email or password"})
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Invalid email or password"})
    }

    generateTokenSetCookie(user._id,res)
    res.status(200).json({
        message:"Login successful",
        _id : user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email : user.email,
        type: user.type,
        organizationName: user.organizationName,
        token : user.token 
    });
   }catch(error){
    res.status(500).json({message:"Internal server error",error:error.message})
   }
};

const logoutUser = async (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"User logout successfully"})

    }catch(error){
        console.log(error.message)
        res.status(500).json({message:"Internal server error",error:error.message})
    }
}

export { signupUser, loginUser, logoutUser };
