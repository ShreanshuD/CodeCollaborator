const events = require('express');

const app=events();

const http=require('http');

const {Server}=require("socket.io");

const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:'http://localhost:5173',
        methods:["GET","POST"]
    }
})


server.listen(3000,()=>{
    console.log("Server is running");
})