import * as React from 'react';

import _ from 'lodash';
import { AvatarMessageItem, Box, Stack } from '@components';
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
                            key={chat.id}
                            title={chat.title}
                            subtitle={chat.lastMessage.messageContent}
                            value={JSON.stringify(chat.lastMessage) !== '{}' ? chat.lastMessage.messageDate : chat.createdAt}
                            onClick={() => {handleClick(chat.id)}} />
                    ))
                }
            </Stack>
        </Box>
    );
}

export default React.memo(ChatList, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});