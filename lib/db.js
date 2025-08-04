import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://subhashdhaka8729:rakv2ydrGVib8dBx@subhash.52lifjh.mongodb.net/myApp")
        console.log("mongoDB connected");
    }
    catch(error){
        console.log("mongoDB connection failed");
        console.log("the error is ",error);
    }
}

export default connectDB;