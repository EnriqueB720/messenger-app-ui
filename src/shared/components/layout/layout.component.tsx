import * as React from 'react';

import _ from 'lodash';
import { Box, Flex, MessageHistory, ChatHeader, MessageInput, SideBarHeader, ChatList, ChatSearchBar, MessageInfo } from '@components';
import { useSearchParams } from 'next/navigation';
import { useUserQuery, useChatsQuery, useMessagesQuery } from '@/shared/generated/graphql-schema';
import { Chat, Message, User } from '@model';
import { useEffect, useState, useCallback } from 'react';

const SIDEBAR_HEADER_HEIGHT = 64;
const CHAT_SEARCHBAR_HEADER_HEIGHT = 48;
const MESSSAGE_INPUT_HEIGHT = 56;
//Magic number for fullContentWidt, collapseWidth, etc


const Layout: React.FC = () => {

  const searchParams = useSearchParams();

  const doesChatIdExist = searchParams.has("chatId");

  const chatId = Number.parseInt(searchParams.get('chatId')!);

  const messageId = Number.parseInt(searchParams.get('messageId')!);

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

  const chatResponse = useChatsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      where: {
        id: chatId
      }
    }
  });

  const messagesResponse = useMessagesQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      where: {
        chatId
      }
    }
  });

  useEffect(() => {
    toggleSidebar(!!messageId);
  }, [messageId]);

  const toggleSidebar = useCallback((isOpen: boolean) => {
    if (isOpen) {
      setContentWidth('50%');
      setSidebarWidth('20%');
    } else {
      setContentWidth('70%');
      setSidebarWidth('0%');
    }
  }, [])

  const user = new User(userResponse.data?.user!);
  const chats = (chatsResponse.data?.chats || []).map(data => new Chat(data));
  const chat = new Chat(chatResponse.data?.chats[0]!);
  const messages = (messagesResponse.data?.messages || []).map(data => new Message(data));
  const message = messages.find(m => m.id === messageId);


  return (
    <Box>
      <Flex>
        <Box w='30%' minH={'100vh'}>
          <SideBarHeader data={user} />
          <ChatSearchBar />
          <Box maxH={chatHistoryHeight} overflowY={'auto'}>
            <ChatList data={chats} />
          </Box>
        </Box>
        <Box w={contentWidth} display={'flex'} flexDirection={'column'} minH={'100vh'}>
          {
            doesChatIdExist ? (
              <>
                <ChatHeader height={SIDEBAR_HEADER_HEIGHT} data={chat} />
                <Box flex={1} h={'100%'} maxH={messageHistoryHeight}>
                  <MessageHistory messages={messages} chat={chat} user={user} />
                </Box>
                <Box position={'fixed'} bottom={'0'} w={'inherit'}>
                  <MessageInput chat={chat} user={user} />
                </Box>
              </>
            ) : (
              <Box>
                No chat selected
              </Box>
            )
          }
        </Box>
        <Box w={sidebarWidth}>
          {
            messageId ? 
            <MessageInfo message={message}/>
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