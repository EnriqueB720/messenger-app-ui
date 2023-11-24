import * as React from 'react';

import _ from 'lodash';
import { Box, Flex, Message, Text } from '@components';
import { useMessagesQuery } from '@/shared/generated/graphql-schema';


const ChatArea: React.FC = () => {

    const messages = useMessagesQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            where: {
                chatId: 5
            }
        }
    })

    return (
        <Box
            backgroundImage={`url(./images/backgroundImage.png)`}
            backgroundPosition={'center'}
            backgroundSize={'cover'}
            backgroundRepeat={'repeat'}
            h={'100%'}
        >
                {
                    messages.data?.messages.map((message, index) => (
                        <Message
                            key={index}
                            messageContent={message.text}
                            messageTime={message.createdAt}
                            isUserMessage={message.senderId == 4}
                        />

                    ))
                }
        </Box>
    );
}

export default React.memo(ChatArea, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});