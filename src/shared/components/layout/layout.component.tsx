import * as React from 'react';

import _ from 'lodash';
import { Box, Flex, MessageHistory, ChatHeader, MessageInput, SideBarHeader, ChatList, ChatSearchBar } from '@components';
import { useSearchParams } from 'next/navigation';
import { useUserQuery, useChatsQuery, useMessagesQuery } from '@/shared/generated/graphql-schema';
import { Chat, Message, User } from '@model';

const SIDEBAR_HEADER_HEIGHT = 64;
const CHAT_SEARCHBAR_HEADER_HEIGHT = 48;
const MESSSAGE_INPUT_HEIGHT = 56;


const Layout: React.FC = () => {

    const searchParams = useSearchParams();

    const doesChatIdExist = searchParams.has("chatId");

    const chatId = Number.parseInt(searchParams.get('chatId')!);

    const windowInnerHeight = typeof window !== 'undefined' ? window.innerHeight : 754;

    const messageHistoryHeight = windowInnerHeight - MESSSAGE_INPUT_HEIGHT - SIDEBAR_HEADER_HEIGHT;

    const chatHistoryHeight = windowInnerHeight - SIDEBAR_HEADER_HEIGHT - CHAT_SEARCHBAR_HEADER_HEIGHT;

    //Querying a single user
    const userResponse = useUserQuery({
        variables: {
            where: {
                username: "test"
            }
        }
    });

    //Querying multiple chats
    const chatsResponse = useChatsQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                userId: userResponse.data?.user.id
            }
        }
    });

    //Querying a single chat
    const chatResponse = useChatsQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                id: chatId
            }
        }
    });

    //Querying all chat messages
    const messagesResponse = useMessagesQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                chatId: chatId
            }
        }
    });

    const user = new User(userResponse.data?.user!);
    const chats = (chatsResponse.data?.chats || []).map(data => new Chat(data));
    const chat = new Chat(chatResponse.data?.chats[0]!);
    const messages = (messagesResponse.data?.messages || []).map(data => new Message(data));

    return (
        <Box>
            <Flex>
                <Box w='30%' minH={'100vh'}>
                    <SideBarHeader />
                    <ChatSearchBar />
                    <Box maxH={chatHistoryHeight} overflowY={'auto'}>
                        <ChatList data={chats} />
                    </Box>
                </Box>
                <Box w='70%' display={'flex'} flexDirection={'column'} minH={'100vh'}>

                    {
                        doesChatIdExist ? (
                            <>
                                <ChatHeader height={SIDEBAR_HEADER_HEIGHT} data={chat} />
                                <Box flex={1} h={'100%'}
                                    maxH={messageHistoryHeight}>
                                    <MessageHistory messagesData={messages} chatData={chat} userData={user}/>
                                </Box>
                                <Box position={'fixed'} bottom={'0'} w={'70%'}>
                                    <MessageInput />
                                </Box>
                            </>
                        ) : (
                            <Box>
                                No chat selected
                            </Box>
                        )
                    }


                </Box>
            </Flex>
        </Box>

    );
}

export default React.memo(Layout, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});