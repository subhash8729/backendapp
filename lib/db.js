import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://subhashdhaka8729:rakv2ydrGVib8dBx@subhash.52lifjh.mongodb.net/myApp")
        console.log("mongoDB connected");
    }
    catch{
        console.log("mongoDB connection failed");
    }
}

export default connectDB;