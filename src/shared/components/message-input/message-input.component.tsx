import * as React from 'react';

import _ from 'lodash';
import { Box, TextInputIcon } from '@components';
import { useCallback, useState } from 'react';
import { useCreateDirectMessageMutation, useCreateGroupMessageMutation } from '@/shared/generated/graphql-schema';
import { MessageInputProps } from '@types';
import { useTranslation } from '@/shared/hooks';

const MessageInput: React.FC<MessageInputProps> = ({ chat, user }) => {

  const contactUserId = chat.getContactParticipants(user);
  const [message, setMessage] = useState('')
  const onInputChange = (event: any) => { setMessage(event.target.value) };

  const [createDirectMessage] = useCreateDirectMessageMutation()
  const [createGroupMessage] = useCreateGroupMessageMutation();

  const sendDirectMessage = useCallback((isGroup: boolean) => async () => {
    const isMessageEmpty = message === '';

    if (!isMessageEmpty) {
      if (isGroup) {
        await createGroupMessage({
          variables: {
            data: {
              chat: {
                connect: {
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
      } else {
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
      }

    }
  }, [message]);

  const handleKeyDown = async (event: any) => {
    if (event.key === 'Enter' && message != '') {
      await sendDirectMessage(!!chat.isGroup)();
    }
  };
  
  const {t} = useTranslation();

  return (
    <Box bg={'#202c33'} padding={2}>
      <TextInputIcon
        inputBackgroundColor={'#2a3942'}
        leftIconType={'emoji'}
        rightIconType={'send'}
        onLeftIconClick={() => { alert('emoji clicked') }}
        onRightIconClick={sendDirectMessage(!!chat.isGroup)}
        inputPlaceholder={t('chatInput.placeholderText')}
        inputPadding={'5%'}
        onInputChange={onInputChange}
        onKeyDown={handleKeyDown}
        inputText={message} />
    </Box>

  );
}

export default React.memo(MessageInput, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});