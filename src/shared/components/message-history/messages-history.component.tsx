import * as React from 'react';

import _ from 'lodash';
import { Box, Message } from '@components';
import { MessagesHistoryProps } from '@types';
import { useEffect, useRef, useState } from 'react';


const MessageHistory: React.FC<MessagesHistoryProps> = ({
  chat,
  messages,
  user
}) => {


  const inputRef = useRef<null | HTMLDivElement>(null);
  const [messageInfo, setMessageInfo] = useState();

  const receivedMessageInfo = (message: any) => {
    setMessageInfo(message);
  }


  useEffect(() => {
    // Scroll to the bottom of the chat box
    inputRef.current ? inputRef.current.scrollIntoView({ behavior: 'smooth' }) : undefined;
  }, [messages]); // Scroll when messages change

  return (
    
      <Box h={'100%'}
        overflowY={'auto'}
        zIndex={'2'}
        position={'relative'}>
        {
          messages.map((message, index) => (
            <Message
              key={index}
              message={message}
              userId={user.userId}
              username={chat.isGroup && !message.isUserMessage(user.userId) ? message.senderName : undefined}
            />
          ))
        }
        <div ref={inputRef} />
      </Box>
  
  );
}

export default React.memo(MessageHistory, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});