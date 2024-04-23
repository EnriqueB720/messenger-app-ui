import * as React from 'react';

import _ from 'lodash';
import { Badge, Box, Message } from '@components';
import { MessagesHistoryProps } from '@types';
import { useEffect, useRef, useState } from 'react';
import { Message as IMessage } from '@model';
import { DateService } from '@services';


const MessageHistory: React.FC<MessagesHistoryProps> = ({
  chat,
  user
}) => {

  const dateService = new DateService();

  const messagesPerDay = chat.messages?.reduce((groupBy, message) => {
    const dailyMessageGroup: IMessage[] = groupBy[groupBy.length - 1];
    if (!dailyMessageGroup.length) {
      dailyMessageGroup.push(message);
    } else {
      const { messageDate } = dailyMessageGroup[0];

      if (dateService.isSameDay(messageDate, message.messageDate)) {
        dailyMessageGroup.push(message)
      } else {
        groupBy.push([message])
      }

    }
    return groupBy;
  }, [[]] as (IMessage[])[]);


  const inputRef = useRef<null | HTMLDivElement>(null);


  useEffect(() => {
    // Scroll to the bottom of the chat box
    inputRef.current ? inputRef.current.scrollIntoView({ behavior: 'smooth' }) : undefined;
  }, [chat.messages]); // Scroll when messages change

  console.log('Message-history', chat, user);
  return (

    <Box h={'100%'}
      overflowY={'auto'}
      zIndex={'2'}
      position={'relative'}>
      {
        messagesPerDay?.map((messages, index) => {
          return (
            <Box key={index}>
              <Box textAlign={'center'} key={"badge-"+index}>
                <Badge variant='solid' bg={'#2f3b43'} color={'#8696a0'}>
                  {messages[0]?.messageDate?.toDateString()}
                </Badge>
              </Box>
              {messages.map((message) => (
                <Message
                  key={message.id}
                  message={message}
                  userId={user.userId}
                  username={
                    chat.isGroup &&
                      !message.isUserMessage(user.userId) ?
                      user.isThisUserMyContact(message.senderId!) ?
                        user.getContactName(message.senderId!)!
                        :
                        `${message.senderPhoneNumber} - ${message.senderName}`
                      : undefined}
                />
              ))}
            </Box>)
        })

      }
      <div ref={inputRef} />
    </Box>

  );
}

export default React.memo(MessageHistory,  (prevProps, nextProps) => {
	return _.isEqual(prevProps, nextProps);
});