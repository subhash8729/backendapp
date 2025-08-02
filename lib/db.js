import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
        console.log("mongoDB connected");
    }
    catch{
        console.log("mongoDB connection failed");
    }
}

export default connectDB;