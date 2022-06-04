import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import {Link , useLocation , useNavigate} from 'react-router-dom';
import './chat2.css';
import TextContainer from './TextContainer/TextContainer';
import Messages from './Messages/Messages';
import InfoBar from './Infobar/infobar';
import Input from './Input/input';

let socket;


const QandA = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'http://localhost:5000';
  
  useEffect(()=>{
    const {name , room} = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit('join',{name , room},(error)=>{
      if(error) {
        alert(error);
      }
    });

  

 
  },[ENDPOINT , location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    
}, []);

const sendMessage = (event) => {
  event.preventDefault();

  if(message) {
    socket.emit('sendMessage', message, () => setMessage(''));
  }
}
console.log(message , messages);
  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default QandA;