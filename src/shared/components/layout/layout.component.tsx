import * as React from 'react';

import _ from 'lodash';
import { ChatHistory } from '@components';


const Layout: React.FC = () => {
    
    return (
    // Side bar
        // Side bar header
        // Side bar search bar
        // Side bar chat history
        <ChatHistory/>

    // Chat section
        // Chat header
        // Chat area
        // Chat message input
    );
}

export default React.memo(Layout, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});