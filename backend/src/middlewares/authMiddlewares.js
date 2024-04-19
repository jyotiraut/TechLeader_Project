import User from "../models/userModels";
import jwt from "jsonwebtoken"

export const verifyJWT = async(req,res,next)=>{
  try{
  const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","");
  if(!token){
    res.status(401).json({error:"Unauthrozed request "});
  }

  const decodedToken = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

  const user = await User.findById(decodedToken?._id).select("-email");
  if(!user){
    res.status(401).json({error:"Invlaid access Token"});
  }
  req.user = user;
  next();
} catch(error){;
  res.status(401).json({error:"Invalid access Token "})
}
}