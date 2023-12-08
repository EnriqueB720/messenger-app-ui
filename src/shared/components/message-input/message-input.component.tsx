import * as React from 'react';

import _ from 'lodash';
import { Box, TextInputIcon } from '@components';
import { useCallback, useState } from 'react';
import { useChatsQuery, useCreateDirectMessageMutation } from '@/shared/generated/graphql-schema';
import { useSearchParams } from 'next/navigation';
import { MessageInputProps } from '@types';

const MessageInput: React.FC<MessageInputProps> = ({chat, user}) => {

  const contactUserId = chat.getContactParticipants(user);
  const [message, setMessage] = useState('')
  const onInputChange = (event: any) => { setMessage(event.target.value) };
  
  const [createDirectMessage] = useCreateDirectMessageMutation()
  const sendMessage = useCallback(async () => {
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
  }, [message])


  return (
    <Box bg='lightgray' padding={2}>
      <TextInputIcon
        leftIconType={'emoji'}
        rightIconType={'send'}
        onLeftIconClick={() => { alert('emoji clicked') }}
        onRightIconClick={sendMessage}
        inputPlaceholder={'Type a message...'}
        inputPadding={'4%'}
        onInputChange={onInputChange}
        inputText={message} />
    </Box>

  );
}

export default React.memo(MessageInput, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});