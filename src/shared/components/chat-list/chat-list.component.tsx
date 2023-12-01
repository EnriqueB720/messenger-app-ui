import * as React from 'react';

import _ from 'lodash';
import { AvatarMessageItem, Box, Stack } from '@components';
import { useChatsQuery, useUserQuery } from "@/shared/generated/graphql-schema";
import { useRouter } from 'next/router';
import { ChatListProps } from '@types';


const ChatList: React.FC<ChatListProps> = ({ data }) => {

    const router = useRouter();

    const handleClick = (chatId: any) => {
        router.push(`?chatId=${chatId}`);
    }
    return (
        <Box bg='lightgray'>
            <Stack direction='column' divider>
                {
                    data.map((chat) => (
                       <AvatarMessageItem style={{
                            cursor: 'pointer'
                        }}
                            key={chat.chatId}
                            title={chat.chatTitle}
                            subtitle={chat.lastMessage.messageContent}
                            value={chat.lastMessage.messageDate}
                            onClick={() => {handleClick(chat.chatId)}} />
                    ))
                }
            </Stack>
        </Box>
    );
}

export default React.memo(ChatList, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});