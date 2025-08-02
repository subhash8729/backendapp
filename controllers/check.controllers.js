import { verifyToken } from "../Functions/jwt.js";
import userModel from "../models/model.user.js";


export const authToken = async(req,res)=>{
    const {token} = req.body;
    const result = verifyToken(token)
    if(!result.username) {
        res.status(400).json({message:"not a proper token"})
        console.log("proper token nhi h");
        return;
    }
    try{
    const mongoResult = await userModel.findOne({username:result.username})
    res.status(200).json({username: mongoResult.username})
    return;
    }
    catch{
        res.status(400).json({message:"invalid token"})
    }
}