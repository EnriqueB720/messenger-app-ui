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

    return (
        <Box maxW='30%' bg='lightgray'>
            <Stack direction='column' divider >
                {
                    chats.data?.chats.map((chat) => (
                        <AvatarMessageItem
                            key={chat.uuid}
                            title={chat.isGroup ? chat.name : chat.participants![1].user?.fullName}
                            subtitle={chat.messages![0].text ? chat.messages![0].text : ''}
                            value={new Date(chat.messages![0].createdAt)} />
                    ))
                }
            </Stack>
        </Box>
    );
}

export default React.memo(ChatHistory, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});