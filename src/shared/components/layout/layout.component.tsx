import * as React from 'react';

import _ from 'lodash';
import { Box, Flex, MessageHistory, ChatHeader, MessageInput, SideBarHeader, ChatList, ChatSearchBar, MessageInfo, BackgroundImage, ChatInfo } from '@components';
import { useSearchParams } from 'next/navigation';
import { useUserQuery, useChatsQuery, useChatLazyQuery, useUserMessageStatusLazyQuery } from '@generated';
import { Chat, User, UserMessageStatus } from '@model';
import { useEffect, useState, useCallback } from 'react';

const SIDEBAR_HEADER_HEIGHT = 64;
const CHAT_SEARCHBAR_HEADER_HEIGHT = 48;
const MESSSAGE_INPUT_HEIGHT = 56;
const FULL_CONTENT_WIDTH = '70%';
const COLLAPSE_CONTENT_WIDTH = '50%';
const SIDEBAR_COLLAPSE_WIDTH = '20%';


const Layout: React.FC = () => {

  const searchParams = useSearchParams();

  const doesChatIdExist = searchParams.has("chatId");

  const chatId = Number.parseInt(searchParams.get('chatId')!);

  const messageId = Number.parseInt(searchParams.get('messageId')!);

  const displayChatInfo = Boolean(searchParams.get('displayChatInfo')!);

  const windowInnerHeight = typeof window !== 'undefined' ? window.innerHeight : 754;

  const messageHistoryHeight = windowInnerHeight - MESSSAGE_INPUT_HEIGHT - SIDEBAR_HEADER_HEIGHT;

  const chatHistoryHeight = windowInnerHeight - SIDEBAR_HEADER_HEIGHT - CHAT_SEARCHBAR_HEADER_HEIGHT;

  const [contentWidth, setContentWidth] = useState('50%');

  const [sidebarWidth, setSidebarWidth] = useState('0%');

  const userResponse = useUserQuery({
    variables: {
      where: {
        username: "test"
      }
    }
  });

  const chatsResponse = useChatsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      where: {
        userId: userResponse.data?.user.id
      }
    }
  });

  const [fetchChatById, chatResponse] = useChatLazyQuery({
    fetchPolicy: 'cache-and-network'
  });

  const [fetchMessagesStatusByMesssageId, userMessageStatusResponse] = useUserMessageStatusLazyQuery({
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    toggleSidebar(!!messageId || displayChatInfo);
  }, [messageId, displayChatInfo]);

  useEffect(() => {
    if (chatId) {
      fetchChatById({
        variables: {
          where: {
            id: chatId
          }
        }
      })
    }
  }, [chatId]);

  useEffect(() => {
    if (messageId) {
      fetchMessagesStatusByMesssageId({
        variables: {
          where: {
            messageId
          }
        }
      })
    }
  }, [messageId])



  const toggleSidebar = useCallback((isOpen: boolean) => {
    if (isOpen) {
      setContentWidth(COLLAPSE_CONTENT_WIDTH);
      setSidebarWidth(SIDEBAR_COLLAPSE_WIDTH);
    } else {
      setContentWidth(FULL_CONTENT_WIDTH);
      setSidebarWidth('0%');
    }
  }, [])

  const user = new User(userResponse.data?.user!);
  const chats = (chatsResponse.data?.chats || []).map(data => new Chat(data));
  const chat = new Chat(chatResponse.data?.chat!);
  const message = chat.messages?.find(m => m.id === messageId);
  const messageStatus = (userMessageStatusResponse.data?.userMessageStatus || []).map(data => new UserMessageStatus(data));

  return (
    <Box>
      <Flex>
        <Box w='30%' minH={'100vh'} bg={'#111b21'}>
          <SideBarHeader data={user} />
          <ChatSearchBar />
          <Box maxH={chatHistoryHeight} overflowY={'auto'}>
            <ChatList data={chats} user={user} />
          </Box>
        </Box>
        <Box w={contentWidth} display={'flex'} flexDirection={'column'} minH={'100vh'} position={'relative'} bg={'#0b141a'}>
          <BackgroundImage />
          {
            doesChatIdExist ? (
              <>
                <ChatHeader height={SIDEBAR_HEADER_HEIGHT} data={chat} user={user} />
                <Box flex={1} h={'100%'} maxH={messageHistoryHeight}>
                  <MessageHistory chat={chat} user={user} />
                </Box>
                <Box position={'fixed'} bottom={'0'} w={'inherit'}>
                  <MessageInput chat={chat} user={user} />
                </Box>
              </>
            ) : (
              undefined
            )
          }
        </Box>
        <Box w={sidebarWidth} h={'100vh'} bg={'#0b141a'}>
          {
            messageId && message ?
              <MessageInfo user={user} message={message} messageStatuses={messageStatus} headerHeight={SIDEBAR_HEADER_HEIGHT} />
              :
              undefined
          }
          {
            displayChatInfo ?
              <ChatInfo chat={chat} user={user} headerHeight={SIDEBAR_HEADER_HEIGHT} contactId={!chat.isGroup ? chat.getContactParticipants(user)! : undefined} />
              :
              undefined
          }
        </Box>
      </Flex>
    </Box>

  );
}

export default React.memo(Layout, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});