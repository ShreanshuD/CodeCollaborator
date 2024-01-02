const express = require('express');

const app=express();

const http=require('http');

const {Server}=require("socket.io");

const cors=require("cors"); 

app.use(cors());


const server=http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});



io.on('connection',(Socket)=>{
    console.log('user connected',Socket.id);

    Socket.on("join_room",(data)=>{
        Socket.join(data)
    })

    Socket.on("send_messages", (data) => {
        // io.emit("receive_message", data)
        Socket.to(data.room).emit("receive_message", data);
    },
    err=>console.log(err));
    }
)

server.listen(3001,()=>{
    console.log("Server is running");
})

