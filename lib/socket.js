import { Socket } from "dgram";
import express from "express";
import http from "http"
import {Server} from "socket.io"

const app = express()
const server = http.createServer(app)
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const usernameToSocketId = {};
const io = new Server(server,{
    cors:{
        origin:"*"
    },
})

  io.on("connection",(socket)=>{
    let username=""
    console.log("user connected : ",socket.id);
    socket.on("userInfo",(data)=>{
      username = data.username
      usernameToSocketId[data.username] = data.socketId;
      console.log(usernameToSocketId);
    })
    
    socket.on("disconnect",()=>{
      console.log("username deleted-->",username);
      delete usernameToSocketId[username]
      console.log(usernameToSocketId);
    })
    
    socket.on("message",(data)=>{
      if(data.to in usernameToSocketId){
        console.log("user is online");
        console.log(usernameToSocketId);
        io.to(usernameToSocketId[data.to]).emit("new_message",data);
        return;
      }
      else{
        console.log("user is offline");
        console.log(usernameToSocketId);
        return;
      }
      // const private_socket = getPrivateSocket(data.username)
    })
})

export {io,app}