import * as React from 'react';

import _ from 'lodash';
import { Box, Message } from '@components';
import { useChatsQuery, useMessagesQuery } from '@/shared/generated/graphql-schema';
import { useSearchParams } from 'next/navigation';


const MessageHistory: React.FC = () => {

    const searchParams = useSearchParams();
    let chatId = Number.parseInt(searchParams.get('chatId')!);
 
    const messages = useMessagesQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                chatId: chatId
            }
        }
    });

    const chat = useChatsQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                id: chatId
            }
        }
    });

    return (
        <Box
            backgroundImage={`url(./images/backgroundImage.png)`}
            backgroundPosition={'center'}
            backgroundSize={'cover'}
            backgroundRepeat={'repeat'}
            h={'100%'}
            overflowY={'auto'}
        >
                {
                    messages.data?.messages.map((message, index) => (
                        <Message
                            key={index}
                            messageContent={message.text}
                            messageTime={message.createdAt}
                            isUserMessage={message.senderId == 4}
                            username={chat.data?.chats[0].isGroup ? message.sender?.fullName! : undefined}
                        />

                    ))
                }
        </Box>
    );
}

export default React.memo(MessageHistory, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});