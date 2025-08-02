import userModel from "../models/model.user.js"


export const sendData = async(req,res) => {
    const data = await userModel.find();
    res.send(data);
}

export const findUser = async(req,res)=>{
        const {username} = req.body;
        const user = await userModel.findOne({username})
        console.log(user);
        if(user) {
            console.log("shi req h");
            res.status(200).json({user : user.username})
            return
        }
            else res.status(400).json({message:"user not exist there"})
}

