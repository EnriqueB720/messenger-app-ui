import * as React from 'react';

import _ from 'lodash';
import { Box, ChatArea, ChatHeader, MessageInput } from '@components';


const ChatSection: React.FC = () => {

    return (
        <Box w={'70%'}>
            <ChatHeader />
            <ChatArea />
            <MessageInput />
        </Box>
    );
}

export default React.memo(ChatSection, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});