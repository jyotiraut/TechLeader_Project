import jwt from "jsonwebtoken"
import User from "../models/userModels.js"

const protectedRoutes = async(req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token){
        res.status(404).json({message:"Token not found"});
    }
       const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
       if(!decoded){
        res.status(401).json({message:"Unauthorized:Invalid token"})
       }

       const user = await User.findById(decoded.userId).select("-password");
       if(!user){
        res.status(404).jason({message:"User not found"})
       }
      req.user = user ;
      next();

 }
    catch(error){
        res.status(500).json({message:"Internal server error",error:error.message});
    }


}

export {protectedRoutes}