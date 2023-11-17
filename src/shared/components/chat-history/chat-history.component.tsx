import * as React from 'react';

import _ from 'lodash';
import { AvatarMessageItem, Box, Stack } from '@components';
import { useChatsQuery, useUserQuery } from "@/shared/generated/graphql-schema";


const ChatHistory: React.FC = () => {

    const user = useUserQuery({
        variables: {
            where: {
                username: "test"
            }
        }
    });

    const chats = useChatsQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                userId: user.data?.user.id
            }
        }
    });

    const handleClick = (chatId: any) => {
        alert('chat clicked: '+chatId)
    }
    return (
        <Box maxW='30%' bg='lightgray' overflowY={'auto'} h={'600px'}>
            <Stack direction='column' divider>
                {
                    chats.data?.chats.map((chat) => (
                       <AvatarMessageItem style={{
                            cursor: 'pointer'
                        }}
                            key={chat.uuid}
                            title={chat.isGroup ? chat.name : chat.participants![1].user?.fullName}
                            subtitle={chat.messages![0].text ? chat.messages![0].text : ''}
                            value={new Date(chat.messages![0].createdAt)}
                            onClick={() => {handleClick(chat.id)}} />
                    ))
                }
                {
                    chats.data?.chats.map((chat) => (
                       <AvatarMessageItem style={{
                            cursor: 'pointer'
                        }}
                            key={chat.uuid}
                            title={chat.isGroup ? chat.name : chat.participants![1].user?.fullName}
                            subtitle={chat.messages![0].text ? chat.messages![0].text : ''}
                            value={new Date(chat.messages![0].createdAt)}
                            onClick={() => {handleClick(chat.id)}} />
                    ))
                }
                {
                    chats.data?.chats.map((chat) => (
                       <AvatarMessageItem style={{
                            cursor: 'pointer'
                        }}
                            key={chat.uuid}
                            title={chat.isGroup ? chat.name : chat.participants![1].user?.fullName}
                            subtitle={chat.messages![0].text ? chat.messages![0].text : ''}
                            value={new Date(chat.messages![0].createdAt)}
                            onClick={() => {handleClick(chat.id)}} />
                    ))
                }
                {
                    chats.data?.chats.map((chat) => (
                       <AvatarMessageItem style={{
                            cursor: 'pointer'
                        }}
                            key={chat.uuid}
                            title={chat.isGroup ? chat.name : chat.participants![1].user?.fullName}
                            subtitle={chat.messages![0].text ? chat.messages![0].text : ''}
                            value={new Date(chat.messages![0].createdAt)}
                            onClick={() => {handleClick(chat.id)}} />
                    ))
                }
                {
                    chats.data?.chats.map((chat) => (
                       <AvatarMessageItem style={{
                            cursor: 'pointer'
                        }}
                            key={chat.uuid}
                            title={chat.isGroup ? chat.name : chat.participants![1].user?.fullName}
                            subtitle={chat.messages![0].text ? chat.messages![0].text : ''}
                            value={new Date(chat.messages![0].createdAt)}
                            onClick={() => {handleClick(chat.id)}} />
                    ))
                }
            </Stack>
        </Box>
    );
}

export default React.memo(ChatHistory, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});