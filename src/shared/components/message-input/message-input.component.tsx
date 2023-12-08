import * as React from 'react';

import _ from 'lodash';
import { Box, TextInputIcon } from '@components';
import { useCallback, useState } from 'react';
import { useCreateDirectMessageMutation, useCreateGroupMessageMutation } from '@/shared/generated/graphql-schema';
import { MessageInputProps } from '@types';

const MessageInput: React.FC<MessageInputProps> = ({chat, user}) => {

  const contactUserId = chat.getContactParticipants(user);
  const [message, setMessage] = useState('')
  const onInputChange = (event: any) => { setMessage(event.target.value) };
  
  const [createDirectMessage] = useCreateDirectMessageMutation()
  const [createGroupMessage] = useCreateGroupMessageMutation();

  const sendDirectMessage = useCallback(async () => {
   await createDirectMessage({
      variables: {
        data: {
          sender: {
            connect: {
              id: user.userId
            }
          },
          contact: {
            userId: user.userId,
            contactUserId
          },
          text: message
        }
      }
    })
  }, [message]);

  const sendGroupMessage = useCallback(async () => {
    await createGroupMessage({
      variables: {
        data: {
          chat: {
            connect:{
              id: chat.id
            }
          },
          sender: {
            connect: {
              id: user.userId
            }
          },
          text: message
        }
      }
    })
  }, [message]);

  const handleKeyDown = (event: any) => {
    if(event.key === 'Enter'){
      chat.isGroup ? sendGroupMessage() : sendDirectMessage();
    }
  };


  return (
    <Box bg='lightgray' padding={2}>
      <TextInputIcon
        leftIconType={'emoji'}
        rightIconType={'send'}
        onLeftIconClick={() => { alert('emoji clicked') }}
        onRightIconClick={chat.isGroup ? sendGroupMessage : sendDirectMessage}
        inputPlaceholder={'Type a message...'}
        inputPadding={'4%'}
        onInputChange={onInputChange}
        onKeyDown={handleKeyDown}
        inputText={message} />
    </Box>

  );
}

export default React.memo(MessageInput, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});