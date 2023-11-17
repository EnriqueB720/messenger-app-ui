import * as React from 'react';

import _ from 'lodash';
import { Box, ChatHistory, SideBarHeader } from '@components';


const Layout: React.FC = () => {

    return (
        <Box padding={5}>
        {/*  Side bar */}
            {/*  Side bar header*/}
                <SideBarHeader/>
            {/*  Side bar search bar*/}
            {/*  Side bar chat history*/}
                <ChatHistory />

        {/*  Chat section*/}
            {/* Chat header*/}
            {/* Chat area*/}
            {/* Chat message input*/}

        </Box>

    );
}

export default React.memo(Layout, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});