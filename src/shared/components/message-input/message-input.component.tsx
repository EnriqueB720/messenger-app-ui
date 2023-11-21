import * as React from 'react';

import _ from 'lodash';
import { Box, TextInputIcon } from '@components';

const MessageInput: React.FC = () => {


    return (
        <Box bg='lightgray' padding={1}>
            <TextInputIcon
                leftInconType={'emoji'}
                rightInconType={'send'}
                onLeftIconClick={() => { alert('emoji clicked') }}
                onRightIconClick={() => { alert('message sent') }}
                inputPlaceholder={'Type a message...'} 
                inputPadding={'4%'}/>
        </Box>

    );
}

export default React.memo(MessageInput, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});