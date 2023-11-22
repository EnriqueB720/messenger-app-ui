import * as React from 'react';

import _ from 'lodash';
import { Box, Flex, ChatArea, ChatHeader, MessageInput, SideBarHeader, ChatHistory, ChatSearchBar } from '@components';

const SIDEBAR_HEADER_HEIGHT = 64;
const CHAT_SEARCHBAR_HEADER_HEIGHT = 48;


const Layout: React.FC = () => {

    let windowInnerHeight;
    if (typeof window !== 'undefined') {
        windowInnerHeight = window.innerHeight;
    }

    return (
        <Box>
            <Flex>
                <Box w='30%' minH={'100vh'}>
                    <SideBarHeader />
                    <ChatSearchBar />
                    <Box maxH={(windowInnerHeight || 754) - SIDEBAR_HEADER_HEIGHT - CHAT_SEARCHBAR_HEADER_HEIGHT} overflowY={'auto'}>
                        <ChatHistory />
                    </Box>
                </Box>
                <Box w='70%' display={'flex'} flexDirection={'column'} minH={'100vh'}>
                    <ChatHeader height={SIDEBAR_HEADER_HEIGHT} />
                    <Box flex={1}>
                        <ChatArea />
                    </Box>
                    <Box position={'fixed'} bottom={'0'} w={'70%'}>
                        <MessageInput />
                    </Box>
                </Box>
            </Flex>
        </Box>

    );
}

export default React.memo(Layout, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});