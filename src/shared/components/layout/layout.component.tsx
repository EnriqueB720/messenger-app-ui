import * as React from 'react';

import _ from 'lodash';
import { Box, Flex, SideBar, ChatSection } from '@components';


const Layout: React.FC = () => {

    return (
        <Box padding={5}>
            <Flex>
                <SideBar />
                <ChatSection/>
            </Flex>
        </Box>

    );
}

export default React.memo(Layout, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});