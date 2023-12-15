import * as React from 'react';

import _ from 'lodash';
import { Box, Message } from '@components';
import { MessagesHistoryProps } from '@types';
import { useEffect, useRef } from 'react';


const MessageHistory: React.FC<MessagesHistoryProps> = ({
  chat,
  messages,
  user
}) => {


  const inputRef = useRef<null | HTMLDivElement>(null);


  useEffect(() => {
      // Scroll to the bottom of the chat box
      inputRef.current ? inputRef.current.scrollIntoView({ behavior: 'smooth' }) : undefined;
  }, [messages]); // Scroll when messages change


  return (
    <Box
      backgroundImage={`url(./images/backgroundImage.png)`}
      backgroundPosition={'center'}
      backgroundSize={'cover'}
      backgroundRepeat={'repeat'}
      h={'100%'}
      overflowY={'auto'}
    >
      {
        messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            isUserMessage={message.isUserMessage(user.userId)}
            username={chat.isGroup ? message.senderName : undefined}
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