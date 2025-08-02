import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
    },
    email:{
        type:String,
    },
    mobileNo:{
        type:String,
    },
    username:{
        type: String,
    },
    password:{
        type:String,
    }
})

const userModel = mongoose.model("User", userSchema)

export default userModel