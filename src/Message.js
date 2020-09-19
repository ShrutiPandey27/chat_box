import { Card,CardContent,Typography } from '@material-ui/core'
import React, { forwardRef} from 'react';

import './Message.css';

const Message=forwardRef(({message,username},ref)=> {

    const isUser = username === message.username;
    return(
      <div ref={ref} className={`message  ${isUser && 'message__user'}` } >
        <Card className={isUser ? "message__userCard":"message__questCard"} >
      <CardContent>
        <Typography
         color="red"
         variant="h5"
         component="h2"
         >

         
        {!isUser && `${message.username || "Unknown user"} : `}{message.message}
        </Typography>
       
      </CardContent>
     
        </Card>
    </div>
     )
})

    
  
    
export default Message;