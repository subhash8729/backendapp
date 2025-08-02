import { getToken } from "../Functions/jwt.js"
import userModel from "../models/model.user.js"
import jwt from "jsonwebtoken"

const login = async(req,res)=>{
  const {username , password} = req.body
  //now we got user name and password here to be verify
  const user = await userModel.findOne({
    username: username
  })
  if(user){
    // console.log(user);
    if (password == user.password){

        //create pay load
        // const payload = {
        //   _id : user._id,
        //   username : user.username
        // }
        // const token = jwt.sign(payload,"subhash",{expiresIn: "10m"})
        // res.cookie("token", token)
        // res.status(200).json({
        //   message :"correct username and password"
        // })
        // res.status(200).json({message:"user found"})

        res.status(200).json({
          token: getToken({username : user.username})
        })

    }
    else res.status(404).json({message:"password is incorrect"})
  }
  else res.status(404).json({message:"username does not exists"})

}



const signup = async(req,res)=>{
      const {fullName, email,mobileNo,username,password} = req.body;

      if(fullName=="" ||!email ||!mobileNo ||username=="" ||!password){
        res.status(200).json({message:"unwanted data types"})
        return;
      }
      console.log(fullName,email,mobileNo,username,password);


      const user = new userModel({
        fullName,
        email,
        mobileNo,
        username,
        password,
      })
      // console.log(user);
      const userData = await userModel.find({username})
      console.log(userData);
      if(userData.length >0) {
        res.status(400).json({message:"user exists"})
        return;
      }
      console.log("reached");
      user.save();

      res.send("user created")
}


const authLogin = (req,res)=>{
  try{
    let token = ""
    console.log(req.url);
    token = req.body.token;
    console.log(token);
    const result = jwt.verify(token , "subhash")
    res.status(200).json({
      message: "correct username and password",
      user : {
        username: result.username,
        _id:result._id
      },
      admin : false,
      result: true

      
    })
  }
  catch{
    res.status(400).json({
      message: "user is not logged in",
      result : false
    })
  }

}

export {login, signup,authLogin} 