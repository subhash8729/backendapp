import express from "express";
// const app = express();
import cors from "cors";
import router from "./routes/auth.routes.js";
import routerChat from "./routes/chat.routes.js";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/check.routes.js";
import cookieParser from "cookie-parser";
import {Server} from "socket.io"
import http from "http"
import "./lib/socket.js"
import { app } from "./lib/socket.js";

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,   
}));



// const server = http.createServer(app)
// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

app.use("/", router);
app.use("/",routerChat)
app.use("/check", authRoutes);

connectDB()



// const io = new Server(server,{
//     cors:{
//         origin:"http://localhost:5173"
//     },
// })

//   io.on("connection",(socket)=>{
//     console.log("user connected : ",socket.id);
//     socket.on("userInfo",()=>console.log(socket.user))
    
//     socket.on("message",(data)=>{
//       console.log(data);
//       socket.broadcast.emit("sms",data)
//     })
// })


// app.listen(3000,()=>{
//     console.log("server is running");
// })

// const server = http.createServer(app);

// const io = new Server(server)


// app.listen(3000,()=>{
//     console.log("server started");
// })

// io.on("connection", (socket) => {
//   console.log("A new user connected with ID -->", socket.id);
//   setTimeout(() => {
//     socket.emit("hello","hello this is the message the hello")
//   }, 4000);
//   socket.on("hello",(data)=>{console.log(data);})
// });



// io.emit("the_data",{message:"Message from the server"})