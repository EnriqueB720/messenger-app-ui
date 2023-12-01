import * as React from 'react';

import _ from 'lodash';
import { Box, Flex, MessageHistory, ChatHeader, MessageInput, SideBarHeader, ChatList, ChatSearchBar } from '@components';
import { useSearchParams } from 'next/navigation';
import { useUserQuery, useChatsQuery } from '@/shared/generated/graphql-schema';
import { Chat } from '@model';

const SIDEBAR_HEADER_HEIGHT = 64;
const CHAT_SEARCHBAR_HEADER_HEIGHT = 48;
const MESSSAGE_INPUT_HEIGHT = 56;


const Layout: React.FC = () => {

    const searchParams = useSearchParams();

    const doesChatIdExist = searchParams.has("chatId");

    const windowInnerHeight = typeof window !== 'undefined' ? window.innerHeight : 754;

    const messageHistoryHeight = windowInnerHeight - MESSSAGE_INPUT_HEIGHT - SIDEBAR_HEADER_HEIGHT; 

    const chatHistoryHeight = windowInnerHeight - SIDEBAR_HEADER_HEIGHT - CHAT_SEARCHBAR_HEADER_HEIGHT; 


    const user = useUserQuery({
        variables: {
            where: {
                username: "test"
            }
        }
    });

    const chatsResponse =  useChatsQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                userId: user.data?.user.id
            }
        }
    });

    const chats = (chatsResponse.data?.chats || []).map(data => new Chat(data));

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
                                <ChatHeader height={SIDEBAR_HEADER_HEIGHT} chatId={0} />
                                <Box flex={1} h={'100%'}
                                    maxH={messageHistoryHeight}>
                                    <MessageHistory />
                                </Box>
                                <Box position={'fixed'} bottom={'0'} w={'70%'}>
                                    <MessageInput />
                                </Box>
                            </>
                        ) : (
                            <Box>
                                Download
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