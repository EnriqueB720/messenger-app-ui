import * as React from 'react';

import _ from 'lodash';
import { Box, ChatHistory, ChatSearchBar, SideBarHeader } from '@components';


const SideBar: React.FC = () => {

    return (
        <Box w='30%'>
            <SideBarHeader />
            <ChatSearchBar />
            <ChatHistory />
        </Box>
    );
}

export default React.memo(SideBar, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});