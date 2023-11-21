import * as React from 'react';

import _ from 'lodash';

import { Box, TextInputIcon } from '@components';


const ChatSearchBar: React.FC = () => {
    return (
        <Box bg='lightgray' padding={1}>
            <TextInputIcon
                leftInconType={'search'}
                rightInconType={'filter'}
                inputPlaceholder={'Search in chats'}
                onLeftIconClick={() => { alert('Search has been made') }}
                onRightIconClick={() => { alert('filter clicked') }} />
        </Box>
    );
}

export default React.memo(ChatSearchBar, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});