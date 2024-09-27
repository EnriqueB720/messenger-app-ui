import * as React from 'react';

import _ from 'lodash';
import { Box, TextInputIcon } from '@components';
import { useCallback, useState } from 'react';
import { ChatDocument, ChatsDocument, ChatsQuery, useCreateDirectMessageMutation, useCreateGroupMessageMutation } from '@generated';
import { MessageInputProps } from '@types';
import { useTranslation } from '@/shared/hooks';

const MessageInput: React.FC<MessageInputProps> = ({ chat, user }) => {

  const contactUserId = chat.getContactParticipants(user);
  const [message, setMessage] = useState('')
  const onInputChange = useCallback((event: any) => { setMessage(event.target.value) }, []);

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
          },
          update: (cache, { data }) => {
            cache.writeQuery({
              query: ChatDocument,
              variables: {
                where: {
                  id: chat.id
                }
              },
              data: {
                chat: {
                  ...chat.data,
                  messages: [
                    ...chat.data.messages as any,
                    data?.createGroupMessage
                  ]
                }
              }
            });

            
            const { chats } = cache.readQuery({
              query: ChatsDocument,
              variables:{
                where:{
                  userId: user.userId
                }
              }
            }) as ChatsQuery;

            cache.writeQuery({
              query: ChatsDocument,
              variables:{
                where:{
                  userId: user.userId
                }
              },
              data: {
                chats: chats.map(item => {
                  const newChat = { ...item }
                  if (chat.id === newChat.id) {
                    newChat.messages = [
                      ...(newChat.messages || []),
                      {
                        text: data?.createGroupMessage.text,
                        createdAt: data?.createGroupMessage.createdAt,
                        senderId: data?.createGroupMessage.senderId
                      }
                    ]
                  }

                  return newChat
                })
              }
            });
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
          },
          update: (cache, { data }) => {
              cache.writeQuery({
                query: ChatDocument,
                variables: {
                  where: {
                    id: chat.id
                  }
                },
                data: {
                  chat: {
                    ...chat.data,
                    messages: [
                      ...(chat.data.messages || []),
                      data?.createDirectMessage
                    ]
                  }
                }
              });

              const { chats } = cache.readQuery({
                query: ChatsDocument,
                variables:{
                  where:{
                    userId: user.userId
                  }
                }
              }) as ChatsQuery;

              cache.writeQuery({
                query: ChatsDocument,
                variables:{
                  where:{
                    userId: user.userId
                  }
                },
                data: {
                  chats: chats.map(item => {
                    const newChat = { ...item }
                    if (chat.id === newChat.id) {
                      newChat.messages = [
                        ...(newChat.messages || []),
                        {
                          text: data?.createDirectMessage.text,
                          createdAt: data?.createDirectMessage.createdAt,
                          senderId: data?.createDirectMessage.senderId
                        }
                      ]
                    }

                    return newChat
                  })
                }
              });
          }
        })
      }
      setMessage('');
    }
  }, [message, chat.id]);

  const handleKeyDown = React.useCallback(async (event: any) => {
    if (event.key === 'Enter' && message != '') {
      await sendDirectMessage(!!chat.isGroup)();
    }
  }, [message, chat.id]);

  const { t } = useTranslation();

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