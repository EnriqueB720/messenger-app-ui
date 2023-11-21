import * as React from 'react';

import _ from 'lodash';
import { Box, ChatArea, ChatHeader, Flex, SideBar, Stack } from '@components';


const Layout: React.FC = () => {

    return (
        <Box padding={5}>
            <Flex>
                <SideBar />
                <Box w={'70%'}>
                    <ChatHeader />
                    <ChatArea />
                </Box>
            </Flex>
        </Box>

    );
}

export default React.memo(Layout, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});