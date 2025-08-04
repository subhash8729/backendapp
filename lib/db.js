import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://subhash8729:TAMTjpqFtQmdNhsE@chat-app.52oxmns.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=chat-app/mydatabase")
        console.log("mongoDB connected");
    }
    catch(error){
        console.log("mongoDB connection failed");
        console.log("the error is ",error);
    }
}

export default connectDB;