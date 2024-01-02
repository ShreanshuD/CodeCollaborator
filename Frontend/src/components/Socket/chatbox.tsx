import React, { useState, useEffect } from 'react';
// Adjust the path based on your project structure
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

export function ChatComponent() {
    const [message,setMessage]=useState("")
    const [receivedMessage,setReceivedMessage]=useState("")
    const [room,setRoom]=useState('')

    const joinRoom=()=>{
        
        if(room!=''){
            socket.emit("join_room",room)
        }
    }
    const sendMessage = () => {
        setRoom('99')
        joinRoom()
        // Assuming messages is an array of strings
        socket.emit('send_messages',{message,room})
    };

    useEffect(()=>{
        socket.on("receive_message",(data:any)=>{
            setReceivedMessage(data.message);
        })
    },[])

  return (
   <div className='App'>
    <input placeholder='message,,' onChange={(e)=>setMessage(e.target.value)}/>
    <button onClick={sendMessage}>Send message</button>
    <div>{receivedMessage}</div>
   </div>
  );
}

