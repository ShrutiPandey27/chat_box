import React, { useEffect, useState } from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './Firebase';
import firebase  from 'firebase';
import Flipmove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton} from '@material-ui/core';




function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([
]);
  const[username,setUsername]=useState('');

  useEffect(()=>{
// run once when the app component loads
  db.collection('messages')
  .orderBy('timestamp','desc')
  .onSnapshot(snapshot=>{
  setMessages(snapshot.docs.map(doc=>({id: doc.id,message:doc.data()})))
})
  },[])

  useEffect(()=>{
      setUsername(prompt ('Please enter your name'));
  },[])

  console.log(input);
  console.log(messages);

  const sendMessage=(event)=>{
    event.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()

    })
 
    setInput('');
  }

  return (


    <div className="App">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNQ8L_mAG0wHrcBcbbIpyqwSZzZq-kBwsnqA&usqp=CAU"/>
    <h1>Messenger clone </h1>
    <h2>Welcome {username}</h2>
    <h8><i>Please do not spam</i></h8>

          <form className="app__form">
          <FormControl class="app__formControl">
 
            <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event =>setInput(event.target.value)} />
            <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
      <SendIcon/>
      </IconButton>
 
          </FormControl>
   
         </form>

        <Flipmove>
        {
      messages.map(({id,message}) =>(
       <Message key={id}  username={username} message={message}/>
      ))
    }
        </Flipmove>

   
    </div>
  );
}

export default App;
