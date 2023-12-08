import * as React from 'react';

import _ from 'lodash';
import { Box, Message } from '@components';
import { MessagesHistoryProps } from '@types';


const MessageHistory: React.FC<MessagesHistoryProps> = ({
    chat,
    messages,
    user
}) => {

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
                    messages.map((message, index) => (
                        <Message
                            key={index}
                            messageContent={message.messageContent}
                            messageTime={message.messageDate}
                            isUserMessage={message.isUserMessage(user.userId)}
                            username={chat.isGroup ? message.senderName : undefined}
                        />

                    ))
                }
        </Box>
    );
}

export default React.memo(MessageHistory, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});