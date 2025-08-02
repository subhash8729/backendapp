import jwt from "jsonwebtoken"

export const getToken =(data)=>{
    const token = jwt.sign(data,"subhash");
    return token;
}
export const verifyToken = (token)=>{
    try{
        const payload = jwt.verify(token,"subhash")
        return payload;
    }
    catch{
        return false;
    }
}

